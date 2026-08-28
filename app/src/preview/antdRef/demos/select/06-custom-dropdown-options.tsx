// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/select.json 의 examples[6] ("Custom dropdown options")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Select, Space } from 'antd';

const options = [
  {
    label: '기쁨',
    value: 'happy',
    emoji: '😄',
    desc: '기분 좋음',
  },
  {
    label: '슬픔',
    value: 'sad',
    emoji: '😢',
    desc: '울적함',
  },
  {
    label: '화남',
    value: 'angry',
    emoji: '😡',
    desc: '분노',
  },
  {
    label: '멋짐',
    value: '멋짐',
    emoji: '😎',
    desc: '여유',
  },
  {
    label: '졸림',
    value: 'sleepy',
    emoji: '😴',
    desc: '잠이 필요해',
  },
];

const App: React.FC = () => (
  <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="지금 기분을 골라 주세요."
    defaultValue={['happy']}
    onChange={(value) => {
      console.log(`고른 값 ${value}`);
    }}
    options={options}
    optionRender={(option) => (
      <Space>
        <span role="img" aria-label={option.data.label}>
          {option.data.emoji}
        </span>
        {`${option.data.label} (${option.data.desc})`}
      </Space>
    )}
  />
);

export default App;