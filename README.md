<h2 align="center">
<img src="./how-it-work/img/logo.png" width="192" height="192"/>
<br/>Auto Clock In SZXD
</h2>

<p align="center"><strong>川渝某深蓝色大学数智X大平台, 自动健康上报 & 查寝 & 该平台API文档</strong></p>

![nodejs](https://img.shields.io/badge/Node\.js-339933?style=flat-square&logo=Node.JS&logoColor=white) ![ByteDance](https://img.shields.io/badge/ByteInspire-3c8cff?style=flat-square&logo=ByteDance&logoColor=white) ![Tencent](https://img.shields.io/badge/TencentCloud-1261fe?style=flat-square&logo=GoogleCloud&logoColor=white) ![GithubAction](https://img.shields.io/badge/Github%20Action-181717?style=flat-square&logo=github&logoColor=white)

**⚠️注意: 该项目仅适用于钉钉数智X大平台, 不适用于钉钉原生的考勤打卡等功能**

### ✨特性

- 傻瓜式教程, 全自动打卡; 一次配置, 永久使用
- 可自定义每日查寝图片, 且支持多种图片上传模式(前端上传, 本地生成, API获取...)
- 邮件报告打卡结果
- 高度可自定义化
- [可选]依托于Github Action, 零成本实现自动触发打卡与图片存储(功能仍在测试)
- [可选]依托于字节跳动轻服务, 零成本实现云函数, 云数据库, 小中间件, 页面部署

  > update 2022.04.14: 轻服务将于2022年6月14日正式停服, 请尽量将项目迁移至本地或腾讯云云函数
- [可选]依托于腾讯云云函数与腾讯云对象存储(可能产生费用)

  > update 2022.05.20: 腾讯云云服务计费规则将于2022年6月1日修改. 在新的计费体系下, 用户每月可能至少需要消费9.9元. 您可以使用免费的Github Action实现免费打卡

### 📁文件结构说明

```bash
.
├── apis-clock-in-used     本项目使用API说明
├── apis-szxd-docs         数智X大公开API文档
├── how-it-work            背景介绍, 原理介绍, 部署指南
├── src                    打卡源码
└── README.md
```

### 🛠️如何使用

- [部署到Github Action](./how-it-work/部署到GithubAction.md)
- [部署到本地/云服务器](./how-it-work/部署到本地与云服务器.md)
- [部署到腾讯云云函数](./how-it-work/部署到腾讯云云函数.md)
- [手摸手带你将代码部署到轻服务](./how-it-work/部署到轻服务.md)

### ⚙️工作原理

- [统一登录系统是如何工作的](./how-it-work/统一登录系统是如何工作的.md)
- [数智X大是如何工作的](./how-it-work/数智X大是如何工作的.md)
- [瑞数Cookie混淆是如何工作的](./how-it-work/瑞数COOKIE混淆是如何工作的.md)

### 🤔关于项目

- [缘起](./how-it-work/缘起.md)

### 🤕故障排查

- > (node:4447) UnhandledPromiseRejectionWarning: Error: Not supported

  升级Node.JS到最新版本(推荐使用`n`工具进行升级)
- > fialed, reason: Connect ETIMEOUT XXX.XXX.XXX.XXX:XX

  请求超时, 建议更换网络环境(或者使用云服务)

- > 腾讯云云函数随机出现打卡失败`Error: read ECONNRESET`

  配置腾讯云函数, 开启固定出口IP与DNS缓存

- > Github Action 随机出现打卡失败(如`Login Failed`)

  Github服务器在境外, 请求经常会失效, 也没啥办法. 出现错误后转至项目 - Action - clock-in - Run workflow - Run workflow重新执行即可. 若是频繁提示打卡失败, 建议尝试国内其他云服务商.

### 💄自定义

- 开放的API文档可用于自定义功能, 见`/apis-szxd-docs`
