const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
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
  return fetch(
    `https://uaaap.swu.edu.cn/cas/login;36501JSESSIONID=${tokenPre.cookie['/cas/']['36501JSESSIONID'].value}service=http%3A%2F%2Fcounselor.swu.edu.cn%2Fgateway%2Ffighter-integrate-uaap%2Fintegrate%2Fuaap%2Fcas%2Fresolve-cas-return%3Fnext%3D%252FcasLogin%253FtoUrl%253D%25252Findex`,
    {
      headers: {
        Host: 'uaaap.swu.edu.cn',
        Connection: 'keep-alive',
        'Content-Length': '183',
        'Cache-Control': 'max-age=0',
        'Upgrade-Insecure-Requests': '1',
        Origin: 'https://uaaap.swu.edu.cn',
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent':
          'Mozilla/5.0 (Linux; Android 11; M2102K1C Build/RKQ1.200826.002;) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/98.0.4758.101 Mobile Safari/537.36',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'X-Requested-With': 'mark.via',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-User': '?1',
        'Sec-Fetch-Dest': 'document',
        Referer:
          'https://uaaap.swu.edu.cn/cas/login?service=http://counselor.swu.edu.cn/gateway/fighter-integrate-uaap/integrate/uaap/cas/resolve-cas-return?next=/casLogin?toUrl=http://counselor.swu.edu.cn',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        Cookie:
          `36501JSESSIONID=${tokenPre.cookie['/cas/']['36501JSESSIONID'].value}; ` +
          `lD01YhBPHVTHO=${tokenPre.cookie['/']['lD01YhBPHVTHO'].value};` +
          `${config.login.encryptCookie}=${tokenPre.cookieE.replace(
            ' path',
            ''
          )}`,
      },
      body: `username=${config.login.username}&password=${config.login.password}&lt=${tokenPre.formInfo.lt}&execution=e1s1&_eventId=submit&isQrSubmit=false&qrValue=`,
      method: 'POST',
      redirect: 'manual',
    }
  ).then((d) => {
    if (d.status >= 300 && d.status < 400)
      return d.headers.get('location').match(/ticket=(.+)/)[1];
    else return Promise.reject('login Fialed');
  });
}

async function reqExchangeToken(token) {
  return fetch(
    `http://counselor.swu.edu.cn/gateway/fighter-integrate-uaap/integrate/uaap/cas/resolve-cas-return?ticket=${token}&next=http://counselor.swu.edu.cn/#/casLogin?toUrl=%2Findex`,
    {
      headers: {
        Host: 'counselor.swu.edu.cn',
        Connection: 'keep-alive',
        'Cache-Control': 'max-age=0',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Linux; Android 11; M2102K1C Build/RKQ1.200826.002;) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/98.0.4758.101 Mobile Safari/537.36',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'X-Requested-With': 'mark.via',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        Referer: 'http://counselor.swu.edu.cn/',
      },
      redirect: 'manual',
    }
  ).then(async (d) => {
    console.log(d.headers);
    t = await d.json();
    console.log(t);
    return d;
  });
}

async function getToken() {
  const tokenPre = await reqLoginToken();
  const tokenSuccPre = await reqLogin(tokenPre);
  const tokenSucc = decodeURIComponent(tokenSuccPre);
  const fighterAuthToken = await reqExchangeToken(tokenSuccPre);
  return fighterAuthToken;
}

module.exports = getToken;
