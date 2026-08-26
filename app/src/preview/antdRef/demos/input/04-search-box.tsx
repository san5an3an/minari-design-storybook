import React from 'react';
import { AudioOutlined } from '../_icons';
import { Input, Space } from 'antd';
import type { GetProps } from 'antd';

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const suffix = <AudioOutlined style={{ fontSize: 16, color: '#1677ff' }} />;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const App: React.FC = () => (
  <Space vertical>
    <Search placeholder="찾을 말을 넣어 주세요" onSearch={onSearch} style={{ width: 200 }} />
    <Search placeholder="찾을 말을 넣어 주세요" allowClear onSearch={onSearch} style={{ width: 200 }} />
    <Space.Compact>
      <Space.Addon>https://</Space.Addon>
      <Search placeholder="찾을 말을 넣어 주세요" allowClear onSearch={onSearch} />
    </Space.Compact>

    <Search placeholder="찾을 말을 넣어 주세요" onSearch={onSearch} enterButton />
    <Search
      placeholder="찾을 말을 넣어 주세요"
      allowClear
      enterButton="찾기"
      size="large"
      onSearch={onSearch}
    />
    <Search
      placeholder="찾을 말을 넣어 주세요"
      enterButton="찾기"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
  </Space>
);

export default App;