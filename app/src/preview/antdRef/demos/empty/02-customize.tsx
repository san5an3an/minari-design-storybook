// @ts-nocheck
import React from 'react';
import { Button, Empty, Typography } from 'antd';

const App: React.FC = () => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    styles={{ image: { height: 60 } }}
    description={
      <Typography.Text>
        직접 정하기 <a href="#API">설명</a>
      </Typography.Text>
    }
  >
    <Button type="primary">지금 만들기</Button>
  </Empty>
);

export default App;