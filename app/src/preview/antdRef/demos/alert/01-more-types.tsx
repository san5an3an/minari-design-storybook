import React from 'react';
import { Alert } from 'antd';

const App: React.FC = () => (
  <>
    <Alert title="성공 글" type="success" />
    <br />
    <Alert title="안내 글" type="info" />
    <br />
    <Alert title="경고 글" type="warning" />
    <br />
    <Alert title="오류 글" type="error" />
  </>
);

export default App;