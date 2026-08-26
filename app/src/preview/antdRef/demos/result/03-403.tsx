import React from 'react';
import { Button, Result } from 'antd';

const App: React.FC = () => (
  <Result
    status="403"
    title="403"
    subTitle="미안해요, 이 쪽을 볼 권한이 없어요."
    extra={<Button type="primary">처음으로</Button>}
  />
);

export default App;