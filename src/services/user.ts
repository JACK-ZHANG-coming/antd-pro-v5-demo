import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  return request(`/mgr/api/v1//admin/login`, {
    method: 'POST',
    body: params,
  });
}