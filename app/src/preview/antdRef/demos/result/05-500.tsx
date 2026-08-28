// @ts-nocheck
import React from 'react';
import { Button, Result } from 'antd';

const App: React.FC = () => (
  <Result
    status="500"
    title="500"
    subTitle="미안해요, 뭔가 잘못됐어요."
    extra={<Button type="primary">처음으로</Button>}
  />
);

export default App;