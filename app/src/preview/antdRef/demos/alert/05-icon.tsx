// @ts-nocheck
import React from 'react';
import { Alert } from 'antd';

const App: React.FC = () => (
  <>
    <Alert title="성공 안내" type="success" showIcon />
    <br />
    <Alert title="알아 두면 좋은 것" type="info" showIcon />
    <br />
    <Alert title="경고" type="warning" showIcon closable />
    <br />
    <Alert title="오류" type="error" showIcon />
    <br />
    <Alert
      title="성공 안내"
      description="잘 쓴 문구에 대한 자세한 설명과 조언이에요."
      type="success"
      showIcon
    />
    <br />
    <Alert
      title="알아 두면 좋은 것"
      description="문구에 대한 덧붙임 설명이에요."
      type="info"
      showIcon
    />
    <br />
    <Alert
      title="경고"
      description="문구에 대한 경고 안내예요."
      type="warning"
      showIcon
      closable
    />
    <br />
    <Alert
      title="오류"
      description="문구에 대한 오류 메시지예요."
      type="error"
      showIcon
    />
  </>
);

export default App;