// @ts-nocheck
import React from 'react';
import { Avatar, Flex, Listy, Typography } from 'antd';

interface Notification {
  id: number;
  user: string;
  message: string;
  time: string;
}

const users = ['지아', '시우', '하은', '시우', '서아', '이준', '지우', '도윤'];

const messages = [
  '병합 요청에 댓글을 남겼어요',
  '분기 계획 검토에 초대했어요. 안건을 제때 정할 수 있게 금요일 전에 참석 여부를 알려 주세요.',
  '디자인 검토 스레드에서 당신을 불렀어요',
  '다음 주 월요일까지 끝내야 하는 일을 맡겼어요. 최근 점검에서 나온 접근성 문제 가운데 남은 것들이에요.',
  '어제 공유한 보고서에 별을 눌렀어요',
  '풀 리퀘스트에 변경을 요청했어요. 대부분 이름 짓기와 새 캐시 층의 테스트 범위에 대한 이야기예요.',
];

const colors = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

const colorOf = (user: string) => colors[users.indexOf(user) % colors.length];

const pad = (value: number) => String(value).padStart(2, '0');

const notifications = Array.from<any, Notification>({ length: 12 }, (_, index) => ({
  id: index,
  user: users[index % users.length],
  message: messages[index % messages.length],
  time: `${pad((8 + index) % 24)}:${pad((index * 17) % 60)}`,
}));

const App: React.FC = () => (
  <Listy<Notification>
    items={notifications}
    rowKey="id"
    height={400}
    itemRender={(item) => (
      <Flex gap="middle" align="flex-start">
        <Avatar style={{ backgroundColor: colorOf(item.user), flex: 'none' }}>
          {item.user[0]}
        </Avatar>
        <Flex vertical flex="auto" style={{ minWidth: 0 }}>
          <Flex justify="space-between" gap="small">
            <Typography.Text strong>{item.user}</Typography.Text>
            <Typography.Text type="secondary">{item.time}</Typography.Text>
          </Flex>
          <Typography.Text type="secondary">{item.message}</Typography.Text>
        </Flex>
      </Flex>
    )}
  />
);

export default App;