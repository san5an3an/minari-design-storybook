import React from 'react';
import { Button, Result } from 'antd';

const App: React.FC = () => (
  <Result
    status="success"
    title="클라우드 서버 ECS 를 샀어요!"
    subTitle="주문번호: 2017182818828182881 클라우드 서버 설정에 1~5분 걸려요. 기다려 주세요."
    extra={[
      <Button type="primary" key="console">
        콘솔로 가기
      </Button>,
      <Button key="buy">다시 사기</Button>,
    ]}
  />
);

export default App;