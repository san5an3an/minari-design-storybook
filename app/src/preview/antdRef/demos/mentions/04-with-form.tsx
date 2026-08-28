// @ts-nocheck
import React from 'react';
import { Button, Form, Mentions, Space } from 'antd';

const { getMentions } = Mentions;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

const App: React.FC = () => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      console.log('보내기:', values);
    } catch (errInfo) {
      console.log('오류:', errInfo);
    }
  };

  const checkMention = async (_: any, value: string) => {
    const mentions = getMentions(value);

    if (mentions.length < 2) {
      throw new Error('둘 이상 골라야 해요!');
    }
  };

  return (
    <Form form={form} layout="horizontal" onFinish={onFinish} {...formItemLayout}>
      <Form.Item name="coders" label="으뜸 개발자" rules={[{ validator: checkMention }]}>
        <Mentions
          rows={1}
          options={[
            {
              value: 'afc163',
              label: 'afc163',
            },
            {
              value: 'zombieJ',
              label: 'zombieJ',
            },
            {
              value: 'yesmeck',
              label: 'yesmeck',
            },
          ]}
        />
      </Form.Item>
      <Form.Item name="bio" label="소개" rules={[{ required: true }]}>
        <Mentions
          rows={3}
          placeholder="여기서 @ 로 사람을 부를 수 있어요"
          options={[
            {
              value: 'afc163',
              label: 'afc163',
            },
            {
              value: 'zombieJ',
              label: 'zombieJ',
            },
            {
              value: 'yesmeck',
              label: 'yesmeck',
            },
          ]}
        />
      </Form.Item>
      <Form.Item label={null}>
        <Space wrap>
          <Button htmlType="submit" type="primary">
            보내기
          </Button>
          <Button htmlType="button" onClick={onReset}>
            되돌리기
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default App;