// @ts-nocheck
import React from 'react';
import { Alert } from 'antd';

const App: React.FC = () => (
  <>
    <Alert
      title="성공 글"
      description="성공 설명 성공 설명 성공 설명"
      type="success"
    />
    <br />
    <Alert
      title="안내 글"
      description="안내 설명 안내 설명 안내 설명 안내 설명"
      type="info"
    />
    <br />
    <Alert
      title="경고 글"
      description="경고 설명 경고 설명 경고 설명 경고 설명"
      type="warning"
    />
    <br />
    <Alert
      title="오류 글"
      description="오류 설명 오류 설명 오류 설명 오류 설명"
      type="error"
    />
  </>
);

export default App;