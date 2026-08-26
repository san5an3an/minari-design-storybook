/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/select.json 의 examples[9] ("Option Group")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Select } from 'antd';

const handleChange = (value: string) => {
  console.log(`고른 값 ${value}`);
};

const App: React.FC = () => (
  <Select
    defaultValue="lucy"
    style={{ width: 200 }}
    onChange={handleChange}
    options={[
      {
        label: <span>매니저</span>,
        title: '매니저',
        options: [
          { label: <span>지훈</span>, value: '지훈' },
          { label: <span>서연</span>, value: '서연' },
        ],
      },
      {
        label: <span>엔지니어</span>,
        title: '엔지니어',
        options: [
          { label: <span>하윤</span>, value: '하윤' },
          { label: <span>도윤</span>, value: '도윤' },
        ],
      },
    ]}
  />
);

export default App;