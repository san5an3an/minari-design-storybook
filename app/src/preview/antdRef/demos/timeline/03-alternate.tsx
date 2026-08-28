// @ts-nocheck
import React from 'react';
import { ClockCircleOutlined } from '../_icons';
import { Timeline } from 'antd';

const App: React.FC = () => (
  <Timeline
    mode="alternate"
    items={[
      {
        content: '서비스 사이트 만들기 2015-09-01',
      },
      {
        content: '초기 네트워크 문제 해결 2015-09-01',
        color: 'green',
      },
      {
        icon: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
        content: `내용을 채우려고 넣은 예시 글이에요. 실제 문장 대신 자리를 잡아 두는 용도라 뜻은 없지만, 글줄이 어떻게 흐르고 어디서 넘치는지 보는 데는 충분해요.`,
      },
      {
        color: 'red',
        content: '네트워크 문제 해결 중 2015-09-01',
      },
      {
        content: '서비스 사이트 만들기 2015-09-01',
      },
      {
        icon: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
        content: '기술 테스트 2015-09-01',
      },
    ]}
  />
);

export default App;