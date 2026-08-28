// @ts-nocheck
import React from 'react';
import { BorderBeam, Card } from 'antd';

const App: React.FC = () => (
  <div style={{ width: 360 }}>
    <BorderBeam lineWidth={2}>
      <Card title="직접 정한 선 굵기" style={{ borderWidth: 2 }}>
        이 상자의 테두리 굵기에 맞춰 lineWidth 를 정해요.
      </Card>
    </BorderBeam>
  </div>
);

export default App;