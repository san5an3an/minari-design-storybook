// @ts-nocheck
import React from 'react';
import { Button, Result } from 'antd';

const App: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="미안해요, 찾으시는 쪽이 없어요."
    extra={<Button type="primary">처음으로</Button>}
  />
);

export default App;