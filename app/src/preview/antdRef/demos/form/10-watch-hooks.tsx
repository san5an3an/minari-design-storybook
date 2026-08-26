import React from 'react';
import { Form, Input, InputNumber, Typography } from 'antd';

const Demo: React.FC = () => {
  const [form] = Form.useForm<{ name: string; age: number }>();
  const nameValue = Form.useWatch('name', form);
  // The selector is static and does not support closures.
  const customValue = Form.useWatch((values) => `이름: ${values.name || ''}`, form);

  return (
    <>
      <Form form={form} layout="vertical" autoComplete="off">
        <Form.Item name="name" label="이름 (Watch 로 다시 그림)">
          <Input />
        </Form.Item>
        <Form.Item name="age" label="나이 (안 봄)">
          <InputNumber />
        </Form.Item>
      </Form>

      <Typography>
        <pre>이름 값: {nameValue}</pre>
        <pre>직접 정한 값: {customValue}</pre>
      </Typography>
    </>
  );
};

export default Demo;