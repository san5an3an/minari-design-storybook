// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/listy.json 의 examples[6] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
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
  { id: 3, name: '시우', team: '엔지니어링' },
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