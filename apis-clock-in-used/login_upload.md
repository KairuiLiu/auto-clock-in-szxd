## 获取token&上传图片

难点在于请求链接中有很多next的地址, 所以对哪一部分url进行decode, 对哪一部分进行encode需要细心分析

### 获取登录界面token

#### 接口URL
> https://uaaap.swu.edu.cn/cas/login?service=http://counselor.swu.edu.cn/gateway/fighter-integrate-uaap/integrate/uaap/cas/resolve-cas-return?next=http://counselor.swu.edu.cn/

#### 请求方式
> GET

#### Content-Type
> form-data

#### 请求Query参数
| 参数名  | 示例值                                                                                                                             | 参数类型 | 是否必填 | 参数描述 |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | -------- |
| service | http://counselor.swu.edu.cn/gateway/fighter-integrate-uaap/integrate/uaap/cas/resolve-cas-return?next=http://counselor.swu.edu.cn/ | Text     | 是       | 跳转目标 |

#### 成功响应示例
```javascript
获取token: 36501JSESSIONID=XXXXXXXXXXXXXXXXXXXXXXxXXXXXXXXX-n1; Path=/cas/; Secure; HttpOnly
获取token: lD01YhBPHVTHO=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX; Path=/; 
计算token: lD01YhBPHVTHP=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX...
```

### 获取登录成功token

请求时携带三个token

```text
36501JSESSIONID=XXXXXXXXXXXXXXXXXXXXXXxXXXXXXXXX-n1; Path=/cas/; Secure; HttpOnly
lD01YhBPHVTHO=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX; Path=/; 
lD01YhBPHVTHP=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX...
```
同时注意链接中拼入一个Token

#### 接口URL
> https://uaaap.swu.edu.cn/cas/login;36501JSESSIONID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXX-n1?service=http://counselor.swu.edu.cn/gateway/fighter-integrate-uaap/integrate/uaap/cas/resolve-cas-return?next=http://counselor.swu.edu.cn/#/casLogin?toUrl=/index

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
| 参数名  | 示例值                                                                                                                             | 参数类型 | 是否必填 | 参数描述 |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | -------- |
| service | http://counselor.swu.edu.cn/gateway/fighter-integrate-uaap/integrate/uaap/cas/resolve-cas-return?next=http://counselor.swu.edu.cn/ | Text     | 是       | -        |

#### 请求Body参数
```javascript
{
  "username": "222XXXXXXXXXXXX",
  "password": "XXXXXXXXX",
  "lt": "LT-000000-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "execution": "eXsY",
  "_eventId": "submit",
  "isQrSubmit": "false",
  "qrValue": ""
}
```
| 参数名     | 示例值 | 参数类型 | 是否必填                                                                        | 参数描述 |
| ---------- | ------ | -------- | ------------------------------------------------------------------------------- | -------- |
| username   | String | 是       | 用户名                                                                          |
| password   | String | 是       | i.swu.edu.cn的登录密码                                                          |
| lt         | String | 是       | 来自第一步请求的HTML->form input[name^=lt]                                      |
| execution  | String | 是       | 来自第一步请求的HTML->form input[name^=execution], X表示当前页面刷新次数, Y未知 |
| _eventId   | String | 是       | 来自第一步请求的HTML->form input[name^=_eventId],                               |
| isQrSubmit | String | 是       | 来自第一步请求的HTML->form input[name^=isQrSubmit],                             |
| qrValue    | Object | 是       | 来自第一步请求的HTML->form input[name^=qrValue],                                |

#### 成功响应示例
```javascript
从302的location中获取Token: ST-000000-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 登录token换临时授权码

#### 接口URL
> http://counselor.swu.edu.cn/gateway/fighter-integrate-uaap/integrate/uaap/cas/exchange-token?token=ST-000000-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&_appKey=lighter-portal

#### 请求方式
> POST

#### Content-Type
> form-data

#### 请求Query参数
| 参数名  | 示例值                                                  | 参数类型 | 是否必填 | 参数描述              |
| ------- | ------------------------------------------------------- | -------- | -------- | --------------------- |
| token   | ST-000000-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx | Text     | 是       | 上一步请求获得的token |
| _appKey | lighter-portal                                          | Text     | 是       | 未知参数, 保留即可    |


```javascript
从header中获取临时授权码: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX
```

### 上传图片

#### 接口URL
> http://counselor.swu.edu.cn/gateway//fighter-attachment-manage/common/document/upload

#### 请求方式
> POST

#### Content-Type
> form-data

#### 请求Header参数
| 参数名             | 示例值                              | 参数类型 | 是否必填 | 参数描述   |
| ------------------ | ----------------------------------- | -------- | -------- | ---------- |
| fighter-auth-token | XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX | Text     | 是       | 临时授权码 |
#### 请求Body参数
| 参数名       | 示例值 | 参数类型 | 是否必填 | 参数描述     |
| ------------ | ------ | -------- | -------- | ------------ |
| returnEntity | true   | Text     | 是       | 获取详细信息 |
| file         | -      | Text     | 是       | 图片文件     |
