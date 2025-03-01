import { request } from "@/utils/request";


export const getTest = () => {
  return request({
    url: 'http://185.198.166.245:9000/user/login',
    method: 'POST',
    params: null,
    data: { username: 'python222', password: '123456' },
    headers: null
  })
}