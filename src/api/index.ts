import request from '@/utils/request';
import { GetRequestType } from './types'

export function requestApi(data:any) {
  return request({
      url: data.url,
      method: data.method,
      params: data.method =='get' ? data.params : null,
      data: data.method =='post' ? data.params : null,
      headers: {
        ['Authorization']: 'Bearer ' + data.token
      }
  });
}

export function getUserApi() {
  return request<GetRequestType>({
    url: '/userInfo',
    method: 'get'
  });
}