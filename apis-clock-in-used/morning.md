## 健康打卡

```text
一部分显而易见的参数并没有注释, 如有疑问见`健康打卡默认数据采集`或GitHub上API
```

### 智慧X大登录

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
| corpId | dingdd44fee6e26b31f3f2c783f7214b6d69 | Text     | 是       | 组织ID, 数智X大似乎就这一个 |

#### 成功响应示例
```javascript
{
	"code": 200,
	"data": {
		"loginInfo": {
			"permissionSubjectId": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",   // 权限角色ID
			"subject": {
				"userPassword": null,
				"passwordStrength": "X",								// 密码强度
				"permissionSubjectBelongType": "PUBLIC",
				"idCard": null,
				"manageScope": null,
				"creatorId": "wipadmin",
				"orgList": [											// 所在组织(目测是钉钉首页左上角的)
					{
						"id": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",		// 组织ID
						"name": "XXXXXXX",
						"orgType": "XXXXXXX",
						"orgCode": "XXXXXXXXXX",
						"status": 1,
						"image": null,
						"sort": null,
						"appKey": "",
						"permissionSubjectId": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
						"parentPermissionSubjectId": null,
						"permissionSubjectBelongType": "PUBLIC",
						"creatorId": "wipadmin",
						"createTime": "XXXX-XX-XX XX:XX:XX",
						"updatorId": null,
						"updateTime": null,
						"tenantId": "",
						"isFromUnionOrg": 2,
						"sourceIdentifier": null,
						"sourceTenantId": null,
						"dingTalkOrgId": "461782270",
						"dingTalkCorpId": null,
						"dingTalkAppKey": null,
						"dingTalkAppSecret": null,
						"fullPath": null,
						"extInfo": null
					}
				],
				"currentPasswordStrength": "3",
				"wxgzptOpenId": null,
				"dingTalkUnionId": "xxx",
				"accountDetail": {
					"id": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",					   // 用户D",
					"accountId": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",			// 用户账户ID?,
					"permissionSubjectId": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",   // 权限角色ID
					"permissionSubjectBelongType": "PUBLIC",
					"accountRelation": 1,
					"dingTalkUserId": "222XXXXXXXXXXXX",						// 钉钉帐号 同学号
					"tenantId": "",
					"extendInfo": "{\"tel\": \"\", \"name\": \"XXX\", \"tags\": \"{}\", \"email\": \"\", \"roles\": [{\"id\": XXXXXXXXXX, \"name\": \"在校学生\", \"groupName\": \"学生\"}], \"active\": true, \"avatar\": \"https://static-legacy.dingtalk.com/media/XXXXXXXXXXXXXXXXXXXXXXX_500_500.jpg\", \"errmsg\": \"ok\", \"isBoss\": false, \"isHide\": false, \"mobile\": \"139XXXX5544\", \"openId\": \"XXXXXXXXXXXXXXXXXXXXXXXXXX\", \"remark\": \"\", \"userid\": \"XXXXXXXXXXXXXXX\", \"errcode\": 0, \"isAdmin\": false, \"success\": true, \"unionid\": \"XXXXXXXXXXXXXXXXXXXXXXXXXX\", \"isSenior\": false, \"position\": \"\", \"jobnumber\": \"\", \"stateCode\": \"86\", \"workPlace\": \"\", \"department\": [XXXXXXX], \"realAuthed\": false, \"orderInDepts\": \"{XXXXXXXXX:XXXXXXXXXXXXXXXXXX}\", \"isLeaderInDepts\": \"{XXXXXXXXX:false}\"}",
					"deleted": 0,
					"jobNumber": null,
					"studentNumber": null,
					"accountIdList": null,
					"creatorId": null,
					"createTime": "XXXX-XX-XX XX:XX:XX",						// 管理员创建表单的时间
					"updatorId": null,
					"updateTime": "XXXX-XX-XX XX:XX:XX"						    // 管理员修改表单的时间
				},
				"loginName": "XXXXXXXXXXXXXXX",									// 登录名 同学号
				"appKey": "",
				"id": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
				"lifeTime": null,
				"email": null,
				"ownedTenants": null,
				"permissionSubjectId": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",   // 权限角色ID
				"nickName": null,
				"mobile": "135****9999",
				"qqOpenId": null,
				"updateTime": "XXXX-XX-XX XX:XX:XX",						    // 管理员修改表单的时间
				"avatar": "https://static-legacy.dingtalk.com/media/XXXXXXXXXXXXXXXXXXXXXX_500_500.jpg",	// 头像
				"roleList": [
					{
						"id": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",			// 权限ID
						"name": "在校学生",
						"roleCode": "XXXXXXXXX",
						"status": 1,
						"position": 0,
						"dingTalkRoleId": "XXXXXXXX",
						"dingTalkCorpId": null,
						"appKey": "",
						"permissionSubjectId": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
						"parentPermissionSubjectId": null,
						"permissionSubjectBelongType": "PUBLIC",
						"creatorId": "wipadmin",
						"createTime": "XXXX-XX-XX XX:XX:XX",
						"updatorId": null,
						"updateTime": null,
						"tenantId": ""
					}
				],
				"updatorId": "wipadmin",
				"createTime": "XXXX-XX-XX XX:XX:XX",
				"accountRelation": null,
				"name": "XXX",
				"schoolEmail": null,
				"dingTalkUserId": "xxx",
				"status": 1
			},
			"subjectType": "USER",
			"alreadyCheckedPermission": false,
			"clientIp": "XXX.XXX.XXX.XXX...",
			"tenantId": ""
		},
		"token": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX"			// 临时授权码
	},
	"msg": "登录成功",
	"exception": null,
	"exceptionClass": null,
	"exceptionMsg": null
}
```
| 参数名                                                           | 示例值                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | 参数类型 | 参数描述                         |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------- |
| code                                                             | 200                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Number   | 临时授权码                       |
| data                                                             | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   | 返回数据                         |
| data.loginInfo                                                   | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.permissionSubjectId                               | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   | 权限角色ID                       |
| data.loginInfo.subject                                           | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.userPassword                              | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.passwordStrength                          | X                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | String   | 密码强度                         |
| data.loginInfo.subject.permissionSubjectBelongType               | PUBLIC                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | String   |
| data.loginInfo.subject.idCard                                    | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.manageScope                               | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.creatorId                                 | wipadmin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | String   |
| data.loginInfo.subject.orgList                                   | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   | 所在组织(目测是钉钉首页左上角的) |
| data.loginInfo.subject.orgList.id                                | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   | 组织ID                           |
| data.loginInfo.subject.orgList.name                              | XXXXXXX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | String   |
| data.loginInfo.subject.orgList.orgType                           | XXXXXXX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | String   |
| data.loginInfo.subject.orgList.orgCode                           | XXXXXXXXXX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | String   |
| data.loginInfo.subject.orgList.status                            | 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Number   |
| data.loginInfo.subject.orgList.image                             | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.orgList.sort                              | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.orgList.appKey                            | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.orgList.permissionSubjectId               | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   |
| data.loginInfo.subject.orgList.parentPermissionSubjectId         | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.orgList.permissionSubjectBelongType       | PUBLIC                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | String   |
| data.loginInfo.subject.orgList.creatorId                         | wipadmin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | String   |
| data.loginInfo.subject.orgList.createTime                        | XXXX-XX-XX XX:XX:XX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | String   |
| data.loginInfo.subject.orgList.updatorId                         | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.orgList.updateTime                        | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.orgList.tenantId                          | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.orgList.isFromUnionOrg                    | 2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Number   |
| data.loginInfo.subject.orgList.sourceIdentifier                  | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.orgList.sourceTenantId                    | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.orgList.dingTalkOrgId                     | 461782270                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | String   |
| data.loginInfo.subject.orgList.dingTalkCorpId                    | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.orgList.dingTalkAppKey                    | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.orgList.dingTalkAppSecret                 | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.orgList.fullPath                          | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.orgList.extInfo                           | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.currentPasswordStrength                   | 3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | String   |
| data.loginInfo.subject.wxgzptOpenId                              | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.dingTalkUnionId                           | xxx                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | String   |
| data.loginInfo.subject.accountDetail                             | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.accountDetail.id                          | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   | 用户ID                           |
| data.loginInfo.subject.accountDetail.accountId                   | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   | 用户账户ID                       |
| data.loginInfo.subject.accountDetail.permissionSubjectId         | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   |
| data.loginInfo.subject.accountDetail.permissionSubjectBelongType | PUBLIC                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | String   |
| data.loginInfo.subject.accountDetail.accountRelation             | 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Number   |
| data.loginInfo.subject.accountDetail.dingTalkUserId              | 222XXXXXXXXXXXX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | String   | 钉钉帐号 同: 学号                |
| data.loginInfo.subject.accountDetail.tenantId                    | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.accountDetail.extendInfo                  | {"tel": "", "name": "XXX", "tags": "{}", "email": "", "roles": [{"id": XXXXXXXXXX, "name": "在校学生", "groupName": "学生"}], "active": true, "avatar": "https://static-legacy.dingtalk.com/media/XXXXXXXXXXXXXXXXXXXXXXX_500_500.jpg", "errmsg": "ok", "isBoss": false, "isHide": false, "mobile": "139XXXX5544", "openId": "XXXXXXXXXXXXXXXXXXXXXXXXXX", "remark": "", "userid": "XXXXXXXXXXXXXXX", "errcode": 0, "isAdmin": false, "success": true, "unionid": "XXXXXXXXXXXXXXXXXXXXXXXXXX", "isSenior": false, "position": "", "jobnumber": "", "stateCode": "86", "workPlace": "", "department": [XXXXXXX], "realAuthed": false, "orderInDepts": "{XXXXXXXXX:XXXXXXXXXXXXXXXXXX}", "isLeaderInDepts": "{XXXXXXXXX:false}"} | String   |
| data.loginInfo.subject.accountDetail.deleted                     | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Number   |
| data.loginInfo.subject.accountDetail.jobNumber                   | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.accountDetail.studentNumber               | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.accountDetail.accountIdList               | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.accountDetail.creatorId                   | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.accountDetail.createTime                  | XXXX-XX-XX XX:XX:XX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | String   | 管理员创建表单的时间             |
| data.loginInfo.subject.accountDetail.updatorId                   | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.accountDetail.updateTime                  | XXXX-XX-XX XX:XX:XX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | String   | 管理员修改表单的时间             |
| data.loginInfo.subject.loginName                                 | XXXXXXXXXXXXXXX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | String   |
| data.loginInfo.subject.appKey                                    | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.id                                        | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   | 登录名 同学号                    |
| data.loginInfo.subject.lifeTime                                  | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.email                                     | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.ownedTenants                              | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.permissionSubjectId                       | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   |
| data.loginInfo.subject.nickName                                  | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.mobile                                    | 135****9999                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | String   | 手机号码                         |
| data.loginInfo.subject.qqOpenId                                  | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.updateTime                                | XXXX-XX-XX XX:XX:XX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | String   | 管理员修改表单的时间             |
| data.loginInfo.subject.avatar                                    | https://static-legacy.dingtalk.com/media/XXXXXXXXXXXXXXXXXXXXXX_500_500.jpg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | String   |
| data.loginInfo.subject.roleList                                  | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.roleList.id                               | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | String   | 权限角色ID                       |
| data.loginInfo.subject.roleList.name                             | 在校学生                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | String   |
| data.loginInfo.subject.roleList.roleCode                         | XXXXXXXXX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | String   |
| data.loginInfo.subject.roleList.status                           | 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Number   |
| data.loginInfo.subject.roleList.position                         | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Number   |
| data.loginInfo.subject.roleList.dingTalkRoleId                   | XXXXXXXX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | String   |
| data.loginInfo.subject.roleList.dingTalkCorpId                   | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.roleList.appKey                           | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.roleList.permissionSubjectId              | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   |
| data.loginInfo.subject.roleList.parentPermissionSubjectId        | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.roleList.permissionSubjectBelongType      | PUBLIC                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | String   |
| data.loginInfo.subject.roleList.creatorId                        | wipadmin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | String   |
| data.loginInfo.subject.roleList.createTime                       | XXXX-XX-XX XX:XX:XX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | String   |
| data.loginInfo.subject.roleList.updatorId                        | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.roleList.updateTime                       | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.roleList.tenantId                         | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.updatorId                                 | wipadmin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | String   |
| data.loginInfo.subject.createTime                                | XXXX-XX-XX XX:XX:XX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | String   | 管理员创建表单的时间             |
| data.loginInfo.subject.accountRelation                           | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.name                                      | XXX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | String   |
| data.loginInfo.subject.schoolEmail                               | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.loginInfo.subject.dingTalkUserId                            | xxx                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | String   |
| data.loginInfo.subject.status                                    | 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Number   |
| data.loginInfo.subjectType                                       | USER                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | String   |
| data.loginInfo.alreadyCheckedPermission                          | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | -        |
| data.loginInfo.clientIp                                          | XXX.XXX.XXX.XXX...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | String   |
| data.loginInfo.tenantId                                          | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| data.token                                                       | XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | String   | 临时授权码                       |
| msg                                                              | 登录成功                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | String   | 返回文字描述                     |
| exception                                                        | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| exceptionClass                                                   | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |
| exceptionMsg                                                     | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object   |

