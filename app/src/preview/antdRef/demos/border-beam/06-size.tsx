// @ts-nocheck
import React from 'react';
import { BorderBeam, Card, Tag, Typography } from 'antd';

const sizes: Array<{
  name: string;
  size?: number | string;
  bodyMinHeight: number;
  description: string;
  spanFull?: boolean;
}> = [
  {
    name: '기본값',
    bodyMinHeight: 112,
    description: '기본값인 100px 짜리 빛줄기를 써요.',
  },
  {
    name: '빽빽하게',
    size: 56,
    bodyMinHeight: 112,
    description: '빽빽한 카드 묶음에는 강조를 짧게 둬요.',
  },
  {
    name: '확장',
    size: 160,
    bodyMinHeight: 192,
    description: '넓은 기능 판에는 더 긴 강조를 만들어요.',
    spanFull: true,
  },
];

const App: React.FC = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: 32,
      maxWidth: 960,
    }}
  >
    {sizes.map(({ name, size, bodyMinHeight, description, spanFull }) => (
      <div key={name} style={{ gridColumn: spanFull ? '1 / -1' : undefined }}>
        <BorderBeam size={size}>
          <Card
            title={name}
            extra={<Tag variant="filled">{size ?? 100}px</Tag>}
            styles={{ body: { minHeight: bodyMinHeight, display: 'flex', alignItems: 'center' } }}
          >
            <Typography.Text type="secondary">{description}</Typography.Text>
          </Card>
        </BorderBeam>
      </div>
    ))}
  </div>
);

export default App;