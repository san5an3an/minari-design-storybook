// @ts-nocheck
import React from 'react';
import { SearchOutlined } from '../_icons';
import { Button, Flex, Tooltip } from 'antd';

const App: React.FC = () => (
  <Flex gap="small" vertical>
    <Flex wrap gap="small">
      <Tooltip title="찾기">
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="primary" shape="circle">
        A
      </Button>
      <Button type="primary" icon={<SearchOutlined />}>
        찾기
      </Button>
      <Tooltip title="찾기">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button icon={<SearchOutlined />}>찾기</Button>
    </Flex>
    <Flex wrap gap="small">
      <Tooltip title="찾기">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button icon={<SearchOutlined />}>찾기</Button>
      <Tooltip title="찾기">
        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="dashed" icon={<SearchOutlined />}>
        찾기
      </Button>
      <Button icon={<SearchOutlined />} href="https://www.google.com" target="_blank" />
    </Flex>
  </Flex>
);

export default App;