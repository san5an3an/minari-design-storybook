// @ts-nocheck
import React from 'react';
import { CloseCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { Flex, Tag } from 'antd';

const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  console.log('눌렀지만 기본 동작을 막았어요.');
};

const App: React.FC = () => (
  <Flex gap="small" align="center" wrap>
    <Tag>태그 1</Tag>
    <Tag>
      <a
        href="https://github.com/ant-design/ant-design/issues/1862"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ant Design 이슈"
      >
        링크
      </a>
    </Tag>
    <Tag closeIcon onClose={preventDefault}>
      기본 동작 막기
    </Tag>
    <Tag closeIcon={<CloseCircleOutlined />} onClose={console.log}>
      태그 2
    </Tag>
    <Tag
      closable={{
        closeIcon: <DeleteOutlined />,
        'aria-label': '닫기 버튼',
      }}
      onClose={console.log}
    >
      태그 3
    </Tag>
  </Flex>
);

export default App;