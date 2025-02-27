import { useMemo, useState } from "react";
import { List, Input, message, Switch } from "antd";
import {
  SearchOutlined,
  CopyOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import copy from "copy-to-clipboard";
import { includesIgnoreCase, highlightKeyword } from "../util";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";
import "./IndexPage.css";

const IndexPage = ({ arr }) => {
  const [value, setValue] = useState("");
  const [isDark, setIsDark] = useState(true);
  const navigate = useNavigate();

  const leftList = useMemo(() => {
    if (!value) return arr;
    return arr.filter((item) => {
      return (
        includesIgnoreCase(item.title, value) ||
        includesIgnoreCase(item.content, value)
      );
    });
  }, [arr, value]);

  const onCopy = (content) => {
    copy(content);
    message.success("复制成功");
  };

  return (
    <div className={`index-container ${isDark ? "dark" : "light"}`}>
      <div className="header-actions">
        <ArrowLeftOutlined
          className="back-button"
          onClick={() => navigate("/")}
        />
        <Switch
          checkedChildren="🌙"
          unCheckedChildren="☀️"
          defaultChecked
          onChange={(checked) => setIsDark(checked)}
        />
      </div>
      <div className="sidebar">
        <div className="sidebar-header">目录</div>
        <List
          className="sidebar-list"
          dataSource={leftList}
          renderItem={(item) => (
            <List.Item className="sidebar-item">
              <a href={`#${item.title}`}>{item.title}</a>
            </List.Item>
          )}
        />
      </div>

      <div className="main-content">
        <div className="search-section">
          <Input
            prefix={<SearchOutlined />}
            onChange={debounce((e) => setValue(e.target.value), 300)}
            placeholder="搜索题目或内容..."
            allowClear
          />
        </div>

        <List
          className="content-list"
          itemLayout="vertical"
          dataSource={arr}
          renderItem={(item) => (
            <List.Item
              onClick={() => onCopy(item.title + "\n" + item.content)}
              key={item.title}
              id={item.title}
              className="content-item"
            >
              <List.Item.Meta
                title={
                  <h3
                    className="content-title"
                    dangerouslySetInnerHTML={{
                      __html: highlightKeyword(item.title, value),
                    }}
                  />
                }
                description={
                  <div
                    className="content-description"
                    dangerouslySetInnerHTML={{
                      __html: highlightKeyword(item.content, value),
                    }}
                  />
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default IndexPage;
