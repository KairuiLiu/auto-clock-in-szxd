### 数智X大是如何工作的

作为钉钉小程序, 数智X大全程使用`fighter-auth-token`作为其`token`, 不采用`Cookie`. API详细信息见[本项目使用的API文档](../apis-clock-in-used/index.md)

#### 图片上传

通过`http://counselor.swu.edu.cn/gateway//fighter-attachment-manage/common/document/upload`上传图片, 回传图片信息简单转换为提交用API格式即可

#### 健康打卡

- 通过`http://counselor.swu.edu.cn/gateway//fighter-integrate-dingtalk-login/integrate/ding-talk/resolve-return?code=XXX&corpId=XXX`接口获取用户个人信息
- 通过`http://counselor.swu.edu.cn/gateway/fighter-workflow/jkdk/getIntradayDKXX?xh=XXX`接口获取正在进行的健康打卡表信息
- 通过`http://counselor.swu.edu.cn/gateway//fighter-workflow/form-instance/default-data-collection?formId=XXX`接口获取该打卡详细设置信息
- 通过`http://counselor.swu.edu.cn/gateway//fighter-workflow/form-instance/select?dataId=XXX&formId=XXX&procDefId=`接口获取目前已填写表单信息(在提交之前请求则获得默认信息)
- 通过`http://counselor.swu.edu.cn/gateway//fighter-workflow/form-instance/save?formId=XXX&procDefId=`接口提交表单, 若返回`code=200`则提交成功

#### 查寝

- 通过`http://counselor.swu.edu.cn/gateway//fighter-integrate-dingtalk-login/integrate/ding-talk/resolve-return?code=XXX&corpId=XXX`接口获取用户个人信息
- 通过`http://counselor.swu.edu.cn/gateway/fighter-workflow/cqtj/getTransitionByToday?fighter-auth-token=XXX`接口获取正在进行的查寝表信息
- 通过`http://counselor.swu.edu.cn/gateway//fighter-workflow/form-instance/select?dataId=xxx&formId=xxx&procDefId=`接口获取目前已填写表单信息(在提交之前请求则获得默认信息)
- 通过`http://counselor.swu.edu.cn/gateway//fighter-workflow/form-instance/save?formId=xxx&procDefId=`接口提交表单, 若返回`code=200`则提交成功