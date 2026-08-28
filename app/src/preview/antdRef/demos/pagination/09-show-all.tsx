// @ts-nocheck
import React from 'react';
import { Pagination } from 'antd';

const App: React.FC = () => (
  <Pagination
    total={85}
    showSizeChanger
    showQuickJumper
    showTotal={(total) => `모두 ${total}개`}
  />
);

export default App;