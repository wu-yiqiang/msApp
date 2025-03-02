import { request } from "@/utils/request";

export const PostLogin = (data: any) => {
  return request({
    url: 'http://185.198.166.245:9000/user/login',
    method: 'POST',
    params: null,
    data: data,
    headers: null
  })
}

export const GetAssetsPage = () => {
  return request({
    url: 'http://185.198.166.245:9000/user/assets/page',
    method: 'GET',
    params: null,
    data: null,
    headers: null
  })
}