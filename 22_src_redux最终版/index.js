import React from "react";
import ReactDOM from 'react-dom/client';

import App from "./App";

import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        {/* 此处需要用Provider包裹App,目的是让App所有的后代容器组件都接收到store */}
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
  );