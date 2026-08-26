/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/mentions.json 의 examples[4] ("With Form")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
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