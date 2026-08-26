import React from 'react';
import { Listy } from 'antd';
import type { ListyProps } from 'antd';
import { createStaticStyles } from 'antd-style';

interface User {
  id: number;
  name: string;
  team: string;
}

const users: User[] = [
  { id: 0, name: '지아', team: '디자인' },
  { id: 1, name: '시우', team: '디자인' },
  { id: 2, name: '하은', team: '디자인' },
  { id: 3, name: '도윤', team: '엔지니어링' },
  { id: 4, name: '서아', team: '엔지니어링' },
  { id: 5, name: '이준', team: '엔지니어링' },
  { id: 6, name: '지우', team: '마케팅' },
  { id: 7, name: '도윤', team: '마케팅' },
];

const classNames = createStaticStyles(({ css }) => ({
  root: css`
    border: 1px solid #91caff;
    border-radius: 8px;
    overflow: hidden;
  `,
  groupHeader: css`
    color: #1677ff;
    background: #e6f4ff;
  `,
}));

const styles: ListyProps['styles'] = {
  item: { fontStyle: 'italic' },
};

const App: React.FC = () => (
  <Listy<User, string>
    items={users}
    rowKey="id"
    height={260}
    sticky
    group={{ key: (user) => user.team, title: (team) => team }}
    itemRender={(user) => user.name}
    classNames={classNames}
    styles={styles}
  />
);

export default App;