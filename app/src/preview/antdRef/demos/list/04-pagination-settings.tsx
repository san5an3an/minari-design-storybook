// @ts-nocheck
import React, { useState } from 'react';
import { Avatar, List, Radio, Space } from 'antd';

type PaginationPosition = 'top' | 'bottom' | 'both';

type PaginationAlign = 'start' | 'center' | 'end';

const data = [
  {
    title: 'Ant Design 제목 1',
  },
  {
    title: 'Ant Design 제목 2',
  },
  {
    title: 'Ant Design 제목 3',
  },
  {
    title: 'Ant Design 제목 4',
  },
];

const positionOptions = ['top', 'bottom', 'both'];

const alignOptions = ['start', 'center', 'end'];

const App: React.FC = () => {
  const [position, setPosition] = useState<PaginationPosition>('bottom');
  const [align, setAlign] = useState<PaginationAlign>('center');

  return (
    <>
      <Space vertical style={{ marginBottom: '20px' }} size="medium">
        <Space>
          <span>Pagination 자리:</span>
          <Radio.Group
            optionType="button"
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          >
            {positionOptions.map((item) => (
              <Radio.Button key={item} value={item}>
                {item}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Space>
        <Space>
          <span>Pagination 정렬:</span>
          <Radio.Group
            optionType="button"
            value={align}
            onChange={(e) => {
              setAlign(e.target.value);
            }}
          >
            {alignOptions.map((item) => (
              <Radio.Button key={item} value={item}>
                {item}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Space>
      </Space>
      <List
        pagination={{ position, align }}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/10.x/lorelei/svg?seed=${index}`} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design 은 백오피스 애플리케이션을 위한 디자인 언어예요. Ant UED 팀이 다듬었어요"
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default App;