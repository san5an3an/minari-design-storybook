// @ts-nocheck
import React from 'react';
import type { PaginationProps } from 'antd';
import { Divider, Flex, Pagination } from 'antd';

const showTotal: PaginationProps['showTotal'] = (total) => `모두 ${total}개`;

const App: React.FC = () => (
  <Flex vertical gap="medium">
    <Divider titlePlacement="start">작음</Divider>

    <Pagination size="small" total={50} />
    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
    <Pagination size="small" total={50} showTotal={showTotal} />
    <Pagination
      size="small"
      total={50}
      disabled
      showTotal={showTotal}
      showSizeChanger
      showQuickJumper
    />

    <Divider titlePlacement="start">큼</Divider>

    <Pagination size="large" total={50} />
    <Pagination size="large" total={50} showSizeChanger showQuickJumper />
    <Pagination size="large" total={50} showTotal={showTotal} />
    <Pagination
      size="large"
      total={50}
      disabled
      showTotal={showTotal}
      showSizeChanger
      showQuickJumper
    />
  </Flex>
);

export default App;