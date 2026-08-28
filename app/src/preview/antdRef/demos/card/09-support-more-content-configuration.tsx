// @ts-nocheck
import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '../_icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const App: React.FC = () => (
  <Card
    style={{ width: 300 }}
    cover={
      <img
        draggable={false}
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="고치기" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/10.x/lorelei/svg?seed=8" />}
      title="카드 제목"
      description="설명이 들어가는 자리예요"
    />
  </Card>
);

export default App;