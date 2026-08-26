import React from 'react';
import { Button, Form, Input, message, Space } from 'antd';

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const onFinish = () => {
    messageApi.success('보내기 성공!');
  };

  const onFinishFailed = () => {
    messageApi.error('보내기 실패!');
  };

  const onFill = () => {
    form.setFieldsValue({
      url: 'https://taobao.com/',
    });
  };

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="url"
          label="URL"
          rules={[
            { required: true },
            { type: 'url', warningOnly: true },
            { type: 'string', min: 6 },
          ]}
        >
          <Input placeholder="여기에 입력해 주세요" />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              보내기
            </Button>
            <Button htmlType="button" onClick={onFill}>
              채우기
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default App;