### /健康打卡/获取健康打卡列表


#### 接口URL
> http://counselor.swu.edu.cn/gateway/fighter-workflow/jkdk/getIntradayDKXX?xh=2220XXXXXXXXXXX

#### 请求方式
> GET

#### Content-Type
> form-data

#### 请求Header参数
| 参数名             | 示例值                              | 参数类型 | 是否必填 | 参数描述   |
| ------------------ | ----------------------------------- | -------- | -------- | ---------- |
| fighter-auth-token | XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX | Text     | 是       | 临时授权码 |
#### 请求Query参数
| 参数名 | 示例值          | 参数类型 | 是否必填 | 参数描述 |
| ------ | --------------- | -------- | -------- | -------- |
| xh     | 2220XXXXXXXXXXX | Text     | 是       | 学号     |

#### 成功响应示例
```javascript
{
	"code": 200,
	"data": [
		{
			"jsdm": "XXX",
			"stzk": "",
			"xyid": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
			"zymc": "XXXXXXXXXXXXXXXXX",
			"kssj": "XX:XX",
			"dkzt": "未打卡",
			"xymc": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
			"fdygh": "XXXXXXXX",
			"bjmc": "XXXXXXXX",
			"jssj": "XX:XX",
			"xm": "XXXX",
			"zrwid": "1",
			"njdm": "XXXX级",
			"id": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
			"fdyxm": "XXX"
		}
	],
	"msg": "成功",
	"exception": null,
	"exceptionClass": null,
	"exceptionMsg": null
}
```
| 参数名         | 示例值                           | 参数类型 | 参数描述                                   |
| -------------- | -------------------------------- | -------- | ------------------------------------------ |
| code           | 200                              | Number   | 临时授权码                                 |
| data           | -                                | Object   | 返回数据                                   |
| data.jsdm      | XXX                              | String   | 角色类型 bks本科生/ yjs 研究生/ bss 博士生 |
| data.stzk      | -                                | Object   |
| data.xyid      | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx | String   | 学院ID                                     |
| data.zymc      | XXXXXXXXXXXXXXXXX                | String   | 专业名称                                   |
| data.kssj      | XX:XX                            | String   | 开始时间                                   |
| data.dkzt      | 未打卡                           | String   | 打卡状态                                   |
| data.xymc      | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX | String   | 学院名                                     |
| data.fdygh     | XXXXXXXX                         | String   | 辅导员工号                                 |
| data.bjmc      | XXXXXXXX                         | String   | 班级名                                     |
| data.jssj      | XX:XX                            | String   | 结束时间                                   |
| data.xm        | XXXX                             | String   | 姓名                                       |
| data.zrwid     | 1                                | String   | 是否在打卡范围内                           |
| data.njdm      | XXXX级                           | String   | 年级                                       |
| data.id        | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX | String   | 当前健康打卡表单ID                         |
| data.fdyxm     | XXX                              | String   | 辅导员姓名                                 |
| msg            | 成功                             | String   | 返回文字描述                               |
| exception      | -                                | Object   |
| exceptionClass | -                                | Object   |
| exceptionMsg   | -                                | Object   |

