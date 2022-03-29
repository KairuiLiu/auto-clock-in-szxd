const getToken = require('./getToken');
const fetch = require('node-fetch');
const config = require('./config');
const getImage = require('./getImage');

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
    `http://counselor.swu.edu.cn/gateway/fighter-workflow/cqtj/getTransitionByToday?fighter-auth-token=${token}&pageNum=1&pageSize=5`,
    {
      method: 'POST',
      headers: {
        'User-Agent': 'Apipost client Runtime/+https://www.apipost.cn/',
        'fighter-auth-token': token,
      },
    }
  )
    .then((d) => d.json())
    .then((d) => {
      if (d.code !== 200) return Promise.reject(d.msg);
      return d.data.records;
    });
}

async function getFormInfo({ formList, token }) {
  return fetch(
    `http://counselor.swu.edu.cn/gateway//fighter-workflow/form-instance/select?dataId=${formList.id}&formId=${formList.formId}&procDefId=`,
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

async function submitForm({ token, body, formList }) {
  return fetch(
    `http://counselor.swu.edu.cn/gateway//fighter-workflow/form-instance/save?formId=${formList.formId}&procDefId=`,
    {
      method: 'POST',
      headers: {
        'fighter-auth-token': token,
        'content-type': 'application/json',
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

async function getBody({ formList, userInfo, formInfo, token }) {
  const imgInfo = await getImage(token);
  return {
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
}

async function evening() {
  const token = await getToken();
  const userInfo = await zhxdLogin(token);
  const formList = await getList(token);
  if (!formList.length) return false;
  const formInfo = await getFormInfo({ formList: formList[0], token });
  const body = await getBody({
    formList: formList[0],
    userInfo,
    formInfo,
    token,
  });
  const submit = await submitForm({ token, body, formList: formList[0] });
  console.log(submit);
  if (submit.code === 200) return true;
  return false;
}

module.exports = evening;

evening();
