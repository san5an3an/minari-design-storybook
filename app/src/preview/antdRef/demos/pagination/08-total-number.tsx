import React from 'react';
import { Pagination } from 'antd';

const App: React.FC = () => (
  <>
    <Pagination
      total={85}
      showTotal={(total) => `모두 ${total}개`}
      defaultPageSize={20}
      defaultCurrent={1}
    />
    <br />
    <Pagination
      total={85}
      showTotal={(total, range) => `${total}개 중 ${range[0]}-${range[1]}`}
      defaultPageSize={20}
      defaultCurrent={1}
    />
  </>
);

export default App;