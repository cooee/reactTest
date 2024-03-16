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

export async function auth() {
  const url2 =
    "https://openplatform.gateapi.io/oauth/authorize?response_type=code&client_id=UggkdgNQjiWwbLyU&redirect_uri=https://lm.2048.net/roguelike/index.html&scope=read_profile,read_email,read_wallet,create_apikey,subsite_login&state=1710429191661";
  axios
    .get(url2, {
      headers: { "Content-Type": "code", "user-agent": "gateapi/android", 'MyCustomHeader1': '1', },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  // axios.
}
