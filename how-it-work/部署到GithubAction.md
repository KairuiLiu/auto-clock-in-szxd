### 部署到Github Action

使用云函数实现, 您甚至可以不在本地安装Node环境

#### 安装

- 单击绿色`Use this template`按钮将项目加入您的仓库(直接Fork的仓库无法被设置为私有)
- 为项目起一个名字, **选择Private设置为私有仓库**(因为后期要向仓库上传您的Github Token与校园网密码, 邮箱密码(可选), **请务必设置为私有仓库**)

#### 配置

1. 打开`/src/config.js`
   1. 替换第7行`local`为`github`
   2. 在10, 11行输入用户名密码
   3. [可选]按提示修改定位信息
   4. [可选]如需邮件服务, 修改85行为`enable: true,`, 并按提示修改87-91行
   5. [可选]如需使用Github预上传打卡图片, 请按照[使用Github预上传打卡图片](#使用Github预上传打卡图片)修改配置文件
2. [可选]默认在16:30点后调用函数会执行查寝, 16:30点前调用为健康打卡, 如需修改, 请修改`src/github/app.js`第一行
3. [可选]默认Github打卡尝试次数为5次, 如需修改, 请修改`/src/config.js`第93行. 
4. 打开`/.github/workflows/main.yml`, 解除3-4行注释, 默认是在09:31与21:31执行打卡与查寝, 如需修改请修改第4行CRON表达式, **注意: 设置时间时需使用UTC时间**
5. 点击个人头像 - Settings - 左侧Developer settings - 左侧Personal access tokens - Generate new token - 输入备注 - 配置有效期 - 在Select scopes中选中 repo(Full control of private repositories)与workflow - Generate token - 复制token - 转置项目 - 转置`src/github/push.sh` - 替换第3,9行$GH_TOKEN为刚刚复制内容(因为奇怪的原因, 环境变量不可用...)

#### 使用Github预上传打卡图片

1. 修改`src/config.js`53行为`github`
2. 将图片上传至`src/github/img/`即可

#### 使用腾讯云云函数实现定时打卡

选择触发管理, 创建触发器, 触发周期选择自定义触发周期, 输入`CRON`表达式

打卡成功/失败会收到如下邮件

- 打卡成功
 ![打卡成功](./img/打卡成功.jpg)
- 查寝成功
 ![查寝成功](./img/查寝成功.jpg)
- 数智X大返回打卡失败
 ![数智X大返回打卡失败](./img/打卡失败原因.jpg)
- 请求打卡失败
 ![请求打卡失败](./img/打卡失败日志.jpg)


> 如果您认为这个项目对您有帮助, 欢迎在右上角给我一个🌟
