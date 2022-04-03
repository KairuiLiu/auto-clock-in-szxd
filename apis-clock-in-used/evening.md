## 查寝

```text
一部分显而易见的参数并没有注释, 如有疑问见GitHub上API
```

### 数智X大登录

#### 接口URL
> http://counselor.swu.edu.cn/gateway//fighter-integrate-dingtalk-login/integrate/ding-talk/resolve-return?code=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX&corpId=dingdd44fee6e26b31f3f2c783f7214b6d69

#### 请求方式
> GET

#### Content-Type
> form-data

#### 请求Header参数
| 参数名             | 示例值                              | 参数类型 | 是否必填 | 参数描述   |
| ------------------ | ----------------------------------- | -------- | -------- | ---------- |
| fighter-auth-token | XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX | Text     | 是       | 临时授权码 |
#### 请求Query参数
| 参数名 | 示例值                               | 参数类型 | 是否必填 | 参数描述                    |
| ------ | ------------------------------------ | -------- | -------- | --------------------------- |
| code   | XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX  | Text     | 是       | 临时授权码                  |
| corpId | dingdd44fee6e26b31f3f2c783f7214b6d69 | Text     | 是       | 企业ID, 数智X大似乎就这一个 |

#### 成功响应示例
```javascript
见: 健康打卡-数智X大登录
```
### 获取今日查寝信息



#### 接口URL
> http://counselor.swu.edu.cn/gateway/fighter-workflow/cqtj/getTransitionByToday?fighter-auth-token=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX

#### 请求方式
> POST

#### Content-Type
> form-data

#### 请求Header参数
| 参数名             | 示例值                              | 参数类型 | 是否必填 | 参数描述   |
| ------------------ | ----------------------------------- | -------- | -------- | ---------- |
| fighter-auth-token | XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX | Text     | 是       | 临时授权码 |
#### 请求Query参数
| 参数名             | 示例值                              | 参数类型 | 是否必填 | 参数描述   |
| ------------------ | ----------------------------------- | -------- | -------- | ---------- |
| fighter-auth-token | XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX | Text     | 是       | 临时授权码 |
#### 请求Body参数
| 参数名   | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| -------- | ------ | -------- | -------- | -------- |
| pageNum  | 1      | Text     | 是       | 页号     |
| pageSize | 5      | Text     | 是       | 页大小   |

#### 成功响应示例
```javascript
{
	"code": 200,
	"data": {
		"records": [
			{
				"processInstanceId": "",
				"qdpc": "XXXX",
				"qdkssj": "XX:XX",
				"qdjssj": "XX:XX",
				"tsrq": "XXXX-XX-XX",
				"qdzt": "已签到",
				"cqzmc": "每日查寝设置",
				"id": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
				"taskId": ""
			}
		],
		"total": 76,
		"size": 5,
		"current": 1,
		"orders": [],
		"optimizeCountSql": true,
		"hitCount": false,
		"searchCount": true,
		"pages": 16
	},
	"msg": "成功",
	"exception": null,
	"exceptionClass": null,
	"exceptionMsg": null
}
```
| 参数名                         | 示例值                                 | 参数类型 | 参数描述         |
| ------------------------------ | -------------------------------------- | -------- | ---------------- |
| code                           | 200                                    | Number   | 临时授权码       |
| data                           | -                                      | Object   | 返回数据         |
| data.records                   | -                                      | Object   |
| data.records.processInstanceId | -                                      | Object   |
| data.records.qdpc              | XXXX                                   | String   | 启动频次         |
| data.records.qdkssj            | XX:XX                                  | String   | 开始时间         |
| data.records.qdjssj            | XX:XX                                  | String   | 结束时间         |
| data.records.tsrq              | XXXX-XX-XX                             | String   | 打卡日期         |
| data.records.qdzt              | 已签到                                 | String   | 打卡状态         |
| data.records.cqzmc             | 每日查寝设置                           | String   | 和我没关系       |
| data.records.id                | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX | String   | 查寝ID, 每日变化 |
| data.records.taskId            | -                                      | Object   |
| data.total                     | 76                                     | Number   |
| data.size                      | 5                                      | Number   |
| data.current                   | 1                                      | Number   |
| data.orders                    | {}                                     | Object   |
| data.optimizeCountSql          | true                                   | -        |
| data.hitCount                  | -                                      | -        |
| data.searchCount               | true                                   | -        |
| data.pages                     | 16                                     | Number   |
| msg                            | 成功                                   | String   | 返回文字描述     |
| exception                      | -                                      | Object   |
| exceptionClass                 | -                                      | Object   |
| exceptionMsg                   | -                                      | Object   |
### 获取查寝表单信息
```text
需要参数 fighter-auth-token 替换head cookie query-code
```


