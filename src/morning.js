const getToken = require('./getToken');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const config = require('./config');

function get2bit(v) {
  t = Number(v);
  if (t < 10) return '0' + v;
  return v;
}

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

async function getFormId(token) {
  return fetch(`http://counselor.swu.edu.cn/js/chunk-8c41e2b0.aca5308c.js`, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Linux; U; Android 11; zh-CN; M2102K1C Build/RKQ1.200826.002) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 UWS/3.22.1.210 Mobile Safari/537.36 AliApp(DingTalk/6.5.0) com.alibaba.android.rimet/23628571 Channel/700159 language/zh-CN abi/64 UT4Aplus/0.2.25 colorScheme/light',
      Cookie: `fighter-auth-token=${token}`,
    },
  })
    .then((d) => {
      if (d.status !== 200) return Promise.reject(d.msg);
      return d.text();
    })
    .then((d) => d.match(/formId=([0-9a-zA-Z]+)/)[1]);
}

async function getFormInfo({ formList, token, formId }) {
  return fetch(
    `http://counselor.swu.edu.cn/gateway//fighter-workflow/form-instance/select?dataId=${formList[0].id}&formId=${formId}&procDefId=`,
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

async function submitForm({ token, body, formId }) {
  return fetch(
    `http://counselor.swu.edu.cn/gateway//fighter-workflow/form-instance/save?formId=${formId}&procDefId=`,
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
      return d;
    });
}

function getBody({ userInfo, formInfo, formList, formId }) {
  const t = new Date();
  t.setHours(t.getHours() + 8);
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
    formId,
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
    dkrq: `${t.getFullYear()}-${t.getMonth() + 1}-${t.getDate()} ${get2bit(
      t.getUTCHours()
    )}:${get2bit(t.getMinutes())}`,
    ...config.morning.formInfo,
    businessKey: formList[0].id,
  };
}

async function morning() {
  try {
    token = await getToken();
    userInfo = await zhxdLogin(token);
    formList = await getList(token);
    if (formList.length === 0)
      throw new Error(JSON.stringify({ token, userInfo, formList }));
    formId = (await getFormId(token)) || config.morning.formId;
    formInfo = await getFormInfo({ formList, token, formId });
    body = getBody({ userInfo, formInfo, formList, formId });
    submit = await submitForm({ token, body, formId });
    if (!(submit && submit.code === 200))
      throw new Error(
        JSON.stringify({
          token,
          userInfo,
          formList,
          formInfo,
          body,
          submit,
        })
      );
    if (config.resultEmail.enable) {
      const emailSend = require('./mailNotify');
      await emailSend({ subject: `健康打卡成功` });
    }
    return { code: 0 };
  } catch (error) {
    if (config.resultEmail.enable) {
      const emailSend = require('./mailNotify');
      await emailSend({
        subject: `健康打卡失败`,
        html: `<p>${error}</p>`,
      });
    }
    return { code: 1, msg: error };
  }
}

module.exports = morning;

(async () => {
  if (config.environment === 'local') {
    const res = await morning();
    console.log(res);
    return res;
  }
})();