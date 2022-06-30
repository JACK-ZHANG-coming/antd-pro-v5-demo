import request from '@/utils/request';

// 验证登录 账号密码
export async function fakeAccountLogin(params:any) {
  return request(`/mgr/api/v1//admin/login`, {
    method: 'POST',
    body: params,
  });
}

// 获取用户信息 
export async function currentUser(params?:any) {
  return request(`/mgr/api/v1/admin/currentUser`, {
    method: 'GET',
    // body: params,
  });
}

// 退出登录
export async function outLogin(params?:any) {
  return request(`/mgr/api/v1/admin/logout`, {
    method: 'POST',
    body: params,
  });
}