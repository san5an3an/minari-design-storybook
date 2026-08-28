// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/masonry.json 의 examples[3] ("Dynamic")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { CloseOutlined } from '../_icons';
import { Button, Card, Flex, Masonry, theme } from 'antd';

const heights = [150, 50, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 70, 50, 80];

type ItemType = {
  key: number;
  column?: number;
  data: number;
};

const Update: React.FC = () => {
  const { token } = theme.useToken();

  const [items, setItems] = useState<ItemType[]>(() =>
    heights.map((height, index) => ({
      key: index,
      column: index % 4,
      data: height,
    })),
  );

  const removeItem = (removeKey: React.Key) => {
    setItems((prevItems) => prevItems.filter(({ key }) => key !== removeKey));
  };

  const addItem = () => {
    setItems((prevItems) => [ ...prevItems,
      {
        key: prevItems.length ? prevItems[prevItems.length - 1].key + 1 : 0,
        data: Math.floor(Math.random() * 100) + 50,
      },
    ]);
  };

  return (
    <Flex vertical gap={16}>
      <Masonry
        columns={4}
        gutter={16}
        items={items}
        itemRender={({ data, key }) => (
          <Card size="small" style={{ height: data }}>
            {Number(key) + 1}
            <Button
              style={{
                position: 'absolute',
                insetBlockStart: token.paddingSM,
                insetInlineEnd: token.paddingSM,
              }}
              size="small"
              icon={<CloseOutlined />}
              onClick={() => removeItem(key)}
            />
          </Card>
        )}
        onLayoutChange={(sortedItems) => {
          setItems((prevItems) =>
            prevItems.map((item) => {
              const matchItem = sortedItems.find((sortedItem) => sortedItem.key === item.key);
              return matchItem
                ? {
                    ...item,
                    column: matchItem.column,
                  }
                : item;
            }),
          );
        }}
      />
      <Button block onClick={addItem}>
        항목 추가
      </Button>
    </Flex>
  );
};

export default Update;