#### 接口URL
> http://counselor.swu.edu.cn/gateway//fighter-workflow/form-instance/select?dataId=da489ddbadcd11ec88860050568b5172&formId=2baf9245dabf47e4915354d8587d4e87&procDefId=

#### 请求方式
> GET

#### Content-Type
> form-data

#### 请求Header参数
| 参数名             | 示例值                              | 参数类型 | 是否必填 | 参数描述   |
| ------------------ | ----------------------------------- | -------- | -------- | ---------- |
| fighter-auth-token | XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX | Text     | 是       | 临时授权码 |
#### 请求Query参数
| 参数名    | 示例值                           | 参数类型 | 是否必填 | 参数描述                         |
| --------- | -------------------------------- | -------- | -------- | -------------------------------- |
| dataId    | da489ddbadcd11ec88860050568b5172 | Text     | 是       | 查询数据id(如businssKey)         |
| formId    | 2baf9245dabf47e4915354d8587d4e87 | Text     | 是       | 表单id. 似乎查寝就是这个固定数字 |
| procDefId | -                                | Text     | 是       | -                                |

#### 成功响应示例
```javascript
{
	"code": 200,
	"data": {
		"qsid": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		"ssh": "",
		"ksrq": "XXXX-XX-XX",
		"id": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		"cqfbid": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		"qdsj": [
			"XX:XX",
			"XX:XX"
		],
		"formId": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		"processInstanceId": "",
		"jsdm": "XXX",
		"qdjg": "X",
		"zymc": "XXXXXXXX",
		"dksj": "XXXX-XX-XX XX:XX",
		"sczp": [
			{
				"fileContentType": 'image/png',
				"fileUniqueCode": 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
				"fileSize": 789456,
				"fastDFSThumbImagePath": "XXX/XX/XX/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_150x150.png",
				"value": "/group1/XXX/XX/XX/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.png",
				"label": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.png"
			}
		],
		"ycdksfcl": "",
		"lastUpdateTime": "XXXX-XX-XX XX:XX:XX",
		"tsrq": "XXXX-XX-XX",
		"cqzmc": "每日查寝设置",
		"orgId": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		"fdygh": "XXXXXXXX",
		"zdrq": "XXXX-XX-XX",
		"xhxq": [
			"6"
		],
		"qdsjxpz": "1",
		"bz": "查寝配置",
		"fbrgh": "wipadmin",
		"lastUpdator": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		"qddz": {
			"errorCode": 0,
			"errorMessage": "",
			"locationType": 5,
			"accuracy": 29,
			"latitude": 11.111111,
			"longitude": 111.111111,
			"province": "重庆市",
			"city": "重庆市",
			"district": "北碚区",
			"road": "文渊路",
			"address": "重庆市北碚区文渊路2号靠近志成大厦",
			"netType": "4g",
			"operatorType": "CMCC",
			"imei": "imei",
			"time": 11111111111,
			"provider": "lbs",
			"isFromMock": false,
			"isGpsEnabled": true,
			"isWifiEnabled": false,
			"isMobileEnabled": true,
			"isOffset": true,
			"cityAdCode": "023",
			"districtAdCode": "500109",
			"LBSWuaCacheId": "11111111",
			"isArea": true,
			"tip": "当前在打卡范围内"
		},
		"creator": "",
		"isArchive": "",
		"xyid": "3e7d3ff203e311ec9c290050568b5172",
		"qddd": "重庆市北碚区天生路2号西南大学",
		"fqrlxfs": "137XXXX0213",
		"fqrxm": "管理员",
		"xymc": "XXXXXXXXXXXXXXXXXXx",
		"xh": "222XXXXXXXXXX",
		"bjmc": "XXXXXX班",
		"sjh": "152XXXX8848",
		"qdpc": "X",
		"createTime": "",
		"xm": "XXXX",
		"processCode": "",
		"njdm": "XXXX级",
		"lc": "",
		"selectMap": "{}",
		"ld": "XXXX",
		"xq": "XXXX",
		"jsrq": "XXXX-XX-XX",
		"fdyxm": "XXXX",
		"qdtj": "X",
		"taskId": ""
	},
	"msg": "",
	"exception": null,
	"exceptionClass": null,
	"exceptionMsg": null
}
```
| 参数名                          | 示例值                                               | 参数类型 | 参数描述                                       |
| ------------------------------- | ---------------------------------------------------- | -------- | ---------------------------------------------- |
| code                            | 200                                                  | Number   | 临时授权码                                     |
| data                            | -                                                    | Object   | 返回数据                                       |
| data.qsid                       | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                     | String   | 寝室ID                                         |
| data.ssh                        | -                                                    | Object   |
| data.ksrq                       | XXXX-XX-XX                                           | String   | 创建表单时间                                   |
| data.id                         | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                     | String   | 组织ID                                         |
| data.cqfbid                     | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                     | String   | MUJI                                           |
| data.qdsj                       | XX:XX                                                | String   | 打卡时间                                       |
| data.formId                     | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                     | String   | 表单ID                                         |
| data.processInstanceId          | -                                                    | Object   |
| data.jsdm                       | XXX                                                  | String   | 角色类型 bks本科生、  yjs 研究生、  bss 博士生 |
| data.qdjg                       | X                                                    | String   | 签到结果                                       |
| data.zymc                       | XXXXXXXX                                             | String   | 专业名称                                       |
| data.dksj                       | XXXX-XX-XX XX:XX                                     | String   | 打卡时间                                       |
| data.sczp                       | -                                                    | Object   | 上传图片                                       |
| data.sczp.fileContentType       | image/png                                            | String   |
| data.sczp.fileUniqueCode        | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                     | String   |
| data.sczp.fileSize              | 789456                                               | Number   |
| data.sczp.fastDFSThumbImagePath | XXX/XX/XX/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_150x150.png | String   |
| data.sczp.value                 | /group1/XXX/XX/XX/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.png | String   |
| data.sczp.label                 | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.png                   | String   |
| data.ycdksfcl                   | -                                                    | Object   |
| data.lastUpdateTime             | XXXX-XX-XX XX:XX:XX                                  | String   | 最近一次上传                                   |
| data.tsrq                       | XXXX-XX-XX                                           | String   | 打卡日期                                       |
| data.cqzmc                      | 每日查寝设置                                         | String   | 和我没关系                                     |
| data.orgId                      | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                     | String   | 管理部门                                       |
| data.fdygh                      | XXXXXXXX                                             | String   | 辅导员工号                                     |
| data.zdrq                       | XXXX-XX-XX                                           | String   | 打卡日期                                       |
| data.xhxq                       | 6                                                    | String   | 表单创建日期周几                               |
| data.qdsjxpz                    | 1                                                    | String   |
| data.bz                         | 查寝配置                                             | String   |
| data.fbrgh                      | wipadmin                                             | String   |
| data.lastUpdator                | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                     | String   | 最后修改人                                     |
| data.qddz                       | -                                                    | Object   |
| data.qddz.errorCode             | -                                                    | Number   |
| data.qddz.errorMessage          | -                                                    | Object   |
| data.qddz.locationType          | 5                                                    | Number   |
| data.qddz.accuracy              | 29                                                   | Number   | 精度                                           |
| data.qddz.latitude              | 11.111111                                            | Number   | 纬度                                           |
| data.qddz.longitude             | 111.111111                                           | Number   | 经度                                           |
| data.qddz.province              | 重庆市                                               | String   |
| data.qddz.city                  | 重庆市                                               | String   |
| data.qddz.district              | 北碚区                                               | String   |
| data.qddz.road                  | 文渊路                                               | String   |
| data.qddz.address               | 重庆市北碚区文渊路2号靠近志成大厦                    | String   | 用于提交后那个一句话描述                       |
| data.qddz.netType               | 4g                                                   | String   |
| data.qddz.operatorType          | CMCC                                                 | String   |
| data.qddz.imei                  | imei                                                 | String   |
| data.qddz.time                  | 11111111111                                          | Number   | 提交时间 Date.now()                            |
| data.qddz.provider              | lbs                                                  | String   |
| data.qddz.isFromMock            | -                                                    | -        |
| data.qddz.isGpsEnabled          | true                                                 | -        |
| data.qddz.isWifiEnabled         | -                                                    | -        |
| data.qddz.isMobileEnabled       | true                                                 | -        |
| data.qddz.isOffset              | true                                                 | -        |
| data.qddz.cityAdCode            | 023                                                  | String   | 城市电话区号                                   |
| data.qddz.districtAdCode        | 500109                                               | String   | 区号, 即身份证前6位                            |
| data.qddz.LBSWuaCacheId         | 11111111                                             | String   | 似乎是一个定位服务商缓存, 此参数可忽略不用     |
| data.qddz.isArea                | true                                                 | -        |
| data.qddz.tip                   | 当前在打卡范围内                                     | String   |
| data.creator                    | -                                                    | Object   | 创建人                                         |
| data.isArchive                  | -                                                    | Object   |
| data.xyid                       | 3e7d3ff203e311ec9c290050568b5172                     | String   | 学院ID                                         |
| data.qddd                       | 重庆市北碚区天生路2号西南大学                        | String   |
| data.fqrlxfs                    | 137XXXX0213                                          | String   |
| data.fqrxm                      | 管理员                                               | String   |
| data.xymc                       | XXXXXXXXXXXXXXXXXXx                                  | String   | 学院名                                         |
| data.xh                         | 222XXXXXXXXXX                                        | String   | 学号                                           |
| data.bjmc                       | XXXXXX班                                             | String   | 班级名                                         |
| data.sjh                        | 152XXXX8848                                          | String   | 手机号                                         |
| data.qdpc                       | X                                                    | String   | 启动频次                                       |
| data.createTime                 | -                                                    | Object   | 管理员创建表单的时间                           |
| data.xm                         | XXXX                                                 | String   | 姓名                                           |
| data.processCode                | -                                                    | Object   |
| data.njdm                       | XXXX级                                               | String   | 年级                                           |
| data.lc                         | -                                                    | Object   |
| data.selectMap                  | {}                                                   | Array    |
| data.ld                         | XXXX                                                 | String   |
| data.xq                         | XXXX                                                 | String   |
| data.jsrq                       | XXXX-XX-XX                                           | String   |
| data.fdyxm                      | XXXX                                                 | String   | 辅导员姓名                                     |
| data.qdtj                       | X                                                    | String   |
| data.taskId                     | -                                                    | Object   |
| msg                             | -                                                    | Object   | 返回文字描述                                   |
| exception                       | -                                                    | Object   |
| exceptionClass                  | -                                                    | Object   |
| exceptionMsg                    | -                                                    | Object   |
### 提交数据

