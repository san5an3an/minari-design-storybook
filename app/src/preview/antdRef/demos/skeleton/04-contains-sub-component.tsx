import React, { useState } from 'react';
import { Button, Skeleton, Space } from 'antd';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const showSkeleton = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <Space vertical style={{ width: '100%' }} size={16}>
      <Skeleton loading={loading}>
        <h4 style={{ marginBottom: 16 }}>Ant Design 은 디자인 언어예요</h4>
        <p>
          디자인 원칙과 실용적인 패턴, 좋은 디자인 자원(Sketch·Axure)을 함께 드려요. 제품 프로토타입을 예쁘고 빠르게 만들 수 있게요.
        </p>
      </Skeleton>
      <Button onClick={showSkeleton} disabled={loading}>
        스켈레톤 보이기
      </Button>
    </Space>
  );
};

export default App;