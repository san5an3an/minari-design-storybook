import React, { useState } from 'react';
import { Card } from 'antd';

const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
];

const contentList: Record<string, React.ReactNode> = {
  tab1: <p>내용1</p>, tab2: <p>내용2</p>,
};

const tabListNoTitle = [
  {
    key: '글',
    label: '글',
  },
  {
    key: '앱',
    label: '앱',
  },
  {
    key: '프로젝트',
    label: '프로젝트',
  },
];

const contentListNoTitle: Record<string, React.ReactNode> = {
  article: <p>글 내용</p>, app: <p>앱 내용</p>, project: <p>프로젝트 내용</p>,
};

const App: React.FC = () => {
  const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');
  const [activeTabKey2, setActiveTabKey2] = useState<string>('앱');

  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };
  const onTab2Change = (key: string) => {
    setActiveTabKey2(key);
  };

  return (
    <>
      <Card
        style={{ width: '100%' }}
        title="카드 제목"
        extra={<a href="#">더 보기</a>}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
      >
        {contentList[activeTabKey1]}
      </Card>
      <br />
      <br />
      <Card
        style={{ width: '100%' }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        tabBarExtraContent={<a href="#">더 보기</a>}
        onTabChange={onTab2Change}
        tabProps={{ size: 'medium' }}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
    </>
  );
};

export default App;