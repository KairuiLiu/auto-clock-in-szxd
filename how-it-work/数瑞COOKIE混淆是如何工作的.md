### 数瑞COOKIE混淆是如何工作的

本次分析文件特征

- 请求HTML文件包含: `set-cookie: 36501JSESSIONID`与`set-cookie: lD01YhBPHVTHO`, 在dev-tools的应用面板中查到`cookie: lD01YhBPHVTHP`
- HTML引入JS文件`cIZgBeQvEQK9/AiHJXIs5GyJH.dee59c7.js`
- JS文件开头为`$_ts...$_ts['dee59c7']`, 其中`dee59c7`为版本
- HTML中JS多为如下形式

  ```js
  function _$lt(_$EZ) {
    var _$aS = _$EZ.length;
    var _$$N,
      _$VC = new _$XD(_$aS - 1),
      _$vC = _$EZ.charCodeAt(0) - 97;
    for (var _$Vw = 0, _$JP = 1; _$JP < _$aS; ++_$JP) {
      _$$N = _$EZ.charCodeAt(_$JP);
      if (_$$N >= 40 && _$$N < 92) {
        _$$N += _$vC;
        if (_$$N >= 92) _$$N = _$$N - 52;
      } else if (_$$N >= 97 && _$$N < 127) {
        _$$N += _$vC;
        if (_$$N >= 127) _$$N = _$$N - 30;
      }
      _$VC[_$Vw++] = _$$N;
    }
    return _$yn.apply(null, _$VC);
  }
  ```

#### 大致工作原理

- 获取HTML文件, HTML文件携带两个Cookie
- HTML请求JS文件(JS文件为乱码)
- HTML中JS解密JS文件, 得到JS字符串
- 使用`eval`执行JS字符串, JS字符串计算并设置加密`Cookie`(`lD01YhBPHVTHP`)
- 离谱的是`RUISHUTESTFUNCTIONENTRY`每次请求获取值不同(其中除了`$_ts`之外变量名都是变化的, 但是保证每次计算结果相同)

#### 解决思路

将代码从压缩(单行)形式转为格式化后的多行模式, 方便debug

#### 准备工作(解决动态JS)

由于JS与HTML中变量都是动态的, 打开网站后`Ctrl+S`保存全部文件. 在VSCode中打开HTML文件, 使用格式化工具格式化, 得到如下形式HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- ... -->
  <meta content="{qXVS74Mnw/*...*/03336qqqqqqqq">
  <script type="text/javascript" src="../cIZgBeQvEQK9/AiHJXIs5GyJH.dee59c7.js"></script>
  <script>
    (function () {
    var _$XI = 16,
    // _$_0 = [
      // [14, 10, 13, 15, 12, 1, 0, 8, 5, 12, 7, 3, 2, 9, 12, 11, 5],
      // [
    })()
  </script>
