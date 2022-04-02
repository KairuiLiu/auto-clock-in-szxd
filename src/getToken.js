const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const config = require('./config.js');

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
    'https://uaaap.swu.edu.cn/cas/login?service=http%3A%2F%2Fcounselor.swu.edu.cn%2Fgateway%2Ffighter-integrate-uaap%2Fintegrate%2Fuaap%2Fcas%2Fresolve-cas-return%3Fnext%3Dhttp%253A%252F%252Fcounselor.swu.edu.cn%252F%2523%252FcasLogin%253FtoUrl%253D%25252Findex',
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
        posturl: dom.window.document.querySelector('#loginForm').action,
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
  return fetch(tokenPre.posturl, {
    headers: {
      Host: 'uaaap.swu.edu.cn',
      'Cache-Control': 'max-age=0',
      'Upgrade-Insecure-Requests': '1',
      Origin: 'https://uaaap.swu.edu.cn',
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent':
        'Mozilla/5.0 (Linux; Android 11; M2102K1C Build/RKQ1.200826.002;) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/98.0.4758.101 Mobile Safari/537.36',
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-User': '?1',
      'Sec-Fetch-Dest': 'document',
      Referer:
        'https://uaaap.swu.edu.cn/cas/login?service=http://counselor.swu.edu.cn/gateway/fighter-integrate-uaap/integrate/uaap/cas/resolve-cas-return?next=http://counselor.swu.edu.cn/#/casLogin?toUrl=/index',
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
  }).then((d) => {
    if (d.status >= 300 && d.status < 400)
      return d.headers.get('location').match(/ticket=(.+)/)[1];
    else return Promise.reject('login Fialed');
  });
}

async function reqExchangeToken(token) {
  return fetch(
    `http://counselor.swu.edu.cn/gateway/fighter-integrate-uaap/integrate/uaap/cas/resolve-cas-return?next=http%3A%2F%2Fcounselor.swu.edu.cn%2F%23%2FcasLogin%3FtoUrl%3D%252Findex&ticket=${token}`,
    {
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        Host: 'counselor.swu.edu.cn',
        Connection: 'keep-alive',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh',
        'Cache-Control': 'no-cache',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36',
      },
      redirect: 'manual',
    }
  ).then(async (d) => {
    return d.headers.get('fighter-auth-token');
  });
}

async function getToken() {
  try {
    const tokenPre = await reqLoginToken();
    const tokenSuccPre = await reqLogin(tokenPre);
    const fighterAuthToken = await reqExchangeToken(tokenSuccPre);
    return fighterAuthToken;
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = getToken;
