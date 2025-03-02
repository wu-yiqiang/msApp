import { Request } from "@/types/request";
import AsyncStorage from '@react-native-async-storage/async-storage'
export const request = async (req: Request) => {
  let { url, method = 'GET', params = null, data = null, headers = {} } = req
  const token = await AsyncStorage.getItem('msAppToken')
  const options = {
    method,
    ...{ body: data ? JSON.stringify(data) : null },
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ?? '',
      ...headers
    }
  }
  if (params)
    url +=
      url +
      '?' +
      Object.entries(params)
        .reduce((t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`, Object.keys(params).length ? '?' : '')
        .replace(/&$/, '')
  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        console.log('请求接口失败')
        return Promise.reject()
      }
      return response.json()
    })
    .catch((error) => {
      console.log('服务端发生错误或者网络错误')
    })
}
