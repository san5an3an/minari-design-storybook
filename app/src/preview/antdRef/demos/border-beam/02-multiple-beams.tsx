import React from 'react';
import { BorderBeam, Card, Flex } from 'antd';

const App: React.FC = () => (
  <Flex vertical gap="medium">
    <BorderBeam count={3}>
      <Card title="빛줄기 여럿">
        빛줄기 개수를 정하면 상자 테두리를 따라 고르게 퍼져요.
      </Card>
    </BorderBeam>
    <BorderBeam count={2}>
      <Card title="빛줄기 여럿">
        빛줄기 개수를 정하면 상자 테두리를 따라 고르게 퍼져요.
      </Card>
    </BorderBeam>
  </Flex>
);

export default App;