<h2 align="center">
<img src="./how-it-work/img/logo.png" width="192" height="192"/>
<br/>Auto Clock In SZXD
</h2>

<p align="center"><strong>川渝某深蓝色大学数智X大平台, 自动健康上报 & 查寝 & 该平台API文档</strong></p>

![nodejs](https://img.shields.io/badge/Node\.js-339933?style=flat-square&logo=Node.JS&logoColor=white)![ByteDance](https://img.shields.io/badge/ByteInspire-3c8cff?style=flat-square&logo=ByteDance&logoColor=white)![Tencent](https://img.shields.io/badge/TencentCloud-1261fe?style=flat-square&logo=IBMCloud&logoColor=white)

**⚠️注意: 该项目仅用于数智X大小程序, 不适用于钉钉原生的考勤打卡等功能**

### ✨特性

- 傻瓜式教程, 全自动打卡; 一次配置, 永久使用
- 支持自定义每日查寝图片, 支持多种图片上传模式
- 邮件报告打卡结果
- 高度可自定义化
- [可选]依托于字节跳动轻服务, 零成本实现云函数, 云数据库, 小中间件, 页面部署
- [可选]依托于腾讯云函数(字节跳动轻服务暂时无法注册的替代品)

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

- [安装与基本使用](./how-it-work/安装与使用.md)
- [手摸手带你将代码部署到轻服务](./how-it-work/部署到轻服务.md)
- [部署到腾讯云云函数](./how-it-work/部署到腾讯云云函数.md)

### ⚙️工作原理

- [统一登录系统是如何工作的](./how-it-work/统一登录系统是如何工作的.md)
- [数智X大是如何工作的](./how-it-work/数智X大是如何工作的.md)
- [数瑞Cookie混淆是如何工作的](./how-it-work/数瑞COOKIE混淆是如何工作的.md)

### 🤔关于项目

- [缘起](./how-it-work/缘起.md)

### 💄自定义

- 开放的API文档可用于自定义功能, 见`/apis-szxd-docs`
- 字节跳动轻服务为项目提供了大量可自定义空间, 详见轻服务文档
