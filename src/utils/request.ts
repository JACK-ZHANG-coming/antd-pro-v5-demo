/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
import fetch from 'dva/fetch';
import { notification, message } from 'antd';
import { routerRedux } from 'dva/router';
// import store from '../index';
// import {MallRouterPush} from "./utils";

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

function checkStatus(response) {
  return response;
}

export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
  };


  const newOptions = { ...defaultOptions, ...options };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT' || newOptions.method === 'DELETE') {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        // 'Mock-User' : '{"username":"louluan","password":"password"}',
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        // 'Mock-User' : '{"username":"louluan","password":"password"}',
        ...newOptions.headers,
      };
    }
  }

  try{
    let csrfContent = document.getElementsByName("_csrf")[0].content;
    let csrfHeader = document.getElementsByName("_csrf_header")[0].content;
    if(!newOptions.headers){
      newOptions.headers = {};
    }
    newOptions.headers[csrfHeader] = csrfContent;

  }catch (e) {
    console.warn("尚未获取到csrf相关数据，可能为开发环境，请注意");
  }


  return fetch(url, newOptions)
    // .then(checkStatus)
    .then(response => response.json())
    .then((data) =>{
      // const { dispatch } = store;
      const status = data.code;
      if (parseInt(status) === 401) {
        // if (window.location.hash.indexOf("/user/login")===-1) {
        //   window.g_app._store.dispatch({
        //     type: 'login/logout',
        //   });
        // }
      }
      // if (parseInt(status) === 403) {
      //   dispatch(MallRouterPush('/exception/403'));
      // }
      // if (parseInt(status) >= 404 && parseInt(status) < 422) {
      //   dispatch(MallRouterPush('/exception/404'));
      // }
      return data;
    })
    .catch((err) => {
      return {
        message: '系统异常',
      }
    });
}
