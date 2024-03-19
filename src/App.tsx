import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  auth, sendTelegramMessage, auth2, getQuerys, access_token
} from "./lib/TGBot";

function App() {
  const [count, setCount] = useState(0);
  const [authurl, setAuthurl] = useState("");
  const [msg, setMsg] = useState("");

  const onClick = useCallback(() => {


    const code  = localStorage.getItem("gate_code");
    if (code && code != "") {
      access_token(code,(msg: any) => {
        setMsg(msg);
      });
    } else {
      auth2((code:number,msg: any) => {
        if (code == 0) {
          setAuthurl(msg);
        } else {
          setMsg(msg)
        }
       
      });
    }
    // access_token((access_token1:any)=>{
    //   console.log(access_token1)
    // });
  }, []);

  const code: any = getQuerys(window.location.href)["code"] || "";
  if (code && code!="") {
    localStorage.setItem("gate_code",code);
  }

  useEffect(()=>{
    if (code != "") {
      setMsg(code)
    }
 
  },[code])

  return (
    <>
      {/* <div dangerouslySetInnerHTML={{ __html: msg }}></div> */}
      <div >
        <iframe srcDoc={authurl} width="1"
          height="1"></iframe>
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
          {window.location.href}
        </p>
      </div>
      <p className="read-the-docs">
        {msg}
      </p>
    </>
  );
}
// responseBody: {"access_code":"euUGrO1ATzbr7W9yFK2cQ_sFciL5aNOB","refresh_token":"er-duMTF3nXaHf9xHSL6AxpDfDX4U35o","scope":"read_profile,read_email,read_wallet,create_apikey","token_type":"Bearer","expired_in":86400}
 

export default App;
