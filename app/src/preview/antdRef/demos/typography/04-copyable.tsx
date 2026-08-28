// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/typography.json 의 examples[4] ("Copyable")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { SmileFilled, SmileOutlined } from '../_icons';
import { Typography } from 'antd';

const { Paragraph, Text } = Typography;

const App: React.FC = () => (
  <>
    <Paragraph copyable>복사할 수 있는 글이에요.</Paragraph>
    <Paragraph copyable={{ text: '안녕하세요, Ant Design!' }}>복사할 글을 바꿔요.</Paragraph>
    <Paragraph
      copyable={{
        icon: [<SmileOutlined key="copy-icon" />, <SmileFilled key="copied-icon" />],
        tooltips: ['여기를 눌러 보세요', '눌렀어요!!'],
      }}
    >
      복사 아이콘과 툴팁 글자를 직접 정해요.
    </Paragraph>
    <Paragraph copyable={{ tooltips: false }}>복사 툴팁 숨기기.</Paragraph>
    <Paragraph
      copyable={{
        text: async () =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve('요청 글');
            }, 500);
          }),
      }}
    >
      복사할 글을 받아 와요.
    </Paragraph>
    <Paragraph copyable actions={{ placement: 'start' }}>
      복사 버튼을 앞에 둬요.
    </Paragraph>
    <Text copyable={{ text: '복사할 글' }} />
  </>
);

export default App;