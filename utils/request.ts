import { Request } from "@/types/request";
import { Alert } from "react-native";
export const request = (req: Request) => {
  let { url, method = "GET", params = null, data = null, headers = {} } = req;
  const options = {
    method,
    ...{ body: data ? JSON.stringify(data) : null },
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };
  if (params)
    url +=
      url +
      "?" +
      Object.entries(params)
        .reduce(
          (t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`,
          Object.keys(params).length ? "?" : ""
        )
        .replace(/&$/, "");
  console.log("request url", url)
  return fetch(url, options)
    .then((response) => {
      console.log('resonse', response)
      if (!response.ok) {
        Alert.alert("请求接口失败")
      }
      return response.json();
    })
    .catch((error) => {
      Alert.alert("服务端发生错误或者网络错误");
    });
};
