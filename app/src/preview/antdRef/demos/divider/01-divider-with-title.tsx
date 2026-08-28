// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/divider.json 의 examples[1] ("Divider with title")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Divider } from 'antd';

const App: React.FC = () => (
  <>
    <p>
      내용을 채우려고 넣은 예시 글이에요. 여기에 실제 문장이 들어가면 줄 길이와 줄 높이가 어떻게 보이는지 가늠할 수 있어요. 길이를 늘리려고 한 문장을 더 붙여 뒀어요.
    </p>
    <Divider>글자</Divider>
    <p>
      내용을 채우려고 넣은 예시 글이에요. 여기에 실제 문장이 들어가면 줄 길이와 줄 높이가 어떻게 보이는지 가늠할 수 있어요. 길이를 늘리려고 한 문장을 더 붙여 뒀어요.
    </p>
    <Divider titlePlacement="start">왼쪽 글</Divider>
    <p>
      내용을 채우려고 넣은 예시 글이에요. 여기에 실제 문장이 들어가면 줄 길이와 줄 높이가 어떻게 보이는지 가늠할 수 있어요. 길이를 늘리려고 한 문장을 더 붙여 뒀어요.
    </p>
    <Divider titlePlacement="end">오른쪽 글</Divider>
    <p>
      내용을 채우려고 넣은 예시 글이에요. 여기에 실제 문장이 들어가면 줄 길이와 줄 높이가 어떻게 보이는지 가늠할 수 있어요. 길이를 늘리려고 한 문장을 더 붙여 뒀어요.
    </p>
    <Divider titlePlacement="start" styles={{ content: { margin: 0 } }}>
      왼쪽 글 여백 0
    </Divider>
    <p>
      내용을 채우려고 넣은 예시 글이에요. 여기에 실제 문장이 들어가면 줄 길이와 줄 높이가 어떻게 보이는지 가늠할 수 있어요. 길이를 늘리려고 한 문장을 더 붙여 뒀어요.
    </p>
    <Divider titlePlacement="end" styles={{ content: { margin: '0 50px' } }}>
      오른쪽 글 여백 50px
    </Divider>
    <p>
      내용을 채우려고 넣은 예시 글이에요. 여기에 실제 문장이 들어가면 줄 길이와 줄 높이가 어떻게 보이는지 가늠할 수 있어요. 길이를 늘리려고 한 문장을 더 붙여 뒀어요.
    </p>
  </>
);

export default App;