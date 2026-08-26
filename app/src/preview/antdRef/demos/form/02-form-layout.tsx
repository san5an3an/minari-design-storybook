/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/form.json 의 examples[2] ("Form Layout")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import type { FormProps } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const onFormLayoutChange: FormProps<any>['onValuesChange'] = ({ layout }) => {
    setFormLayout(layout);
  };

  return (
    <Form
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      onValuesChange={onFormLayoutChange}
      style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
    >
      <Form.Item label="폼 배치" name="layout">
        <Radio.Group value={formLayout}>
          <Radio.Button value="horizontal">가로</Radio.Button>
          <Radio.Button value="vertical">세로</Radio.Button>
          <Radio.Button value="inline">한 줄 배치</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="항목 A">
        <Input placeholder="여기에 입력해 주세요" />
      </Form.Item>
      <Form.Item label="항목 B">
        <Input placeholder="여기에 입력해 주세요" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">보내기</Button>
      </Form.Item>
    </Form>
  );
};

export default App;