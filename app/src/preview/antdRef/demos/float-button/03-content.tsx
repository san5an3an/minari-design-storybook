import React from 'react';
import { FileTextOutlined } from '../_icons';
import { FloatButton } from 'antd';

const App: React.FC = () => (
  <>
    <FloatButton
      icon={<FileTextOutlined />}
      content="도움말"
      shape="square"
      style={{ insetInlineEnd: 24 }}
    />
    <FloatButton content="도움말" shape="square" style={{ insetInlineEnd: 94 }} />
    <FloatButton
      icon={<FileTextOutlined />}
      content="도움말"
      shape="square"
      style={{ insetInlineEnd: 164 }}
    />
  </>
);

export default App;