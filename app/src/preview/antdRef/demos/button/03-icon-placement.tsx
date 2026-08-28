// @ts-nocheck
import React, { useState } from 'react';
import { SearchOutlined } from '../_icons';
import { Button, Divider, Flex, Radio, Space, Tooltip } from 'antd';

const App: React.FC = () => {
  const [position, setPosition] = useState<'start' | 'end'>('end');

  return (
    <>
      <Space>
        <Radio.Group value={position} onChange={(e) => setPosition(e.target.value)}>
          <Radio.Button value="start">start</Radio.Button>
          <Radio.Button value="end">end</Radio.Button>
        </Radio.Group>
      </Space>
      <Divider titlePlacement="start" plain>
        미리보기
      </Divider>
      <Flex gap="small" vertical>
        <Flex wrap gap="small">
          <Tooltip title="찾기">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="primary" shape="circle">
            A
          </Button>
          <Button type="primary" icon={<SearchOutlined />} iconPlacement={position}>
            찾기
          </Button>
          <Tooltip title="찾기">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />} iconPlacement={position}>
            찾기
          </Button>
        </Flex>
        <Flex wrap gap="small">
          <Tooltip title="찾기">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />} type="text" iconPlacement={position}>
            찾기
          </Button>
          <Tooltip title="찾기">
            <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="dashed" icon={<SearchOutlined />} iconPlacement={position}>
            찾기
          </Button>
          <Button
            icon={<SearchOutlined />}
            href="https://www.google.com"
            target="_blank"
            iconPlacement={position}
          />
          <Button type="primary" loading iconPlacement={position}>
            불러오는 중
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default App;