### 健康打卡参数

#### 接口URL
> http://counselor.swu.edu.cn/gateway//fighter-workflow/form-instance/default-data-collection?formId=3fc165a338ee4450966268383da9a007

#### 请求方式
> GET

#### Content-Type
> form-data

#### 请求Header参数
| 参数名             | 示例值                              | 参数类型 | 是否必填 | 参数描述   |
| ------------------ | ----------------------------------- | -------- | -------- | ---------- |
| fighter-auth-token | XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX | Text     | 是       | 临时授权码 |
#### 请求Query参数
| 参数名 | 示例值                           | 参数类型 | 是否必填 | 参数描述           |
| ------ | -------------------------------- | -------- | -------- | ------------------ |
| formId | 3fc165a338ee4450966268383da9a007 | Text     | 是       | 表单参数, 来源未知 |

#### 成功响应示例
```javascript
{
	"code": 200,
	"data": {
		"formId": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		"submitBtn": false,
		"baseButtonDefaultSet": [
			{
				"name": "保存",
				"reName": "提交",
				"display": true,
				"$cellEdit": true,
				"$index": 0
			},
			{
				"name": "保存并提交",
				"reName": "提交表单",
				"display": true,
				"$cellEdit": true,
				"$index": 1
			},
			{
				"name": "审批详情",
				"reName": "",
				"display": false,
				"$cellEdit": true,
				"$index": 2
			},
			{
				"name": "转办",
				"reName": "",
				"display": false,
				"$cellEdit": true,
				"$index": 3
			},
			{
				"name": "委派",
				"reName": "",
				"display": false,
				"$cellEdit": true,
				"$index": 4
			},
			{
				"name": "取消委派",
				"reName": "",
				"display": false,
				"$cellEdit": true,
				"$index": 5
			},
			{
				"name": "加签",
				"reName": "",
				"display": false,
				"$cellEdit": true,
				"$index": 6
			},
			{
				"name": "减签",
				"reName": "",
				"display": false,
				"$cellEdit": true,
				"$index": 7
			},
			{
				"name": "抄送",
				"reName": "",
				"display": false,
				"$cellEdit": true,
				"$index": 8
			},
			{
				"name": "终止",
				"reName": "",
				"display": false,
				"$cellEdit": true,
				"$index": 9
			},
			{
				"name": "撤回",
				"reName": "",
				"display": false,
				"$cellEdit": true,
				"$index": 10
			},
			{
				"name": "导出Excel",
				"reName": "",
				"display": false,
				"$cellEdit": true,
				"$index": 11
			},
			{
				"name": "导出Pdf",
				"reName": "",
				"display": false,
				"$cellEdit": true,
				"$index": 12
			},
			{
				"name": "催办",
				"reName": "",
				"display": false,
				"$cellEdit": true,
				"$index": 13
			}
		],
		"emptyText": "清空",
		"column": [
			{
				"type": "input",
				"label": "主表关键字",
				"span": 12,
				"display": false,
				"prop": "id",
				"maxlength": 32,
				"shieldProcessRecord": true
			},
			{
				"type": "input",
				"label": "流程实例ID",
				"span": 12,
				"display": false,
				"prop": "processInstanceId",
				"maxlength": 64,
				"shieldProcessRecord": true
			},
			{
				"type": "input",
				"label": "环节Id",
				"span": 12,
				"display": false,
				"prop": "taskId",
				"maxlength": 64,
				"shieldProcessRecord": true
			},
			{
				"type": "input",
				"label": "创建人ID",
				"span": 12,
				"display": false,
				"prop": "creator",
				"maxlength": 32,
				"shieldProcessRecord": true
			},
			{
				"type": "input",
				"label": "创建时间",
				"span": 12,
				"display": false,
				"prop": "createTime",
				"maxlength": 20,
				"shieldProcessRecord": true
			},
			{
				"type": "input",
				"label": "最后修改人",
				"span": 12,
				"display": false,
				"prop": "lastUpdator",
				"maxlength": 32,
				"shieldProcessRecord": true
			},
			{
				"type": "input",
				"label": "最后修改时间",
				"span": 12,
				"display": false,
				"prop": "lastUpdateTime",
				"maxlength": 20,
				"shieldProcessRecord": true
			},
			{
				"type": "select",
				"label": "部门",
				"dicOption": "1",
				"cascaderItem": [],
				"localDic": [],
				"dicFlag": true,
				"dicData": [
					{
						"label": "XXXXXXXX班",
						"value": "XXXXXXXXXXXXXXXXXXXXXXXXXXXx"
					}
				],
				"span": 12,
				"display": false,
				"props": {},
				"dynamicHide": [],
				"prop": "orgId",
				"isDepartSelect": true,
				"shieldProcessRecord": true,
				"value": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
			},
			{
				"type": "input",
				"label": "流程编号",
				"span": 12,
				"maxlength": 60,
				"display": false,
				"prop": "processCode",
				"disabled": false,
				"shieldProcessRecord": true
			},
			{
				"type": "select",
				"label": "表单状态",
				"dicOption": "1",
				"cascaderItem": [],
				"localDic": [],
				"dicFlag": true,
				"dicData": [
					{
						"label": "无效",
						"value": "0"
					},
					{
						"label": "有效",
						"value": "1"
					}
				],
				"span": 12,
				"display": false,
				"props": {},
				"dynamicHide": [],
				"prop": "bdzt",
				"value": "",
				"shieldProcessRecord": true
			},
			{
				"type": "select",
				"label": "列表状态",
				"dicOption": "1",
				"cascaderItem": [],
				"localDic": [],
				"dicFlag": true,
				"dicData": [
					{
						"label": "正常",
						"value": "1"
					},
					{
						"label": "异常",
						"value": "2"
					},
					{
						"label": "修改为正常",
						"value": "3"
					},
					{
						"label": "修改为异常",
						"value": "4"
					},
					{
						"label": "未报",
						"value": "5"
					}
				],
				"span": 12,
				"display": false,
				"props": {},
				"dynamicHide": [],
				"prop": "lbzt",
				"value": "",
				"shieldProcessRecord": true
			},
			{
				"type": "input",
				"label": "辅导员姓名",
				"span": 12,
				"maxlength": 60,
				"display": false,
				"prop": "fdyxm",
				"shieldProcessRecord": true
			},
			{
				"type": "input",
				"label": "辅导员工号",
				"span": 12,
				"maxlength": 2000,
				"display": false,
				"prop": "fdygh",
				"shieldProcessRecord": true
			},
			{
				"type": "input",
				"label": "主任务ID",
				"span": 12,
				"maxlength": 60,
				"display": false,
				"prop": "zrwid",
				"shieldProcessRecord": true
			},
			{
				"type": "input",
				"label": "角色代码",
				"span": 12,
				"maxlength": 60,
				"display": false,
				"prop": "jsdm",
				"shieldProcessRecord": true
			},
			{
				"type": "date",
				"label": "填报日期",
				"span": 12,
				"display": false,
				"format": "yyyy-MM-dd",
				"valueFormat": "yyyy-MM-dd",
				"prop": "tbrq",
				"value": "2022-03-28",
				"required": false,
				"rules": [],
				"customEvent": false,
				"shieldProcessRecord": true
			},
			{
				"type": "input",
				"label": "开始时间",
				"span": 12,
				"maxlength": 60,
				"display": false,
				"prop": "kssj",
				"shieldProcessRecord": true
			},
			{
				"type": "input",
				"label": "结束时间",
				"span": 12,
				"maxlength": 60,
				"display": false,
				"prop": "jssj",
				"shieldProcessRecord": true
			},
			{
				"type": "input",
				"label": "年级代码",
				"span": 12,
				"maxlength": 60,
				"display": false,
				"prop": "njdm",
				"shieldProcessRecord": true
			},
			{
				"type": "input",
				"label": "手机号",
				"span": 12,
				"maxlength": 60,
				"display": false,
				"prop": "sjh",
				"resourceId": "bc21812318ed4b0abb9dc16b77aaf9d0",
				"fieldName": "mobile",
				"shieldProcessRecord": true,
				"value": "13403693631"
			},
			{
				"type": "select",
				"label": "异常打卡是否处理",
				"dicOption": "1",
				"cascaderItem": [],
				"localDic": [],
				"dicFlag": true,
				"dicData": [
					{
						"label": "已处理",
						"value": "1"
					}
				],
				"span": 12,
				"display": false,
				"props": {},
				"dynamicHide": [],
				"prop": "ycdksfcl"
			},
			{
				"type": "input",
				"label": "专业名称",
				"span": 12,
				"maxlength": 60,
				"display": false,
				"shieldProcessRecord": true,
				"prop": "zymc"
			},
			{
				"type": "input",
				"label": "班级名称",
				"span": 12,
				"maxlength": 60,
				"display": false,
				"shieldProcessRecord": true,
				"prop": "bjmc"
			},
			{
				"type": "input",
				"label": "表单ID",
				"span": 12,
				"maxlength": 60,
				"display": false,
				"shieldProcessRecord": true,
				"prop": "formId"
			},
			{
				"type": "divider",
				"component": "divider",
				"label": "基本信息",
				"display": true,
				"span": 24,
				"color": "rgba(0, 0, 0, 1)",
				"dalign": "center",
				"labelWidth": 0,
				"dividerlevel": 2,
				"prop": "jbxx"
			},
			{
				"type": "input",
				"label": "学号",
				"span": 12,
				"maxlength": 60,
				"display": true,
				"prop": "xh",
				"resourceId": "",
				"fieldName": "",
				"required": true,
				"rules": [
					{
						"required": true,
						"message": "学号必须填写"
					},
					{
						"pattern": "^(?=.*\\S).+$",
						"message": "学号格式不匹配"
					}
				],
				"disabled": true,
				"casUrl": "",
				"shieldProcessRecord": true,
				"pattern": "^(?=.*\\S).+$"
			},
			{
				"type": "input",
				"label": "姓名",
				"span": 12,
				"maxlength": 60,
				"display": true,
				"prop": "xm",
				"rules": [
					{
						"required": true,
						"message": "姓名必须填写"
					},
					{
						"pattern": "^(?=.*\\S).+$",
						"message": "姓名格式不匹配"
					}
				],
				"disabled": true,
				"required": true,
				"resourceId": "xxxxxxxxxxxxxxxxxxxxxxx",
				"fieldName": "name",
				"shieldProcessRecord": true,
				"value": "刘锴睿",
				"pattern": "^(?=.*\\S).+$"
			},
			{
				"type": "input",
				"label": "学院ID",
				"span": 12,
				"maxlength": 60,
				"display": false,
				"prop": "xyid",
				"rules": [],
				"shieldProcessRecord": true
			},
			{
				"type": "input",
				"label": "学院名称",
				"span": 12,
				"maxlength": 60,
				"display": false,
				"prop": "xymc",
				"rules": [],
				"shieldProcessRecord": true
			},
			{
				"type": "divider",
				"component": "divider",
				"label": "打卡信息",
				"display": true,
				"span": 24,
				"color": "rgba(0, 0, 0, 1)",
				"dalign": "center",
				"labelWidth": 0,
				"dividerlevel": 2,
				"prop": "cqxx"
			},
			{
				"type": "position",
				"component": "dingPosition",
				"label": "打卡地点",
				"span": 12,
				"display": true,
				"addressType": "address",
				"prop": "dkdd",
				"required": true,
				"scope": "200",
				"shieldProcessRecord": true
			},
			{
				"type": "datetime",
				"label": "打卡时间",
				"span": 12,
				"display": true,
				"format": "yyyy-MM-dd HH:mm",
				"valueFormat": "yyyy-MM-dd HH:mm",
				"prop": "dkrq",
				"value": "2022-03-28 02:48",
				"disabled": true,
				"required": true,
				"rules": [
					{
						"required": true,
						"message": "打卡时间必须填写"
					}
				],
				"shieldProcessRecord": true
			},
			{
				"type": "radio",
				"dicOption": "1",
				"label": "温度",
				"dicData": [
					{
						"label": "正常，＜37.2℃",
						"value": "1"
					},
					{
						"label": "低热，37.3℃～38℃",
						"value": "2"
					},
					{
						"label": "中等热度，38.1℃～39℃",
						"value": "3"
					},
					{
						"label": "高热＞39℃",
						"value": "4"
					}
				],
				"span": 24,
				"display": true,
				"props": {},
				"prop": "wd",
				"value": "1",
				"shieldProcessRecord": true
			},
			{
				"type": "radio",
				"dicOption": "1",
				"label": "当日健康码是否正常",
				"dicData": [
					{
						"label": "是",
						"value": "是"
					},
					{
						"label": "否",
						"value": "否"
					}
				],
				"span": 24,
				"display": true,
				"props": {},
				"shieldProcessRecord": true,
				"prop": "drjkmsfzc",
				"titleAlign": "vertical",
				"direction": "horizontal",
				"horNum": 0,
				"isDataTitle": false,
				"required": true,
				"rules": [
					{
						"required": true,
						"message": "请选择当日健康码是否正常"
					}
				]
			},
			{
				"type": "radio",
				"dicOption": "1",
				"label": "当日行程码是否正常",
				"dicData": [
					{
						"label": "是",
						"value": "是"
					},
					{
						"label": "否",
						"value": "否"
					}
				],
				"span": 24,
				"display": true,
				"props": {},
				"shieldProcessRecord": true,
				"prop": "drxcmsfzc",
				"rules": [
					{
						"required": true,
						"message": "请选择当日行程码是否正常"
					}
				],
				"required": true,
				"titleAlign": "vertical",
				"direction": "horizontal"
			}
		],
		"menuPosition": "center",
		"tableComment": "学生健康打卡表单",
		"labelWidth": 150,
		"submitSize": "medium",
		"tableName": "XSJKDKBD",
		"gutter": 0,
		"emptySize": "medium",
		"jsPath": "/flow/formInclude/js/xsjkdk.js",
		"submitText": "提交",
		"labelPosition": "right",
		"menuBtn": false,
		"emptyBtn": false,
		"saveJump": true,
		"formTitleExpression": "${xm}发起的健康打卡申请"
	},
	"msg": "",
	"exception": null,
	"exceptionClass": null,
	"exceptionMsg": null
}
```
| 参数名                              | 示例值                           | 参数类型 | 参数描述     |
| ----------------------------------- | -------------------------------- | -------- | ------------ |
| code                                | 200                              | Number   | 临时授权码   |
| data                                | -                                | Object   | 返回数据     |
| data.formId                         | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX | String   | 表单ID       |
| data.submitBtn                      | -                                | -        |
| data.baseButtonDefaultSet           | -                                | Object   |
| data.baseButtonDefaultSet.name      | 保存                             | String   |
| data.baseButtonDefaultSet.reName    | 提交                             | String   |
| data.baseButtonDefaultSet.display   | true                             | -        |
| data.baseButtonDefaultSet.$cellEdit | true                             | -        |
| data.baseButtonDefaultSet.$index    | -                                | Number   |
| data.emptyText                      | 清空                             | String   |
| data.column                         | -                                | Object   |
| data.column.type                    | input                            | String   |
| data.column.label                   | 主表关键字                       | String   |
| data.column.span                    | 12                               | Number   |
| data.column.display                 | -                                | -        |
| data.column.prop                    | id                               | String   |
| data.column.maxlength               | 32                               | Number   |
| data.column.shieldProcessRecord     | true                             | -        |
| data.menuPosition                   | center                           | String   |
| data.tableComment                   | 学生健康打卡表单                 | String   |
| data.labelWidth                     | 150                              | Number   |
| data.submitSize                     | medium                           | String   |
| data.tableName                      | XSJKDKBD                         | String   |
| data.gutter                         | -                                | Number   |
| data.emptySize                      | medium                           | String   |
| data.jsPath                         | /flow/formInclude/js/xsjkdk.js   | String   |
| data.submitText                     | 提交                             | String   |
| data.labelPosition                  | right                            | String   |
| data.menuBtn                        | -                                | -        |
| data.emptyBtn                       | -                                | -        |
| data.saveJump                       | true                             | -        |
| data.formTitleExpression            | ${xm}发起的健康打卡申请          | String   |
| msg                                 | -                                | Object   | 返回文字描述 |
| exception                           | -                                | Object   |
| exceptionClass                      | -                                | Object   |
| exceptionMsg                        | -                                | Object   |
### 健康打卡表单数据查询
```text
用于获取默认表单信息(如已经打卡, 获得打卡信息)
```


