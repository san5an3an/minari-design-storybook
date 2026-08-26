import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

const EllipsisMiddle: React.FC<{ suffixCount: number; children: string }> = ({
  suffixCount,
  children,
}) => {
  const start = children.slice(0, children.length - suffixCount);
  const suffix = children.slice(-suffixCount).trim();
  return (
    <Text style={{ maxWidth: '100%' }} ellipsis={{ suffix }}>
      {start}
    </Text>
  );
};

const App: React.FC = () => (
  <EllipsisMiddle suffixCount={12}>
    사내 데스크톱 애플리케이션을 만들다 보면 서로 다른 디자인 명세와 구현이 뒤섞여요. 그러면 디자이너와 개발자가 어려움을 겪고 같은 일을 두 번 하게 되어 속도가 떨어져요.
  </EllipsisMiddle>
);

export default App;