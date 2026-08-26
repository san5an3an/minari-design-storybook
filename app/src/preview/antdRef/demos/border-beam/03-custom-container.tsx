import React from 'react';
import { BorderBeam } from 'antd';

const panelStyle: React.CSSProperties = {
  position: 'relative',
  width: 420,
  background: '#fff',
  border: '1px solid #f0f0f0',
  borderRadius: 8,
};

const contentStyle: React.CSSProperties = {
  minHeight: 160,
  padding: 24,
  color: 'rgba(0, 0, 0, 0.88)',
  lineHeight: 1.5715,
};

const App: React.FC = () => (
  <BorderBeam>
    <div style={panelStyle}>
      <div style={contentStyle}>
        작업 상태, 배포 상태, 최근 자동화 활동을 직접 만든 상자 하나에서 봐요.
      </div>
    </div>
  </BorderBeam>
);

export default App;