#### 接口URL
> http://counselor.swu.edu.cn/gateway//fighter-workflow/form-instance/select?dataId=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&formId=3fc165a338ee4450966268383da9a007&procDefId=

#### 请求方式
> GET

#### Content-Type
> form-data

#### 请求Header参数
| 参数名             | 示例值                              | 参数类型 | 是否必填 | 参数描述   |
| ------------------ | ----------------------------------- | -------- | -------- | ---------- |
| fighter-auth-token | XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX | Text     | 是       | 临时授权码 |
#### 请求Query参数
| 参数名    | 示例值                           | 参数类型 | 是否必填 | 参数描述                 |
| --------- | -------------------------------- | -------- | -------- | ------------------------ |
| dataId    | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  | Text     | 是       | 获取健康打卡列表.data.id |
| formId    | 3fc165a338ee4450966268383da9a007 | Text     | 是       | 表单参数, 来源未知       |
| procDefId | -                                | Text     | 是       | -                        |

#### 成功响应示例
```javascript
{
	"code": 200,
	"data": {
		"lbzt": "X",
		"drxcmsfzc": "X",
		"kssj": "XX:XX",
		"wd": "X",
		"orgId": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		"fdygh": "XXXXXXXX",
		"jssj": "XX:XX",
		"bdzt": "X",
		"drjkmsfzc": "X",
		"id": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		"tbrq": "XXXX-XX-XX",
		"lastUpdator": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		"formId": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		"processInstanceId": "",
		"creator": "",
		"jsdm": "XXX",
		"xyid": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		"dkdd": {
			"errorCode": 0,
			"errorMessage": "",
			"locationType": 6,
			"accuracy": 550,
			"latitude": 11.111111,
			"longitude": 111.111111,
			"province": "重庆市",
			"city": "重庆市",
			"district": "北碚区",
			"road": "金华路",
			"address": "重庆市北碚区金华路289号靠近北泉派出所",
			"netType": "4g",
			"operatorType": "CMCC",
			"imei": "imei",
			"time": 1111111111111,
			"provider": "lbs",
			"isFromMock": false,
			"isGpsEnabled": true,
			"isWifiEnabled": false,
			"isMobileEnabled": true,
			"isOffset": true,
			"cityAdCode": "023",
			"districtAdCode": "500109",
			"LBSWuaCacheId": "XXXXXXXX"
		},
		"dkrq": "XXXX-XX-XX XX:XX",
		"zymc": "XXXXXXXXXXX",
		"xymc": "XXXXXXXXXXXXXXXXXXXXX",
		"sjh": "159XXXX8848",
		"bjmc": "XXXXXX班",
		"xh": "222XXXXXXXXXX",
		"createTime": "",
		"xm": "XXX",
		"processCode": "",
		"zrwid": "X",
		"njdm": "XXXX级",
		"selectMap": "{}",
		"ycdksfcl": "",
		"fdyxm": "XXX",
		"taskId": "",
		"lastUpdateTime": "XXXX-XX-XX XX:XX:XX"
	},
	"msg": "",
	"exception": null,
	"exceptionClass": null,
	"exceptionMsg": null
}
```
| 参数名                    | 示例值                                | 参数类型 | 参数描述                                       |
| ------------------------- | ------------------------------------- | -------- | ---------------------------------------------- |
| code                      | 200                                   | Number   | 临时授权码                                     |
| data                      | -                                     | Object   | 返回数据                                       |
| data.lbzt                 | X                                     | String   | 列表状态                                       |
| data.drxcmsfzc            | X                                     | String   | 当日行程码是否正常                             |
| data.kssj                 | XX:XX                                 | String   | 开始时间                                       |
| data.wd                   | X                                     | String   |
| data.orgId                | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX      | String   | 管理部门                                       |
| data.fdygh                | XXXXXXXX                              | String   | 辅导员工号                                     |
| data.jssj                 | XX:XX                                 | String   | 结束时间                                       |
| data.bdzt                 | X                                     | String   | 表单状态                                       |
| data.drjkmsfzc            | X                                     | String   | 当日健康码是否正常                             |
| data.id                   | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX      | String   | 组织ID                                         |
| data.tbrq                 | XXXX-XX-XX                            | String   | 填报日期                                       |
| data.lastUpdator          | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       | String   | 最后修改人                                     |
| data.formId               | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX      | String   | 表单ID                                         |
| data.processInstanceId    | -                                     | Object   |
| data.creator              | -                                     | Object   | 创建人                                         |
| data.jsdm                 | XXX                                   | String   | 角色类型 bks本科生、  yjs 研究生、  bss 博士生 |
| data.xyid                 | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX      | String   | 学院ID                                         |
| data.dkdd                 | -                                     | Object   | 打卡地点                                       |
| data.dkdd.errorCode       | -                                     | Number   |
| data.dkdd.errorMessage    | -                                     | Object   |
| data.dkdd.locationType    | 6                                     | Number   |
| data.dkdd.accuracy        | 550                                   | Number   | 精度                                           |
| data.dkdd.latitude        | 11.111111                             | Number   | 纬度, 注意位数                                 |
| data.dkdd.longitude       | 111.111111                            | Number   | 经度, 注意位数                                 |
| data.dkdd.province        | 重庆市                                | String   |
| data.dkdd.city            | 重庆市                                | String   |
| data.dkdd.district        | 北碚区                                | String   |
| data.dkdd.road            | 金华路                                | String   |
| data.dkdd.address         | 重庆市北碚区金华路289号靠近北泉派出所 | String   | 用于提交后那个一句话描述                       |
| data.dkdd.netType         | 4g                                    | String   |
| data.dkdd.operatorType    | CMCC                                  | String   |
| data.dkdd.imei            | imei                                  | String   |
| data.dkdd.time            | 1111111111111                         | Number   | 提交时间 Date.now()                            |
| data.dkdd.provider        | lbs                                   | String   |
| data.dkdd.isFromMock      | -                                     | -        |
| data.dkdd.isGpsEnabled    | true                                  | -        |
| data.dkdd.isWifiEnabled   | -                                     | -        |
| data.dkdd.isMobileEnabled | true                                  | -        |
| data.dkdd.isOffset        | true                                  | -        |
| data.dkdd.cityAdCode      | 023                                   | String   | 城市电话区号                                   |
| data.dkdd.districtAdCode  | 500109                                | String   | 区号, 即身份证前6位                            |
| data.dkdd.LBSWuaCacheId   | XXXXXXXX                              | String   | 似乎是一个定位服务商缓存, 此参数可忽略不用     |
| data.dkrq                 | XXXX-XX-XX XX:XX                      | String   | 打卡日期                                       |
| data.zymc                 | XXXXXXXXXXX                           | String   | 专业名称                                       |
| data.xymc                 | XXXXXXXXXXXXXXXXXXXXX                 | String   | 学院名                                         |
| data.sjh                  | 159XXXX8848                           | String   | 手机号                                         |
| data.bjmc                 | XXXXXX班                              | String   | 班级名                                         |
| data.xh                   | 222XXXXXXXXXX                         | String   | 学号                                           |
| data.createTime           | -                                     | Object   | 管理员创建表单的时间                           |
| data.xm                   | XXX                                   | String   | 姓名                                           |
| data.processCode          | -                                     | Object   |
| data.zrwid                | X                                     | String   | 是否在打卡范围内                               |
| data.njdm                 | XXXX级                                | String   | 年级                                           |
| data.selectMap            | {}                                    | Array    |
| data.ycdksfcl             | -                                     | Object   |
| data.fdyxm                | XXX                                   | String   | 辅导员姓名                                     |
| data.taskId               | -                                     | Object   |
| data.lastUpdateTime       | XXXX-XX-XX XX:XX:XX                   | String   |
| msg                       | -                                     | Object   | 返回文字描述                                   |
| exception                 | -                                     | Object   |
| exceptionClass            | -                                     | Object   |
| exceptionMsg              | -                                     | Object   |
### 提交数据



