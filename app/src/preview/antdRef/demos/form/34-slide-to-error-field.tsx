/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/form.json 의 examples[34] ("Slide to error field")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
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