// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/listy.json 의 examples[3] ("Rich content")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
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