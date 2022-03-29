const fetch = require('node-fetch');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const config = require('./config.js');
const FormData = require('form-data');

function promiseStick() {
  let res, rej;
  const p = new Promise((resolve, reject) => {
    [res, rej] = [resolve, reject];
  });
  return Object.assign(p, { res, rej });
}

async function reqLoginToken(p = promiseStick()) {
  const cookieMap = new Map();
  let dom = await JSDOM.fromURL(
    'https://uaaap.swu.edu.cn/cas/login?service=http://counselor.swu.edu.cn/gateway/fighter-integrate-uaap/integrate/uaap/cas/resolve-cas-return?next=http://counselor.swu.edu.cn/#/casLogin?toUrl=/index',
    {
      resources: 'usable',
      runScripts: 'dangerously',
    }
  );
  dom.window._cookie = dom.window.document.__lookupSetter__('cookie');
  dom.window.document.__defineSetter__('cookie', function (c) {
    _cookie = c;
    const cs = c.split('=', 2);
    cookieMap.set(cs[0], cs[1]);
    if (cookieMap.size === 2) {
      p.res({
        cookie: Object(dom.cookieJar.store.idx['uaaap.swu.edu.cn']),
        cookieE: cookieMap.get(config.login.encryptCookie),
        formInfo: formInfo,
      });
      dom.window.close();
      dom = null;
    }
  });
  dom.window.document.__defineGetter__('cookie', function () {
    return _cookie;
  });
  const formInfo = [
    ...dom.window.document.querySelectorAll('#loginForm  input[type^=hidden]'),
  ].reduce(
    (pre, cur) => Object.defineProperty(pre, cur.name, { value: cur.value }),
    {}
  );
  return p;
}

async function reqLogin(tokenPre) {
  const form = new FormData();
  console.log(
    `36501JSESSIONID=${
      tokenPre.cookie['/cas/']['36501JSESSIONID'].value
    }; lD01YhBPHVTHO=${tokenPre.cookie['/']['lD01YhBPHVTHO'].value}; ${
      config.login.encryptCookie
    }=${tokenPre.cookieE.replaceAll(' path', '')}`
  );
  form.append('username', config.login.username);
  form.append('password', config.login.password);
  form.append('lt', tokenPre.formInfo.lt);
  form.append('execution', tokenPre.formInfo.execution);
  form.append('_eventId', tokenPre.formInfo._eventId);
  form.append('isQrSubmit', tokenPre.formInfo.isQrSubmit);
  form.append('qrValue', tokenPre.formInfo.qrValue);
  return fetch(
    `https://uaaap.swu.edu.cn/cas/login;36501JSESSIONID=${tokenPre.cookie['/cas/']['36501JSESSIONID'].value}?service=http://counselor.swu.edu.cn/gateway/fighter-integrate-uaap/integrate/uaap/cas/resolve-cas-return?next=http://counselor.swu.edu.cn/#/casLogin?toUrl=/index`,
    {
      headers: {
        'cache-control': 'no-cache',
        pragma: 'no-cache',
        cookie: `36501JSESSIONID=${tokenPre.cookie['/cas/']['36501JSESSIONID'].value}; lD01YhBPHVTHO=${tokenPre.cookie['/']['lD01YhBPHVTHO'].value}; ${config.login.encryptCookie}=tokenPre.cookieE`,
      },
      body: form,
      method: 'POST',
    }
  ).then((d) => {
    // console.log(d.status);
    // console.log(d.headers.raw());
    return d;
  });
}

async function reqExchangeToken(token) {
  return fetch(
    `http://counselor.swu.edu.cn/gateway/fighter-integrate-uaap/integrate/uaap/cas/exchange-token?token=${token}&_appKey=lighter-portal`
  ).then((d) => d.json());
}

async function getToken() {
  const tokenPre = await reqLoginToken();
  const tokenSucc = await reqLogin(tokenPre);
  console.log(tokenSucc);
  return;
  const fighterAuthToken = await reqExchangeToken(tokenSucc);
  return fighterAuthToken;
}

function getTokenT() {
  return '97e6f2cf-90da-4c4e-b7e3-00bdaac0a42c';
}

module.exports = getTokenT;

