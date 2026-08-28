// @ts-nocheck
import React from 'react';
import { Alert } from 'antd';

const App: React.FC = () => (
  <>
    <Alert title="경고 글" banner />
    <br />
    <Alert
      title="아주 긴 경고 글 경고 글 글 글 글 글 글 글"
      banner
      closable
    />
    <br />
    <Alert showIcon={false} title="아이콘 없는 경고 글" banner />
    <br />
    <Alert type="error" title="오류 글" banner />
  </>
);

export default App;