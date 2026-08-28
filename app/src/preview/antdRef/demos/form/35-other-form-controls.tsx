// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/form.json 의 examples[35] ("Other Form Controls")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Col,
  ColorPicker,
  Form,
  InputNumber,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Space,
  Switch,
  Upload,
} from 'antd';

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const normFile = (e: any) => {
  console.log('올리기 이벤트:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const onFinish = (values: any) => {
  console.log('폼에서 받은 값: ', values);
};

const App: React.FC = () => (
  <Form
    name="validate_other"
    {...formItemLayout}
    onFinish={onFinish}
    initialValues={{
      'input-number': 3,
      'checkbox-group': ['A', 'B'],
      rate: 3.5,
      'color-picker': null,
    }}
    style={{ maxWidth: 600 }}
  >
    <Form.Item label="그냥 글">
      <span className="ant-form-text">한국</span>
    </Form.Item>
    <Form.Item
      name="select"
      label="고르기"
      hasFeedback
      rules={[{ required: true, message: '나라를 골라 주세요!' }]}
    >
      <Select
        placeholder="나라를 골라 주세요"
        options={[
          { label: '한국', value: 'china' },
          { label: '미국', value: 'usa' },
        ]}
      />
    </Form.Item>

    <Form.Item
      name="select-multiple"
      label="Select[multiple]"
      rules={[{ required: true, message: '좋아하는 색을 골라 주세요!', type: 'array' }]}
    >
      <Select
        mode="multiple"
        placeholder="좋아하는 색을 골라 주세요"
        options={[
          { label: '빨강', value: 'red' },
          { label: '초록', value: 'green' },
          { label: '파랑', value: 'blue' },
        ]}
      />
    </Form.Item>

    <Form.Item label="InputNumber">
      <Form.Item name="input-number" noStyle>
        <InputNumber min={1} max={10} />
      </Form.Item>
      <span className="ant-form-text" style={{ marginInlineStart: 8 }}>
        기계
      </span>
    </Form.Item>

    <Form.Item name="switch" label="Switch" valuePropName="checked">
      <Switch />
    </Form.Item>

    <Form.Item name="slider" label="Slider">
      <Slider
        marks={{
          0: 'A',
          20: 'B',
          40: 'C',
          60: 'D',
          80: 'E',
          100: 'F',
        }}
      />
    </Form.Item>

    <Form.Item name="radio-group" label="Radio.Group">
      <Radio.Group>
        <Radio value="a">항목 1</Radio>
        <Radio value="b">항목 2</Radio>
        <Radio value="c">항목 3</Radio>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="radio-button"
      label="Radio.Button"
      rules={[{ required: true, message: '항목을 골라 주세요!' }]}
    >
      <Radio.Group>
        <Radio.Button value="a">항목 1</Radio.Button>
        <Radio.Button value="b">항목 2</Radio.Button>
        <Radio.Button value="c">항목 3</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item name="checkbox-group" label="Checkbox.Group">
      <Checkbox.Group>
        <Row>
          <Col span={8}>
            <Checkbox value="A" style={{ lineHeight: '32px' }}>
              A
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="B" style={{ lineHeight: '32px' }} disabled>
              B
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="C" style={{ lineHeight: '32px' }}>
              C
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="D" style={{ lineHeight: '32px' }}>
              D
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="E" style={{ lineHeight: '32px' }}>
              E
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="F" style={{ lineHeight: '32px' }}>
              F
            </Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </Form.Item>

    <Form.Item name="rate" label="별점">
      <Rate />
    </Form.Item>

    <Form.Item
      name="upload"
      label="올리기"
      valuePropName="fileList"
      getValueFromEvent={normFile}
      extra="기이이이이이이이이이이이이이이이인 글"
    >
      <Upload name="로고" action="/upload.do" listType="picture">
        <Button icon={<UploadOutlined />}>눌러서 올리기</Button>
      </Upload>
    </Form.Item>
    <Form.Item label="끌기 손잡이">
      <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
        <Upload.Dragger name="files" action="/upload.do">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">파일을 눌러서 고르거나 여기로 끌어다 놓으세요</p>
          <p className="ant-upload-hint">하나씩도, 여러 개도 올릴 수 있어요.</p>
        </Upload.Dragger>
      </Form.Item>
    </Form.Item>
    <Form.Item
      name="color-picker"
      label="ColorPicker"
      rules={[{ required: true, message: '색은 꼭 필요해요!' }]}
    >
      <ColorPicker />
    </Form.Item>

    <Form.Item label={null}>
      <Space>
        <Button type="primary" htmlType="submit">
          보내기
        </Button>
        <Button htmlType="reset">reset</Button>
      </Space>
    </Form.Item>
  </Form>
);

export default App;