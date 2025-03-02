import { request } from "@/utils/request";

export const PostLogin = (data: any) => {
  return request({
    url: '/user/login',
    method: 'POST',
    params: null,
    data: data,
    headers: null
  })
}

export const GetAssetsPage = () => {
  return request({
    url: '/user/assets/page',
    method: 'GET',
    params: null,
    data: null,
    headers: null
  })
}