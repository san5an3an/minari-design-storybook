// @ts-nocheck
import React from 'react';
import { Avatar, List } from 'antd';

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
      </List.Item>
    )}
  />
);

export default App;