// @ts-nocheck
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