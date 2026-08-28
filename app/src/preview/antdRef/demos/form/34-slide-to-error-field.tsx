// @ts-nocheck
import React from 'react';
import { Button, Flex, Form, Input, Select } from 'antd';

const App = () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      scrollToFirstError={{ behavior: 'instant', block: 'end', focus: true }}
      style={{ paddingBlock: 32 }}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
    >
      <Form.Item label={null}>
        <Button onClick={() => form.scrollToField('bio')}>소개로 굴러가기</Button>
      </Form.Item>

      <Form.Item name="username" label="사용자 이름" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="직업" name="occupation">
        <Select
          options={[
            { label: '디자이너', value: 'designer' },
            { label: '개발자', value: '개발자' },
            { label: '프로덕트 매니저', value: 'product-manager' },
          ]}
        />
      </Form.Item>

      <Form.Item name="motto" label="좌우명">
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item name="bio" label="소개" rules={[{ required: true }]}>
        <Input.TextArea rows={6} />
      </Form.Item>

      <Form.Item label={null}>
        <Flex gap="small">
          <Button type="primary" htmlType="submit">
            보내기
          </Button>
          <Button danger onClick={() => form.resetFields()}>
            되돌리기
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
};

export default App;