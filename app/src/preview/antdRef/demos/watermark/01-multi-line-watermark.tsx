import React from 'react';
import { Watermark } from 'antd';

const App: React.FC = () => (
  <Watermark content={['Ant Design', { text: '즐거운 일', font: { fontSize: 12 } }]}>
    <div style={{ height: 500 }} />
  </Watermark>
);

export default App;