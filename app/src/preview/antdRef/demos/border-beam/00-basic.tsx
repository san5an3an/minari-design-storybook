// @ts-nocheck
import React from 'react';
import { BorderBeam, Card } from 'antd';

const App: React.FC = () => (
  <div style={{ width: 360 }}>
    <BorderBeam>
      <Card title="작업 공간 한눈에 보기">
        작업 상태, 배포 상태, 최근 자동화 활동을 한 판에서 봐요.
      </Card>
    </BorderBeam>
  </div>
);

export default App;