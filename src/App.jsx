import React from "react";
import { Router } from "./router";
import { ConfigProvider } from "antd";

export default function App() {
  return (
    <ConfigProvider>
      <Router />
    </ConfigProvider>
  );
}
