import React from 'react';
import { BorderBeam, Card, Flex, Segmented, Tag, Typography } from 'antd';
import type { BorderBeamGradient } from 'antd';

const presets: Array<{
  key: string;
  name: string;
  usage: string;
  description: string;
  color: BorderBeamGradient;
}> = [
  {
    key: 'ocean',
    name: '바다',
    usage: '대시보드',
    description: '데이터 화면과 클라우드 도구에 잘 맞는 차분한 청록 강조색이에요.',
    color: [
      { color: '#1677ff', percent: 0 },
      { color: '#36cfc9', percent: 52 },
      { color: '#95de64', percent: 100 },
    ],
  },
  {
    key: 'sunset',
    name: '노을',
    usage: '업그레이드',
    description: '업그레이드 안내, 추천 카드, 마케팅 블록에 쓰는 따뜻한 강조색이에요.',
    color: [
      { color: '#ff7a45', percent: 0 },
      { color: '#ff4d4f', percent: 49 },
      { color: '#ff85c0', percent: 100 },
    ],
  },
  {
    key: 'aurora',
    name: '오로라',
    usage: 'AI',
    description:
      'AI 도우미, 코파일럿, 자동화 판에 어울리는 선명하고 서늘한 빛줄기예요.',
    color: [
      { color: '#7c3aed', percent: 0 },
      { color: '#06b6d4', percent: 57 },
      { color: '#67e8f9', percent: 100 },
    ],
  },
  {
    key: 'forest',
    name: '숲',
    usage: '추천',
    description:
      '추천이나 성장 이야기를 담는 카드에 어울리는 밝고 자연스러운 색이에요.',
    color: [
      { color: '#22c55e', percent: 0 },
      { color: '#a3e635', percent: 54 },
      { color: '#facc15', percent: 100 },
    ],
  },
  {
    key: 'ember',
    name: '엠버',
    usage: '알림',
    description: '중요한 알림, 출시 카드, 급한 흐름에 쓰는 뜨거운 그러데이션이에요.',
    color: [
      { color: '#fa541c', percent: 0 },
      { color: '#ff7875', percent: 46 },
      { color: '#ffd666', percent: 100 },
    ],
  },
  {
    key: 'nebula',
    name: '네뷸라',
    usage: '연구소',
    description: '실험적인 모듈이나 제품 실험실 화면에 어울리는 서늘한 보라·분홍 조합이에요.',
    color: [
      { color: '#2f54eb', percent: 0 },
      { color: '#722ed1', percent: 44 },
      { color: '#ff85c0', percent: 100 },
    ],
  },
];

const defaultPresetKey = presets[0].key;

const App: React.FC = () => {
  const [currentPresetKey, setCurrentPresetKey] = React.useState(defaultPresetKey);
  const currentPreset = presets.find((preset) => preset.key === currentPresetKey) ?? presets[0];

  return (
    <Flex vertical gap={16} style={{ maxWidth: 480 }}>
      <Segmented
        block
        options={presets.map((preset) => ({
          label: preset.name,
          value: preset.key,
        }))}
        value={currentPresetKey}
        onChange={(value) => setCurrentPresetKey(value as string)}
      />
      <BorderBeam color={currentPreset.color}>
        <Card
          title={currentPreset.name}
          extra={<Tag variant="filled">{currentPreset.usage}</Tag>}
          styles={{
            body: {
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            },
          }}
        >
          <Typography.Text type="secondary">{currentPreset.description}</Typography.Text>
          <Flex gap={8} wrap>
            {currentPreset.color.map((item) => (
              <Tag key={`${item.color}-${item.percent}`} color={item.color} variant="filled">
                {item.color} · {item.percent}%
              </Tag>
            ))}
          </Flex>
          <Typography.Text type="secondary">
            멈춤 자리는 0~100 범위를 그대로 써요.
          </Typography.Text>
        </Card>
      </BorderBeam>
    </Flex>
  );
};

export default App;