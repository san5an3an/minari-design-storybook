// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/form.json 의 examples[11] ("Validate Trigger")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Alert, Form, Input } from 'antd';

const App: React.FC = () => (
  <Form name="trigger" style={{ maxWidth: 600 }} layout="vertical" autoComplete="off">
    <Alert title="`max` 규칙이에요. 글자를 계속 쳐 보세요" />

    <Form.Item
      hasFeedback
      label="항목 A"
      name="field_a"
      validateTrigger="onBlur"
      rules={[{ max: 3 }]}
    >
      <Input placeholder="칸에서 벗어날 때 필수 확인하기" />
    </Form.Item>

    <Form.Item
      hasFeedback
      label="항목 B"
      name="field_b"
      validateDebounce={1000}
      rules={[{ max: 3 }]}
    >
      <Input placeholder="1초 뒤에 필수 확인하기" />
    </Form.Item>

    <Form.Item
      hasFeedback
      label="항목 C"
      name="field_c"
      validateFirst
      rules={[{ max: 6 }, { max: 3, message: '6글자를 넘겨 쳐 보세요' }]}
    >
      <Input placeholder="하나씩 확인하기" />
    </Form.Item>
  </Form>
);

export default App;