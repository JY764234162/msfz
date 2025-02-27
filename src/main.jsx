import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./router";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
// for date-picker i18n
import "dayjs/locale/zh-cn";
import { v4 as uuidv4 } from "uuid";


window.uuid=uuidv4()

ReactDOM.createRoot(document.getElementById("root")).render(
    <ConfigProvider locale={zhCN}>
      <Router />
    </ConfigProvider>
);
