// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/date-picker.json 의 examples[21] ("Variants")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { DatePicker, Flex } from 'antd';

const { RangePicker } = DatePicker;

const App: React.FC = () => (
  <Flex vertical gap={12}>
    <Flex gap={8}>
      <DatePicker placeholder="테두리" />
      <RangePicker placeholder={['테두리 시작', '테두리 끝']} />
    </Flex>
    <Flex gap={8}>
      <DatePicker placeholder="채움" variant="filled" />
      <RangePicker placeholder={['채움 시작', '채움 끝']} variant="filled" />
    </Flex>
    <Flex gap={8}>
      <DatePicker placeholder="테두리 없음" variant="borderless" />
      <RangePicker placeholder={['테두리 없음 시작', '테두리 없음 끝']} variant="borderless" />
    </Flex>
    <Flex gap={8}>
      <DatePicker placeholder="밑줄" variant="underlined" />
      <RangePicker placeholder={['밑줄 시작', '밑줄 끝']} variant="underlined" />
    </Flex>
  </Flex>
);

export default App;