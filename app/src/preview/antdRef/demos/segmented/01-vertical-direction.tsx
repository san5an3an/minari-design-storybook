import React from 'react';
import { AppstoreOutlined, BarsOutlined } from '../_icons';
import { Segmented } from 'antd';

const Demo: React.FC = () => (
  <Segmented
    orientation="vertical"
    options={[
      { value: '목록', icon: <BarsOutlined /> },
      { value: '칸반', icon: <AppstoreOutlined /> },
    ]}
  />
);

export default Demo;