#### 接口URL
> http://counselor.swu.edu.cn/gateway//fighter-workflow/form-instance/save?formId=3fc165a338ee4450966268383da9a007&procDefId=

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Header参数
| 参数名             | 示例值                              | 参数类型 | 是否必填 | 参数描述   |
| ------------------ | ----------------------------------- | -------- | -------- | ---------- |
| fighter-auth-token | XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX | Text     | 是       | 临时授权码 |
#### 请求Query参数
| 参数名    | 示例值                           | 参数类型 | 是否必填 | 参数描述           |
| --------- | -------------------------------- | -------- | -------- | ------------------ |
| formId    | 3fc165a338ee4450966268383da9a007 | Text     | 是       | 表单参数, 来源未知 |
| procDefId | -                                | Text     | 是       | 留空不填           |
#### 请求Body参数
```javascript
* 定义 formList: 获取健康打卡列表得到的List
* 定义 userInfo: 智慧X大登录数据
* 定义 formInfo: 健康打卡表单数据查询返回值
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
    id: formList[0].id,
    creator: '',
    createTime: '',
    lastUpdator: '',
    lastUpdateTime: '',
    orgId: userInfo.subject.orgList[0].id,
    $orgId: userInfo.subject.orgList[0].name,
    processCode: '',
    bdzt: '',
    lbzt: formInfo.lbzt,
    $lbzt: '未报',
    fdyxm: formInfo.fdyxm,
    fdygh: formInfo.fdygh,
    zrwid: formInfo.zrwid,
    jsdm: formInfo.jsdm,
    tbrq: formInfo.tbrq,
    kssj: formInfo.kssj,
    jssj: formInfo.jssj,
    njdm: formInfo.njdm,
    sjh: formInfo.sjh,
    ycdksfcl: '',
    zymc: formInfo.zymc,
    bjmc: formInfo.bjmc,
    formId: config.morning.formId,
    jbxx: '',
    xh: formInfo.xh,
    xm: formInfo.xm,
    xyid: formInfo.xyid,
    xymc: formInfo.xymc,
    cqxx: '',
    dkdd: {
      errorCode: 0,
      errorMessage: '',
      locationType: 6,
      accuracy: 550,
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
    },
    dkrq: `${t.getFullYear()}-${
      t.getMonth() + 1
    }-${t.getDate()} ${t.getHours()}:${t.getMinutes()}`,
    ...config.morning.formInfo,
    businessKey: formList[0].id,
}
```