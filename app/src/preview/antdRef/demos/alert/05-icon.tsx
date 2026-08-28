// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/alert.json 의 examples[5] ("Icon")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Alert } from 'antd';

const App: React.FC = () => (
  <>
    <Alert title="성공 안내" type="success" showIcon />
    <br />
    <Alert title="알아 두면 좋은 것" type="info" showIcon />
    <br />
    <Alert title="경고" type="warning" showIcon closable />
    <br />
    <Alert title="오류" type="error" showIcon />
    <br />
    <Alert
      title="성공 안내"
      description="잘 쓴 문구에 대한 자세한 설명과 조언이에요."
      type="success"
      showIcon
    />
    <br />
    <Alert
      title="알아 두면 좋은 것"
      description="문구에 대한 덧붙임 설명이에요."
      type="info"
      showIcon
    />
    <br />
    <Alert
      title="경고"
      description="문구에 대한 경고 안내예요."
      type="warning"
      showIcon
      closable
    />
    <br />
    <Alert
      title="오류"
      description="문구에 대한 오류 메시지예요."
      type="error"
      showIcon
    />
  </>
);

export default App;