</head>
<!-- ... -->
```

其中

- `<meta>`中字符串参与加密
- 第一个`<script>`请求乱码JS
- 第二个`<script>`中的立即执行函数是"解码器"

为了方便分析, 我们将立即执行函数分离到`outer.js`并引入

```html
<meta content="{qXVS7/*...*/3703336qqqqqqqq">
<script type="text/javascript" src="../cIZgBeQvEQK9/AiHJXIs5GyJH.dee59c7.js"></script>
<script type="text/javascript" src="js/outer.js"></script>
```

在`outer.js`立即执行函数前加入`debugger`这样我们可以在解密前暂停

我们使用本地JS文件进行分析, 房子变量换来换去

在保存文件夹下执行

```shell
python -m http.server 8081
```

这样在`0.0.0.0:8081`开启了一个web server

#### 清空自带debugger(解决前端反调试)

瑞数的前端反调试就是注册了几个定时器, 每500ms去`eval(function)`, 这个function获取一个时间戳并debugger. 两个解决方法

- 在debugger的行号处右键, 选择一律不再此处暂停, 看到出现一个黄色问号表示忽略了这个debugger
- 借助JS是单线程的, 在debugger时候执行
  
  ```js
  for(let i = 0;i<999999;i++)
    clearInterval(i)
  ```

#### 劫持`cookie`与`eval`

在前面介绍中, 我们知道, 这段JS的作用就是定时`set-cookie`. 所以我们要将`cookie`的`set`与`get`进行重写, 方便在读写cookie时暂停, 进行堆栈分析. 在`outer.js`被`debugger`暂停的时候, 写入

```js
var _cookie = document.__lookupSetter__('cookie');      // 移走cookie
document.__defineSetter__("cookie", function(c) {       // 重设cookie
  debugger;
  _cookie=c;
} );
document.__defineGetter__("cookie", function() {
  debugger;
  return _cookie;
} );
```

同样, 解密函数需要先解密加密串, 然后需要使用`eval`执行解密JS, 所以需要劫持`eval`

```js
orig = window.eval;
window.eval=function(str){debugger;orig(str);}
window.eval.toString = function (){return orig.toString();}
```

#### 分析`eval`入口

在dev-tools中执行代码, 代码从`outer.js`的首行开始执行, 暂停在了`eval`, 在调用堆栈中选到上一级`_$XC`, 看到正在执行的代码

```js
_$aS = _$$N[_$6p[47]](_$qP, _$EZ);
```

- `_$$N`: 未知函数
- `_$6p`: 可以看到是一个变量替换表

  ```js
  Array(56)
  0: "}"
  1: "$_ts"
  2: ","
  3: "random"
  4: "substr"
  ```

- `_$6p[47]`: `call`
- `_$qP`: `window`
- `_$EZ` : 一个172K的代码

  ```js
  (function(){var _$1U=0,_$f8=$_ts.scj,_$v4=$_ts.aebi;function _$yB(){var _$vI=[730];Array.prototype.push.apply(_$vI,arguments);return _$iv.apply(this,_$vI);}function _$9j(){var _$vI=[709];Array.prototype.push.apply(_$vI,arguments);return _$iv.apply(this,_$vI);}function _$b_(){var _$vI=[614];Array.prototype.push.apply(_$vI,arguments);return _$iv.apply(this,_$vI);}function _$Th(){var _$vI=[185];Array.prototype.push.apply(_$vI,arguments);return _$iv.apply(this,_$vI);}function _$IT(){var _$vI=[607];Array.prototype.push.apply(_$vI,arguments);return _$iv.apply(this,_$vI);}function _$Hj(){var _$vI=[810];Array.prototype.push.apply(_$vI,arguments);return _$iv.apply(this,_$vI);}/*...*/})()
  ```

是这个表达式调用的`evla`, 所以只能是`_$$N`是`eval`, 这个表达式大概意思就是

```js
_$aS = eval.call(window, '一个长长的String')
```

也就是说, 这个String就是待释放的代码. 保存String为`inner.js`, 格式化代码, 并替换导出

```js
RUISHUTESTFUNCTIONENTRY = function(){
  // ...
}
```

```diff
  if (60 === 20 * _$LZ) {
-   _$aS = _$$N[_$6p[47]](_$qP, _$EZ);
+   RUISHUTESTFUNCTIONENTRY();
  } else if (_$LZ * 69 === 69) {
```

相当于我们手动释放了解密函数, 但是使用我们的方法后, 不会出现如下情形: 解密代码释放为单行, 返回堆栈时只能看到一行, 完全无法debug

```js
debugger> XXX...
```

注意, 这不意味着我们可以直接删除`AiHJXIs5GyJH.dee59c7.js`, 打开就可以看到, 我们解密的字符串开头与其不同

- 我们解密的

  ```js
  function () {
    var _$1U = 0,
      _$f8 = $_ts.scj,
      _$v4 = $_ts.aebi;
    function _$yB() {
      var _$vI = [730];
      Array.prototype.push.apply(_$vI, arguments);
      return _$iv.apply(this, _$vI);
    }
  }
  ```

- 原文件

  ```js
  $_ts=window['$_ts'];if(!$_ts)$_ts={};$_ts.scj=[];$_ts['dee59c7']
  ```

找点特殊代码比对, 我找了

```js
'=a"S%$Y\'tU9q.C,~NQy-^|6rXh:H?M[<@fK;0W+VI2RiJ(FencmskgL#OBT>\\4Gj`P&1_wD7oZxAb]}updv5Ez) *3{!l8/',
```

发现在`AiHJXIs5GyJH.dee59c7.js`也存在

可以大胆的猜测执行逻辑: 

- 加载`AiHJXIs5GyJH.dee59c7.js`, 释放变量(虽然变量值可能是乱码)
- 加载解密器
- 解密器解密`AiHJXIs5GyJH.dee59c7.js`并获得待释放JS字符查
- 释放JS, 执行计算逻辑

我们做的事情就是劫持eval的内容, 并格式化代码, 手动释放, 方便调试. 为此, HTML应变为如下结构

```html
<meta content="{qXVS7/*...*/3703336qqqqqqqq">
<script type="text/javascript" src="../cIZgBeQvEQK9/AiHJXIs5GyJH.dee59c7.js"></script>
<script type="text/javascript" src="js/inner.js"></script>
<script type="text/javascript" src="js/outer.js"></script>
```

---

重新加载网页, 继续捕获

```js
var _$ET = _$Z5[_$SH[9]](_$qP[_$SH[43]], '; ');
```

检查变量

- `_$SH[9]`: `"call"`
- `_$Z5`: `split`
- `_$SH`: 可以看到是一个变量替换表
  
  ```js
  Array(723)
  [0 … 99]
  0: "prototype"
  1: "type"
  2: "toString"
  3: "readyState"
  4: "concat"
  5: "indexOf"
  6: "string"
  7: "body"
  8: "slice"
  ```

- `_$qP`: `document`
- `_$SH[43]`: `cookie`

也就是这句指令的意思是

```js
_$ET = split['call'](document['cookie'],';')
```

值得注意到是3806行上面的代码, Chrome给出提示`_$CG='lD01YhBPHVTHP='`. 这就是我们要拼的头啊!

没什么意思...继续执行

---

暂停到了`cookie.setter`, 返回上级堆栈`_$iv`, 继续检查

- `_$qP`: `document`
- `_$SH[43]`: `cookie`
- `_$qS`: "enable_lD01YhBPHVTH=true"

相当于设置了一个cookie, 这个cookie是一个临时的(多刷新几次就发现了), 继续执行

---

暂停到了`eval`, 返回上层堆栈`_$iv`

```js
_$ET = _$qt(_$SH[615]);
```

- `_$SH[615]`: `"Z8XHJJY.bmF0aXZlRmlVyUHJ()"`
- `_$SH`是变量替换表
- `_$qt`: `ƒ (str){debugger;orig(str);}` 这就是我们劫持的`eval`

可惜这次执行失败了, 因为没有`Z8XHJJY`, 程序进入下面的`catch()`并出来

---

继续执行

```js
_$ET = _$qt(_$SH[661]);
```

同上, 落入catch

---

继续执行, 暂停在`cookie.set`, 查看堆栈`_$iv`

```js
_$qP[_$SH[43]] =      // document.cookie = 
      _$CG +          // 刚刚遇到过, 是我们需要的"lD01YhBPHVTHP"
      _$SH[47] +      // `=`
      _$41 +          // lD01YhBPHVTHP的值
      _$iv(994) +     // ''
      _$SH[589] +     // ; path...
      _$iv(983, _$s2);// '; expires=Wed, 06 Apr 2022 11:26:36 GMT; Secure'
```

也就是在此执行了一次拼串, 查看调用栈, 看到了我们命名的`RUISHUTESTFUNCTIONENTRY()`

所有操作都是在这里进行的

至此, 我们有了变量替换表, `inner.js`, `outer.js`, `<meta>`, 如何解密代码呢? 

#### 解决方案

**我的样本文件[在此](./ruishu/index.html)**

- 根据已有变量替换表, 一行一行理清逻辑...(费头发)
- 既然我们知道了加密程序就是在反复执行`inner.js`, 不如欲擒故纵, 在Node中引入并执行, 但是Node中没有DOM/BOM方法, 所以需要我们实现几个假的, 尤其是`query meta`的时候(!这是一种非常不安全的方法, 例如加密者完全可以判断当前是否为Node环境, 如果是, 直接执行攻击指令)
- 使用中间人攻击, 结合变量替换表, 实现解密JS
- 使用模拟爬虫工具
- 变量替换始终是一种猫鼠游戏. 更好的方法是: 使用`jsdom`模块在Node中实现轻量化浏览器环境, 我的实现代码如下

  ```js
  function promiseStick() {
    let res, rej;
    const p = new Promise((resolve, reject) => {
      [res, rej] = [resolve, reject];
    });
    return Object.assign(p, { res, rej });
  }

  async function reqLoginToken(p = promiseStick()) {
    const cookieMap = new Map();
    let dom = await JSDOM.fromURL(
      'https://xxx.cn',
      {
        resources: 'usable',
        runScripts: 'dangerously',
      }
    );
    // 劫持cookie获取生成时机
    dom.window._cookie = dom.window.document.__lookupSetter__('cookie');
    dom.window.document.__defineSetter__('cookie', function (c) {
      _cookie = c;
      const cs = c.split('=', 2);
      cookieMap.set(cs[0], cs[1]);
      if (cookieMap.size === 2) {   // 一个enable_XX临时token, 一个加密的
        p.res({
          cookie: Object(dom.cookieJar.store.idx['uaaap.swu.edu.cn']),
          cookieE: cookieMap.get(config.login.encryptCookie),
        });
        dom.window.close();
        dom = null;
      }
    });
    dom.window.document.__defineGetter__('cookie', function () {
      return _cookie;
    });
    return p;
  }
  ```

值得学习的东西

- cookie&eval劫持
- dev-tool的一律不暂停
- setInterval清除debugger