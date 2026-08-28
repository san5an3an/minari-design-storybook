// @ts-nocheck
import React from 'react';
import { Card } from 'antd';

const App: React.FC = () => (
  <Card title="카드 제목">
    <Card type="inner" title="안쪽 카드 제목" extra={<a href="#">더 보기</a>}>
      안쪽 카드 내용
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="안쪽 카드 제목"
      extra={<a href="#">더 보기</a>}
    >
      안쪽 카드 내용
    </Card>
  </Card>
);

export default App;