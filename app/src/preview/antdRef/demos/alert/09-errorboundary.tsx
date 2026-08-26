import React, { useState } from 'react';
import { Alert, Button } from 'antd';

const { ErrorBoundary } = Alert;

const ThrowError: React.FC = () => {
  const [error, setError] = useState<Error>();
  const onClick = () => {
    setError(new Error('잡히지 않은 오류'));
  };

  if (error) {
    throw error;
  }
  return (
    <Button danger onClick={onClick}>
      눌러서 오류 일으키기
    </Button>
  );
};

const App: React.FC = () => (
  <ErrorBoundary>
    <ThrowError />
  </ErrorBoundary>
);

export default App;