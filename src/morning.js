const getToken = require('./getToken');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const config = require('./config');

async function zhxdLogin(token) {
  return fetch(
    `http://counselor.swu.edu.cn/gateway//fighter-integrate-dingtalk-login/integrate/ding-talk/resolve-return?code=${token}&corpId=${config.corpId}`,
    {
      headers: {
        'fighter-auth-token': token,
        'sec-ch-ua':
          '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
      },
      method: 'GET',
    }
  )
    .then((d) => d.json())
    .then((d) => {
      if (d.code !== 200) return Promise.reject(d.msg);
      d.data.loginInfo.subject.accountDetail.extendInfo = JSON.parse(
        d.data.loginInfo.subject.accountDetail.extendInfo
      );
      return d.data.loginInfo;
    });
}

async function getList(token) {
  return fetch(
    `http://counselor.swu.edu.cn/gateway/fighter-workflow/jkdk/getIntradayDKXX?xh=${config.login.username}`,
    {
      headers: {
        'User-Agent': 'Apipost client Runtime/+https://www.apipost.cn/',
        'fighter-auth-token': token,
      },
    }
  )
    .then((d) => d.json())
    .then((d) => {
      if (d.code !== 200) return Promise.reject(d.msg);
      return d.data;
    });
}

async function getFormInfo({ formList, token }) {
  return fetch(
    `http://counselor.swu.edu.cn/gateway//fighter-workflow/form-instance/select?dataId=${formList[0].id}&formId=${config.morning.formId}&procDefId=`,
    {
      headers: {
        'User-Agent': 'Apipost client Runtime/+https://www.apipost.cn/',
        'fighter-auth-token': token,
      },
    }
  )
    .then((d) => d.json())
    .then((d) => {
      if (d.code !== 200) return Promise.reject(d.msg);
      return d.data;
    });
}

async function submitForm({ token, body }) {
  return fetch(
    `http://counselor.swu.edu.cn/gateway//fighter-workflow/form-instance/save?formId=${config.morning.formId}&procDefId=`,
    {
      method: 'POST',
      headers: {
        'User-Agent': 'Apipost client Runtime/+https://www.apipost.cn/',
        'fighter-auth-token': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  )
    .then((d) => d.json())
    .then((d) => {
      if (d.code !== 200) return Promise.reject(d.msg);
      return d.data;
    });
}

function getBody({ userInfo, formInfo, formList }) {
  const t = new Date();
  return {
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
  };
}

async function morning() {
  const token = await getToken();
  const userInfo = await zhxdLogin(token);
  const formList = await getList(token);
  const formInfo = await getFormInfo({ formList, token });
  const body = getBody({ userInfo, formInfo, formList });
  const submit = await submitForm({ token, body });
  if (config.resultEmailQingfuwu.enable) {
    const emailSend = require('./noteEmail');
    if (submit && submit.code === 200) {
      await emailSend({ info: `健康打卡成功` });
    } else
      await emailSend({
        info: `健康打卡失败`,
        context: JSON.stringify({
          token,
          userInfo,
          formList,
          formInfo,
          body,
          submit,
        }),
      });
  }
  if (submit && submit.code === 200) return true;
  return false;
}

module.exports = morning;
