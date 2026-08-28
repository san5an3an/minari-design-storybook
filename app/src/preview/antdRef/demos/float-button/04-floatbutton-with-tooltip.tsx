// @ts-nocheck
import React from 'react';
import { FloatButton } from 'antd';

const App: React.FC = () => (
  <>
    <FloatButton
      style={{ insetBlockEnd: 108 }}
      tooltip={{
        // tooltipProps is supported starting from version 5.25.0.
        title: '5.25.0+ 부터',
        color: 'blue',
        placement: 'top',
      }}
    />
    <FloatButton tooltip={<div>문서</div>} />
  </>
);

export default App;