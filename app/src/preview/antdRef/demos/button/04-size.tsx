// @ts-nocheck
import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

const App: React.FC = () => {
  const [size, setSize] = useState<SizeType>('large'); // default is 'medium'
  return (
    <>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio.Button value="large">큼</Radio.Button>
        <Radio.Button value="medium">중간</Radio.Button>
        <Radio.Button value="small">작음</Radio.Button>
      </Radio.Group>
      <Divider titlePlacement="start" plain>
        미리보기
      </Divider>
      <Flex gap="small" align="flex-start" vertical>
        <Flex gap="small" wrap>
          <Button type="primary" size={size}>
            기본
          </Button>
          <Button size={size}>기본값</Button>
          <Button type="dashed" size={size}>
            파선
          </Button>
        </Flex>
        <Button type="link" size={size}>
          링크
        </Button>
        <Flex gap="small" wrap>
          <Button type="primary" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
            내려받기
          </Button>
          <Button type="primary" icon={<DownloadOutlined />} size={size}>
            내려받기
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default App;