// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/form.json 의 examples[30] ("Customized Validation")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { SmileOutlined } from '../_icons';
import {
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TimePicker,
  TreeSelect,
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const App: React.FC = () => (
  <Form {...formItemLayout} style={{ maxWidth: 600 }}>
    <Form.Item
      label="실패"
      validateStatus="error"
      help="숫자와 알파벳을 섞어야 해요"
    >
      <Input placeholder="고를 수 없음" id="error" />
    </Form.Item>

    <Form.Item label="경고" validateStatus="warning">
      <Input placeholder="경고" id="warning" prefix={<SmileOutlined />} />
    </Form.Item>

    <Form.Item
      label="확인하는 중"
      hasFeedback
      validateStatus="validating"
      help="확인하는 중이에요…"
    >
      <Input placeholder="확인하는 중이에요" id="validating" />
    </Form.Item>

    <Form.Item label="성공" hasFeedback validateStatus="success">
      <Input placeholder="저는 내용이에요" id="success" />
    </Form.Item>

    <Form.Item label="경고" hasFeedback validateStatus="warning">
      <Input placeholder="경고" id="warning2" />
    </Form.Item>

    <Form.Item
      label="실패"
      hasFeedback
      validateStatus="error"
      help="숫자와 알파벳을 섞어야 해요"
    >
      <Input placeholder="고를 수 없음" id="error2" />
    </Form.Item>

    <Form.Item label="성공" hasFeedback validateStatus="success">
      <DatePicker style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item label="경고" hasFeedback validateStatus="warning">
      <TimePicker style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item label="오류" hasFeedback validateStatus="error">
      <DatePicker.RangePicker style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item label="오류" hasFeedback validateStatus="error">
      <Select
        allowClear
        placeholder="저는 Select 예요"
        defaultValue={'1'}
        options={[
          { label: '선택지 1', value: '1' },
          { label: '선택지 2', value: '2' },
          { label: '선택지 3', value: '3' },
        ]}
      />
    </Form.Item>

    <Form.Item
      label="확인하는 중"
      hasFeedback
      validateStatus="error"
      help="규칙에 어긋난 게 있어요."
    >
      <Cascader placeholder="저는 Cascader 예요" options={[{ value: 'xx', label: 'xx' }]} allowClear />
    </Form.Item>

    <Form.Item label="경고" hasFeedback validateStatus="warning" help="확인이 필요해요">
      <TreeSelect
        placeholder="저는 TreeSelect 예요"
        treeData={[{ value: 'xx', label: 'xx' }]}
        allowClear
      />
    </Form.Item>

    <Form.Item label="inline" style={{ marginBottom: 0 }}>
      <Form.Item
        validateStatus="error"
        help="올바른 날짜를 골라 주세요"
        style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
      >
        <DatePicker />
      </Form.Item>
      <span
        style={{ display: 'inline-block', width: '24px', lineHeight: '32px', textAlign: 'center' }}
      >
        -
      </span>
      <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
        <DatePicker />
      </Form.Item>
    </Form.Item>

    <Form.Item label="성공" hasFeedback validateStatus="success">
      <InputNumber style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item label="성공" hasFeedback validateStatus="success">
      <Input allowClear placeholder="allowClear 있음" />
    </Form.Item>

    <Form.Item label="경고" hasFeedback validateStatus="warning">
      <Input.Password placeholder="비밀번호 입력칸으로" />
    </Form.Item>

    <Form.Item label="오류" hasFeedback validateStatus="error">
      <Input.Password allowClear placeholder="비밀번호 입력칸 + allowClear" />
    </Form.Item>

    <Form.Item label="성공" hasFeedback validateStatus="success">
      <Input.OTP />
    </Form.Item>
    <Form.Item label="경고" hasFeedback validateStatus="warning">
      <Input.OTP />
    </Form.Item>

    <Form.Item label="오류" hasFeedback validateStatus="error">
      <Input.OTP />
    </Form.Item>

    <Form.Item label="실패" validateStatus="error" hasFeedback>
      <Mentions />
    </Form.Item>

    <Form.Item label="실패" validateStatus="error" hasFeedback help="뭐라도 있어야 해요">
      <Input.TextArea allowClear showCount />
    </Form.Item>
  </Form>
);

export default App;