#### 接口URL
> http://counselor.swu.edu.cn/gateway//fighter-workflow/form-instance/save?formId=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&procDefId=

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Header参数
| 参数名             | 示例值                              | 参数类型 | 是否必填 | 参数描述   |
| ------------------ | ----------------------------------- | -------- | -------- | ---------- |
| fighter-auth-token | XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX | Text     | 是       | 临时授权码 |
#### 请求Query参数
| 参数名    | 示例值                          | 参数类型 | 是否必填 | 参数描述             |
| --------- | ------------------------------- | -------- | -------- | -------------------- |
| formId    | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx | Text     | 是       | 来自获取今日查寝信息 |
| procDefId | -                               | Text     | 是       | -                    |
#### 请求Body参数
```javascript
* 定义 formList: 获取今日查寝信息得到的List
* 定义 userInfo: 数智X大登录数据
* 定义 formInfo: 获取查寝表单信息返回值
* 定义 token:    临时授权码
* 定义 evening: { // 一些非必要的未知参数
    unknownParams: {
      $qdjg: '未签到',
      $qdsjxpz: '是', // 签到时进行拍照
      $qdtj: '必须在范围内签到',
      $xhxq: '周六',
    },
  },
* 定义 imgInfo: [     // 为打卡图片信息
  {
    fileContentType: 'image/png',
    fileUniqueCode: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    fileSize: 789456,
    fastDFSThumbImagePath: 'XXX/XX/XX/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_150x150.png',
    value: '/group1/XXX/XX/XX/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.png',
    label: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.png'
  }
]

* 定义 config: {
  position: {
    latitude: XX.XXXXXX,
    longitude: XXX.XXXXXX,
    province: '重庆市',
    city: '重庆市',
    district: '北碚区',
    road: '文渊路',
    address: '重庆市北碚区文渊路2号靠近志成大厦',
    cityAdCode: '023',
    districtAdCode: '500109',
  },
  morning: {
    formId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    formInfo: {
      wd: '1',
      $wd: '正常，＜37.2℃',
      drjkmsfzc: '是',
      $drjkmsfzc: '是',
      drxcmsfzc: '是',
      $drxcmsfzc: '是',
    },
  },
};

  {
    id: formList.id,
    creator: formInfo.creator,
    createTime: formInfo.createTime,
    lastUpdator: formInfo.lastUpdator,
    lastUpdateTime: formInfo.lastUpdateTime,
    orgId: userInfo.subject.orgList[0].id,
    $orgId: userInfo.subject.orgList[0].name,
    processCode: formInfo.processCode,
    qdjg: formInfo.qdjg,
    $qdjg: config.evening.unknownParams.$qdjg,
    cqfbid: formInfo.cqfbid,
    fbrgh: formInfo.fbrgh,
    formId: formInfo.formId,
    xyid: formInfo.xyid,
    fdygh: formInfo.fdygh,
    fdyxm: formInfo.fdyxm,
    tsrq: formInfo.tsrq,
    jsdm: formInfo.jsdm,
    ycdksfcl: formInfo.ycdksfcl,
    isArchive: formInfo.isArchive,
    xh: formInfo.xh,
    xm: formInfo.xm,
    njdm: formInfo.njdm,
    xymc: formInfo.xymc,
    zymc: formInfo.zymc,
    bjmc: formInfo.bjmc,
    sjh: formInfo.sjh,
    qsid: formInfo.qsid,
    xq: formInfo.xq,
    ld: formInfo.ld,
    lc: formInfo.lc,
    ssh: formInfo.ssh,
    dksj: formInfo.dksj,
    fbxx: '',
    cqzmc: formInfo.cqzmc,
    fqrxm: formInfo.fqrxm,
    fqrlxfs: formInfo.fqrlxfs,
    qddd: formInfo.qddd,
    qdtj: formInfo.qdtj,
    $qdtj: config.evening.unknownParams.$qdjg,
    qdsjxpz: formInfo.qdsjxpz,
    $qdsjxpz: config.evening.unknownParams.$qdsjxpz,
    qdpc: formInfo.qdpc,
    $qdpc: formList.qdpc,
    zdrq: formInfo.zdrq,
    ksrq: formInfo.ksrq,
    jsrq: formInfo.jsrq,
    xhxq: formInfo.xhxq,
    $xhxq: config.evening.unknownParams.$xhxq,
    qdsj: formInfo.qdsj,
    bz: formInfo.bz,
    qddz: {
      errorCode: 0,
      errorMessage: '',
      locationType: 5,
      accuracy: 29,
      ...config.position,
      netType: '4g',
      operatorType: 'CMCC',
      imei: 'imei',
      time: String(Date.now()),
      provider: 'lbs',
      isFromMock: false,
      isGpsEnabled: true,
      isWifiEnabled: false,
      isMobileEnabled: true,
      isOffset: true,
      isArea: true,
      tip: '当前在打卡范围内',
    },
    sczp: imgInfo,
    businessKey: formList.id,
  };
```
