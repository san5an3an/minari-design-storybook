// @ts-nocheck
import React from 'react';
import { ClockCircleOutlined } from '../_icons';
import { theme, Timeline } from 'antd';

const App: React.FC = () => {
  const { token } = theme.useToken();

  return (
    <Timeline
      items={[
        {
          content: '서비스 사이트 만들기 2015-09-01',
        },
        {
          content: '초기 네트워크 문제 해결 2015-09-01',
        },
        {
          icon: (
            <ClockCircleOutlined
              style={{
                fontSize: 20,
                // Only need to set when `fontSize` is customized
                background: token.colorBgContainer,
              }}
            />
          ),
          color: 'red',
          content: '기술 테스트 2015-09-01',
        },
        {
          content: '네트워크 문제 해결 중 2015-09-01',
        },
      ]}
    />
  );
};

export default App;