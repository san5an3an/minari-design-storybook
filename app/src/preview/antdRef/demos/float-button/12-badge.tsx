// @ts-nocheck
import React from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

const App: React.FC = () => (
  <>
    <FloatButton shape="circle" style={{ insetInlineEnd: 24 + 70 + 70 }} badge={{ dot: true }} />
    <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 + 70 }}>
      <FloatButton tooltip={<div>직접 정한 badge 색</div>} badge={{ count: 5, color: 'blue' }} />
      <FloatButton badge={{ count: 5 }} />
    </FloatButton.Group>
    <FloatButton.Group shape="circle">
      <FloatButton badge={{ count: 12 }} icon={<QuestionCircleOutlined />} />
      <FloatButton badge={{ count: 123, overflowCount: 999 }} />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
  </>
);

export default App;