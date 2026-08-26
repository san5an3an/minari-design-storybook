/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/form.json 의 examples[3] ("Form mix layout")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Divider, Form, Input } from 'antd';

const App: React.FC = () => (
  <>
    <Form name="layout-multiple-horizontal" layout="horizontal">
      <Form.Item
        label="horizontal"
        name="horizontal"
        rules={[{ required: true }]}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        <Input />
      </Form.Item>
      <Form.Item layout="vertical" label="vertical" name="vertical" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item layout="vertical" label="vertical2" name="vertical2" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
    </Form>
    <Divider />
    <Form name="layout-multiple-vertical" layout="vertical">
      <Form.Item label="vertical" name="vertical" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="vertical2" name="vertical2" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        layout="horizontal"
        label="horizontal"
        name="horizontal"
        rules={[{ required: true }]}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        <Input />
      </Form.Item>
    </Form>
  </>
);

export default App;