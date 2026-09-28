// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/color-picker.json 의 examples[10] ("Color Format")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { ColorPicker, Space } from 'antd';
import type { ColorPickerProps, GetProp } from 'antd';

type Color = Extract<GetProp<ColorPickerProps, 'value'>, string | { cleared: any }>;
type Format = GetProp<ColorPickerProps, 'format'>;

const HexCase: React.FC = () => {
  const [colorHex, setColorHex] = useState<Color>('#1677ff');
  const [formatHex, setFormatHex] = useState<Format | undefined>('hex');

  const hexString = React.useMemo<string>(
    () => (typeof colorHex === 'string' ? colorHex : colorHex?.toHexString()),
    [colorHex],
  );

  return (
    <Space>
      <ColorPicker
        format={formatHex}
        value={colorHex}
        onChange={setColorHex}
        onFormatChange={setFormatHex}
      />
      <span>HEX: {hexString}</span>
    </Space>
  );
};

const HsbCase: React.FC = () => {
  const [colorHsb, setColorHsb] = useState<Color>('hsb(215, 91%, 100%)');
  const [formatHsb, setFormatHsb] = useState<ColorPickerProps['format']>('hsb');

  const hsbString = React.useMemo(
    () => (typeof colorHsb === 'string' ? colorHsb : colorHsb?.toHsbString()),
    [colorHsb],
  );

  return (
    <Space>
      <ColorPicker
        format={formatHsb}
        value={colorHsb}
        onChange={setColorHsb}
        onFormatChange={setFormatHsb}
      />
      <span>HSB: {hsbString}</span>
    </Space>
  );
};

const RgbCase: React.FC = () => {
  const [colorRgb, setColorRgb] = useState<Color>('rgb(22, 119, 255)');
  const [formatRgb, setFormatRgb] = useState<ColorPickerProps['format']>('rgb');

  const rgbString = React.useMemo(
    () => (typeof colorRgb === 'string' ? colorRgb : colorRgb?.toRgbString()),
    [colorRgb],
  );

  return (
    <Space>
      <ColorPicker
        format={formatRgb}
        value={colorRgb}
        onChange={setColorRgb}
        onFormatChange={setFormatRgb}
      />
      <span>RGB: {rgbString}</span>
    </Space>
  );
};

const Demo: React.FC = () => (
  <Space vertical size="medium" style={{ display: 'flex' }}>
    <HexCase />
    <HsbCase />
    <RgbCase />
  </Space>
);

export default Demo;