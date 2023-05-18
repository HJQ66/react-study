import React from "react";
import ReactDOM from 'react-dom/client';

import { ConfigProvider } from 'antd'
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        {/* 配置自定义主题 */}
        <ConfigProvider 
          theme={{ 
              token: { colorPrimary: "red", borderRadius: 3 } 
          }}    
          >
        <App />
      </ConfigProvider>
    </React.StrictMode>
  );