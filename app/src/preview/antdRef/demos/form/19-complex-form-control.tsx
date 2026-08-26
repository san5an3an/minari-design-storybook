/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/form.json 의 examples[19] ("complex form control")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Button, Form, Input, Select, Space, Tooltip, Typography } from 'antd';

const onFinish = (values: any) => {
  console.log('폼에서 받은 값: ', values);
};

const App: React.FC = () => (
  <Form
    name="complex-form"
    onFinish={onFinish}
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
  >
    <Form.Item label="사용자 이름" htmlFor="username">
      <Space>
        <Form.Item
          name="username"
          noStyle
          rules={[{ required: true, message: '사용자 이름은 꼭 필요해요' }]}
        >
          <Input id="username" style={{ width: 160 }} placeholder="넣어 주세요" />
        </Form.Item>
        <Tooltip title="알아 두면 좋은 것">
          <Typography.Link href="#API">도움이 필요하세요?</Typography.Link>
        </Tooltip>
      </Space>
    </Form.Item>
    <Form.Item label="주소">
      <Space.Compact>
        <Form.Item
          name={['address', 'province']}
          noStyle
          rules={[{ required: true, message: '시·도는 꼭 필요해요' }]}
        >
          <Select
            placeholder="시·도 고르기"
            options={[
              { label: 'Zhejiang', value: 'Zhejiang' },
              { label: 'Jiangsu', value: 'Jiangsu' },
            ]}
          />
        </Form.Item>
        <Form.Item
          name={['address', 'street']}
          noStyle
          rules={[{ required: true, message: '도로명은 꼭 필요해요' }]}
        >
          <Input style={{ width: '50%' }} placeholder="도로명을 넣어 주세요" />
        </Form.Item>
      </Space.Compact>
    </Form.Item>
    <Form.Item label="생년월일" style={{ marginBottom: 0 }}>
      <Form.Item
        name="year"
        rules={[{ required: true }]}
        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
      >
        <Input placeholder="태어난 해를 넣어 주세요" />
      </Form.Item>
      <Form.Item
        name="month"
        rules={[{ required: true }]}
        style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
      >
        <Input placeholder="태어난 달을 넣어 주세요" />
      </Form.Item>
    </Form.Item>
    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        보내기
      </Button>
    </Form.Item>
  </Form>
);

export default App;