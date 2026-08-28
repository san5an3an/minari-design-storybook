// @ts-nocheck
import React from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        첫 번째 메뉴 항목
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        두 번째 메뉴 항목
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        세 번째 메뉴 항목
      </a>
    ),
  },
];

const App: React.FC = () => (
  <Space vertical>
    <Space wrap>
      <Dropdown menu={{ items }} placement="bottomLeft">
        <Button>bottomLeft</Button>
      </Dropdown>
      <Dropdown menu={{ items }} placement="bottom">
        <Button>bottom</Button>
      </Dropdown>
      <Dropdown menu={{ items }} placement="bottomRight">
        <Button>bottomRight</Button>
      </Dropdown>
    </Space>
    <Space wrap>
      <Dropdown menu={{ items }} placement="topLeft">
        <Button>topLeft</Button>
      </Dropdown>
      <Dropdown menu={{ items }} placement="top">
        <Button>top</Button>
      </Dropdown>
      <Dropdown menu={{ items }} placement="topRight">
        <Button>topRight</Button>
      </Dropdown>
    </Space>
    <Space wrap>
      <Dropdown menu={{ items }} placement="leftTop">
        <Button>leftTop</Button>
      </Dropdown>
      <Dropdown menu={{ items }} placement="left">
        <Button>left</Button>
      </Dropdown>
      <Dropdown menu={{ items }} placement="leftBottom">
        <Button>leftBottom</Button>
      </Dropdown>
    </Space>
    <Space wrap>
      <Dropdown menu={{ items }} placement="rightTop">
        <Button>rightTop</Button>
      </Dropdown>
      <Dropdown menu={{ items }} placement="right">
        <Button>right</Button>
      </Dropdown>
      <Dropdown menu={{ items }} placement="rightBottom">
        <Button>rightBottom</Button>
      </Dropdown>
    </Space>
  </Space>
);

export default App;