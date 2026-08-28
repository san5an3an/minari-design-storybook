// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/listy.json 의 examples[2] ("Grouping and sticky headers")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Avatar, Flex, Listy } from 'antd';

interface Contact {
  id: number;
  name: string;
}

const names = [
  'Aaron Baker',
  'Alice Adams',
  'Bella Carter',
  'Brian Diaz',
  'Chloe Evans',
  'Colin Foster',
  'Daisy Garcia',
  'David Hayes',
  'Elena Ingram',
  'Eric Jensen',
  'Fiona Kim',
  'Frank Lopez',
  'Grace Miller',
  'Gavin Nguyen',
  'Hannah Ortiz',
  'Henry Parker',
  'Iris Quincy',
  'Ivan Reed',
  'Jack Smith',
  'Julia Turner',
];

const contacts = names.map<Contact>((name, id) => ({ id, name }));

const colors = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae', '#87d068'];

const colorOf = (letter: string) => colors[(letter.charCodeAt(0) - 65) % colors.length];

const App: React.FC = () => (
  <Listy<Contact>
    items={contacts}
    rowKey="id"
    height={400}
    sticky
    group={{
      key: (contact) => contact.name[0],
      title: (letter) => letter,
    }}
    itemRender={(contact) => (
      <Flex align="center" gap="small">
        <Avatar size="small" style={{ backgroundColor: colorOf(contact.name[0]) }}>
          {contact.name[0]}
        </Avatar>
        {contact.name}
      </Flex>
    )}
  />
);

export default App;