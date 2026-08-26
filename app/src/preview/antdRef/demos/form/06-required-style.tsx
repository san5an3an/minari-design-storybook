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