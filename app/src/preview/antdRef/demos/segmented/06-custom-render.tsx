// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/segmented.json 의 examples[6] ("Custom Render")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Flex, Segmented } from 'antd';

const App: React.FC = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Segmented
      options={[
        {
          label: (
            <div style={{ padding: 4 }}>
              <Avatar src="https://api.dicebear.com/10.x/lorelei/svg?seed=8" alt="사용자 1" />
              <div>사용자 1</div>
            </div>
          ), value: 'user1', tooltip: { title: '안녕하세요 사용자1', color: 'gold' },
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <Avatar style={{ backgroundColor: '#f56a00' }} alt="사용자 2">
                K
              </Avatar>
              <div>사용자 2</div>
            </div>
          ), value: 'user2', tooltip: { title: '안녕하세요 사용자2', color: 'pink' },
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} alt="사용자 3" />
              <div>사용자 3</div>
            </div>
          ), value: 'user3', tooltip: { title: '안녕하세요 사용자3', color: 'geekblue' },
        },
      ]}
    />
    <Segmented
      options={[
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>봄</div>
              <div>1~3월</div>
            </div>
          ),
          value: 'spring',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>여름</div>
              <div>4~6월</div>
            </div>
          ),
          value: 'summer',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>가을</div>
              <div>7~9월</div>
            </div>
          ),
          value: 'autumn',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>겨울</div>
              <div>10~12월</div>
            </div>
          ),
          value: 'winter',
        },
      ]}
    />
  </Flex>
);

export default App;