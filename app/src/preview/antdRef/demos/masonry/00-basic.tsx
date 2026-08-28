// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/masonry.json 의 examples[0] ("Basic")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Card, Masonry } from 'antd';
import type { MasonryProps } from 'antd';

type MasonryItemType = NonNullable<MasonryProps<number>['items']>[number];

const heights = [150, 50, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 60, 50, 80].map(
  (height, index) => {
    const item: MasonryItemType = {
      key: `item-${index}`,
      data: height,
    };

    if (index === 4) {
      item.children = (
        <Card
          size="small"
          cover={
            <img
              alt="음식"
              src="https://images.unsplash.com/photo-1491961865842-98f7befd1a60?w=523&auto=format"
            />
          }
        >
          <Card.Meta title="저는 특별해요" description="밥 먹으러 가요" />
        </Card>
      );
    }

    return item;
  },
);

const App: React.FC = () => (
  <Masonry
    columns={4}
    gutter={16}
    items={heights}
    itemRender={({ data, index }) => (
      <Card size="small" style={{ height: data }}>
        {index + 1}
      </Card>
    )}
  />
);

export default App;