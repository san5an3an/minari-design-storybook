// @ts-nocheck
import React from 'react';
import { SearchOutlined } from '../_icons';
import { Button, Input, Select, Space } from 'antd';

const { Search } = Input;

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
  },
];

const App: React.FC = () => (
  <Space vertical size="medium">
    <Space.Compact>
      <Input defaultValue="26888888" />
    </Space.Compact>
    <Space.Compact>
      <Input style={{ width: '20%' }} defaultValue="0571" />
      <Input style={{ width: '80%' }} defaultValue="26888888" />
    </Space.Compact>
    <Space.Compact>
      <Space.Addon>https://</Space.Addon>
      <Search placeholder="찾을 말을 넣어 주세요" allowClear />
    </Space.Compact>
    <Space.Compact style={{ width: '100%' }}>
      <Input defaultValue="입력칸과 버튼 붙이기" />
      <Button type="primary">보내기</Button>
    </Space.Compact>
    <Space.Compact>
      <Select defaultValue="Zhejiang" options={options} />
      <Input defaultValue="서울 서초구" />
    </Space.Compact>
    <Space.Compact size="large">
      <Space.Addon>
        <SearchOutlined />
      </Space.Addon>
      <Input placeholder="큰 크기" />
      <Input placeholder="또 다른 입력칸" />
    </Space.Compact>
  </Space>
);

export default App;