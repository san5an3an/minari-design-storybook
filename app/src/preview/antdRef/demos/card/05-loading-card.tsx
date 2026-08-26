import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '../_icons';
import { Avatar, Card, Flex, Switch } from 'antd';

const actions: React.ReactNode[] = [
  <EditOutlined key="고치기" />,
  <SettingOutlined key="setting" />,
  <EllipsisOutlined key="ellipsis" />,
];

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <Flex gap="medium" align="start" vertical>
      <Switch checked={!loading} onChange={(checked) => setLoading(!checked)} />
      <Card loading={loading} actions={actions} style={{ minWidth: 300 }}>
        <Card.Meta
          avatar={<Avatar src="https://api.dicebear.com/10.x/lorelei/svg?seed=1" />}
          title="카드 제목"
          description={
            <>
              <p>설명이 들어가는 자리예요</p>
              <p>설명이 들어가는 자리예요</p>
            </>
          }
        />
      </Card>
      <Card loading={loading} actions={actions} style={{ minWidth: 300 }}>
        <Card.Meta
          avatar={<Avatar src="https://api.dicebear.com/10.x/lorelei/svg?seed=2" />}
          title="카드 제목"
          description={
            <>
              <p>설명이 들어가는 자리예요</p>
              <p>설명이 들어가는 자리예요</p>
            </>
          }
        />
      </Card>
    </Flex>
  );
};

export default App;