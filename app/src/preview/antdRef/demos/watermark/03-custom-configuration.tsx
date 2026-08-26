/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/watermark.json 의 examples[3] ("Custom configuration")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { ColorPicker, Flex, Form, Input, InputNumber, Slider, Typography, Watermark } from 'antd';
import type { ColorPickerProps, GetProp, WatermarkProps } from 'antd';

type Color = Extract<GetProp<ColorPickerProps, 'value'>, string | { cleared: any }>;

const { Paragraph } = Typography;

interface WatermarkConfig {
  content: string;
  color: string | Color;
  fontSize: number;
  zIndex: number;
  rotate: number;
  gap: [number, number];
  offset?: [number, number];
}

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [config, setConfig] = useState<WatermarkConfig>({
    content: 'Ant Design',
    color: 'rgba(0, 0, 0, 0.15)',
    fontSize: 16,
    zIndex: 11,
    rotate: -22,
    gap: [100, 100],
    offset: undefined,
  });
  const { content, color, fontSize, zIndex, rotate, gap, offset } = config;

  const watermarkProps: WatermarkProps = {
    content,
    zIndex,
    rotate,
    gap,
    offset,
    font: { color: typeof color === 'string' ? color : color.toRgbString(), fontSize },
  };

  return (
    <Flex gap="medium">
      <Watermark {...watermarkProps}>
        <Typography>
          <Paragraph>
            디지털 세상이 빛처럼 빨리 바뀌면서 제품은 점점 복잡해져요. 그런데 사람의 의식과 주의력은 한정돼 있어요. 이 어긋남 앞에서 자연스러운 상호작용을 좇는 것이 Ant Design 이 늘 향하는 방향이에요.
          </Paragraph>
          <Paragraph>
            자연스러운 사용자 인지: 인지심리학에 따르면 바깥 정보의 약 80%가 눈을 통해 들어와요. 화면 설계에서 가장 중요한 요소인 배치·색·삽화·아이콘 따위는 자연의 규칙을 충분히 받아들여야 해요. 그래야 알아차리는 데 드는 힘이 줄고, 보는 사람이 자연스럽고 매끄럽다고 느껴요. 어떤 자리에서는 소리나 촉감 같은 다른 감각을 알맞게 더해 더 풍성하고 자연스러운 경험을 만들 수도 있어요.
          </Paragraph>
          <Paragraph>
            자연스러운 사용자 행동: 시스템과 주고받는 동안 디자이너는 사용자가 무엇을 하려는지, 어떤 습관을 갖고 있는지 충분히 알아야 해요. 그래야 배우는 데 드는 힘을 줄이고, 하려던 일에 곧바로 닿게 할 수 있어요.
          </Paragraph>
        </Typography>
        <img
          draggable={false}
          style={{ zIndex: 10, width: '100%', maxWidth: 800, position: 'relative' }}
          src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ"
          alt="img"
        />
      </Watermark>
      <Form
        style={{
          width: 280,
          flexShrink: 0,
          borderInlineStart: '1px solid #eee',
          paddingInlineStart: 16,
        }}
        form={form}
        layout="vertical"
        initialValues={config}
        onValuesChange={(_, values) => {
          setConfig(values);
        }}
      >
        <Form.Item name="content" label="내용">
          <Input placeholder="넣어 주세요" />
        </Form.Item>
        <Form.Item name="color" label="색">
          <ColorPicker />
        </Form.Item>
        <Form.Item name="fontSize" label="FontSize">
          <Slider step={1} min={1} max={100} />
        </Form.Item>
        <Form.Item name="zIndex" label="zIndex">
          <Slider step={1} min={0} max={100} />
        </Form.Item>
        <Form.Item name="rotate" label="돌리기">
          <Slider step={1} min={-180} max={180} />
        </Form.Item>
        <Form.Item label="간격" style={{ marginBottom: 0 }}>
          <Flex gap="small">
            <Form.Item name={['gap', 0]}>
              <InputNumber placeholder="gapX" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name={['gap', 1]}>
              <InputNumber placeholder="gapY" style={{ width: '100%' }} />
            </Form.Item>
          </Flex>
        </Form.Item>
        <Form.Item label="치우침" style={{ marginBottom: 0 }}>
          <Flex gap="small">
            <Form.Item name={['offset', 0]}>
              <InputNumber placeholder="offsetLeft" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name={['offset', 1]}>
              <InputNumber placeholder="offsetTop" style={{ width: '100%' }} />
            </Form.Item>
          </Flex>
        </Form.Item>
      </Form>
    </Flex>
  );
};

export default App;