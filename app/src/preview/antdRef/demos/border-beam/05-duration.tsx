// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/border-beam.json 의 examples[5] ("Duration")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { BorderBeam, Card, Flex, Tag, Typography } from 'antd';

const durations = [
  {
    name: '빠름',
    seconds: 3,
    description: '잠깐 강조하거나 지금 움직이는 모듈에 쓰는 빠른 흐름이에요.',
  },
  {
    name: '기본값',
    seconds: 6,
    description: '강조하는 상자 대부분에 쓰는 원래 속도예요.',
  },
  {
    name: '느림',
    seconds: 12,
    description: '오래 떠 있는 판이나 은은한 면에 어울리는 느린 흐름이에요.',
  },
];

const App: React.FC = () => (
  <Flex gap={16} wrap>
    {durations.map(({ name, seconds, description }) => (
      <div key={name} style={{ width: 220 }}>
        <BorderBeam duration={seconds}>
          <Card title={name} extra={<Tag variant="filled">{seconds}s</Tag>}>
            <Typography.Text type="secondary">{description}</Typography.Text>
          </Card>
        </BorderBeam>
      </div>
    ))}
  </Flex>
);

export default App;