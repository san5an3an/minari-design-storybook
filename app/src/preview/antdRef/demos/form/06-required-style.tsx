// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/form.json 의 examples[6] ("Required style")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { InfoCircleOutlined } from '../_icons';
import { Button, Form, Input, Radio, Tag } from 'antd';
import type { FormProps } from 'antd';

type RequiredMark = boolean | 'optional' | '직접 정하기';

const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
  <>
    {required ? <Tag color="error">필수</Tag> : <Tag color="warning">optional</Tag>}
    {label}
  </>
);

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMark] = useState<RequiredMark>('optional');

  const onRequiredTypeChange: FormProps<any>['onValuesChange'] = ({ requiredMarkValue }) => {
    setRequiredMark(requiredMarkValue);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ requiredMarkValue: requiredMark }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark === '직접 정하기' ? customizeRequiredMark : requiredMark}
    >
      <Form.Item label="필수 표시" name="requiredMarkValue">
        <Radio.Group>
          <Radio.Button value>기본값</Radio.Button>
          <Radio.Button value="optional">선택</Radio.Button>
          <Radio.Button value={false}>숨김</Radio.Button>
          <Radio.Button value="직접 정하기">직접 정하기</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="항목 A" required tooltip="꼭 채워야 하는 칸이에요">
        <Input placeholder="여기에 입력해 주세요" />
      </Form.Item>
      <Form.Item
        label="항목 B"
        tooltip={{ title: '아이콘을 직접 정한 툴팁', icon: <InfoCircleOutlined /> }}
      >
        <Input placeholder="여기에 입력해 주세요" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">보내기</Button>
      </Form.Item>
    </Form>
  );
};

export default App;