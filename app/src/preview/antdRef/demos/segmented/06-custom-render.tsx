import React from 'react';
import { UserOutlined } from '../_icons';
import { Avatar, Flex, Segmented } from 'antd';

const App: React.FC = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Segmented
      options={[
        {
          label: (
            <div style={{ padding: 4 }}>
              <Avatar src="https://api.dicebear.com/10.x/lorelei/svg?seed=8" alt="사용자 1" />
              <div>사용자 1</div>
            </div>
          ), value: 'user1', tooltip: { title: '안녕하세요 사용자1', color: 'gold' },
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <Avatar style={{ backgroundColor: '#f56a00' }} alt="사용자 2">
                K
              </Avatar>
              <div>사용자 2</div>
            </div>
          ), value: 'user2', tooltip: { title: '안녕하세요 사용자2', color: 'pink' },
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} alt="사용자 3" />
              <div>사용자 3</div>
            </div>
          ), value: 'user3', tooltip: { title: '안녕하세요 사용자3', color: 'geekblue' },
        },
      ]}
    />
    <Segmented
      options={[
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>봄</div>
              <div>1~3월</div>
            </div>
          ),
          value: 'spring',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>여름</div>
              <div>4~6월</div>
            </div>
          ),
          value: 'summer',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>가을</div>
              <div>7~9월</div>
            </div>
          ),
          value: 'autumn',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>겨울</div>
              <div>10~12월</div>
            </div>
          ),
          value: 'winter',
        },
      ]}
    />
  </Flex>
);

export default App;