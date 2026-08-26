import React from 'react';
import { MehOutlined, SmileOutlined } from '../_icons';
import { Select, Space } from 'antd';

const smileIcon = <SmileOutlined />;
const mehIcon = <MehOutlined />;

const handleChange = (value: string | string[]) => {
  console.log(`고른 값 ${value}`);
};

const App: React.FC = () => (
  <Space wrap>
    <Select
      prefix="사용자"
      defaultValue="lucy"
      placeholder="사용자 고르기"
      style={{ width: 200 }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: '지훈' },
        { value: 'lucy', label: '서연' },
        { value: '정우진', label: 'yiminghe' },
        { value: 'disabled', label: '못 씀', disabled: true },
      ]}
      allowClear
      showSearch
    />
    <Select
      suffixIcon={smileIcon}
      defaultValue="lucy"
      placeholder="고르기"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: '지훈' },
        { value: 'lucy', label: '서연' },
        { value: '정우진', label: 'yiminghe' },
        { value: 'disabled', label: '못 씀', disabled: true },
      ]}
    />
    <Select
      suffixIcon={mehIcon}
      defaultValue="lucy"
      placeholder="고르기"
      style={{ width: 120 }}
      disabled
      options={[{ value: 'lucy', label: '서연' }]}
    />
    <br />
    <Select
      prefix="사용자"
      defaultValue={['lucy']}
      placeholder="고르기"
      mode="multiple"
      style={{ width: 200 }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: '지훈' },
        { value: 'lucy', label: '서연' },
        { value: '정우진', label: 'yiminghe' },
        { value: 'disabled', label: '못 씀', disabled: true },
      ]}
    />
    <Select
      suffixIcon={smileIcon}
      defaultValue={['lucy']}
      placeholder="고르기"
      mode="multiple"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: '지훈' },
        { value: 'lucy', label: '서연' },
        { value: '정우진', label: 'yiminghe' },
        { value: 'disabled', label: '못 씀', disabled: true },
      ]}
    />
    <Select
      suffixIcon={mehIcon}
      defaultValue={['lucy']}
      placeholder="고르기"
      mode="multiple"
      style={{ width: 120 }}
      disabled
      options={[{ value: 'lucy', label: '서연' }]}
    />
  </Space>
);

export default App;