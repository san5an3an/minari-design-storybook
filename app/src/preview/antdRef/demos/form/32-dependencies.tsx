// @ts-nocheck
import React from 'react';
import { Alert, Form, Input, Typography } from 'antd';

const App: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      name="dependenciesDemo"
      autoComplete="off"
      style={{ maxWidth: 600 }}
      layout="vertical"
    >
      <Alert title=" `Password2` 를 고친 다음 `비밀번호` 를 고쳐 보세요" type="info" showIcon />

      <Form.Item label="비밀번호" name="password" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      {/* Field */}
      <Form.Item
        label="비밀번호 확인"
        name="password2"
        dependencies={['password']}
        rules={[
          {
            required: true,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('새로 넣은 비밀번호가 안 맞아요!'));
            },
          }),
        ]}
      >
        <Input />
      </Form.Item>

      {/* Render Props */}
      <Form.Item noStyle dependencies={['password2']}>
        {() => (
          <Typography>
            <p>
              이럴 때만 다시 그려요 <code>password2</code> 고친 때:
            </p>
            <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
          </Typography>
        )}
      </Form.Item>
    </Form>
  );
};

export default App;