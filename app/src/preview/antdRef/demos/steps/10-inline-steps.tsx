import React from 'react';
import type { StepsProps } from 'antd';
import { Avatar, List, Steps } from 'antd';

const data = [
  {
    title: 'Ant Design 제목 1',
    current: 0,
  },
  {
    title: 'Ant Design 제목 2',
    current: 1,
    status: 'error',
  },
  {
    title: 'Ant Design 제목 3',
    current: 2,
  },
  {
    title: 'Ant Design 제목 4',
    current: 1,
  },
];

const items = [
  {
    title: '1단계',
    content: '1단계예요',
  },
  {
    title: '2단계',
    content: '2단계예요',
  },
  {
    title: '3단계',
    content: '3단계예요',
  },
];

const App: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/10.x/lorelei/svg?seed=${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design 은 백오피스 애플리케이션을 위한 디자인 언어예요. Ant UED 팀이 다듬었어요"
        />
        <Steps
          style={{ marginTop: 8 }}
          type="inline"
          current={item.current}
          status={item.status as StepsProps['status']}
          items={items}
        />
      </List.Item>
    )}
  />
);

export default App;