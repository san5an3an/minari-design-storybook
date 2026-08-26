/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/border-beam.json 의 examples[6] ("Size")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
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