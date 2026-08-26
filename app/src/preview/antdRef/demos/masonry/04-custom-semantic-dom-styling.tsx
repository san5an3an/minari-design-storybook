/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/masonry.json 의 examples[4] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Card, Divider, Flex, Masonry, Typography } from 'antd';
import type { GetProp, MasonryProps } from 'antd';
import { createStaticStyles } from 'antd-style';
import type { MasonryItemType } from 'antd/es/masonry/MasonryItem';

const { Title } = Typography;

const classNames = createStaticStyles(({ css }) => ({
  root: css`
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    padding: 16px;
    height: 260px;
    background-color: #fafafa;
  `,
  item: css`
    transform: scale(0.98);
    transition: transform 0.2s ease;
    border-radius: 12px;
    border: 1px solid #ccc;
    overflow: hidden;
  `,
}));

const items = [120, 80, 100, 60, 140, 90, 110, 70].map<MasonryItemType<number>>(
  (height, index) => ({
    key: `item-${index}`,
    data: height,
  }),
);

const styles: MasonryProps['styles'] = {
  root: {
    borderRadius: 12,
    padding: 20,
    height: 260,
    backgroundColor: 'rgba(250,250,250,0.5)',
  },
  item: {
    transform: 'scale(0.98)',
    transition: 'transform 0.2s ease',
    border: '1px solid #ccc',
  },
};

const stylesFn: MasonryProps['styles'] = (info): GetProp<MasonryProps, 'styles', 'Return'> => {
  const { props } = info;
  return {
    root: {
      border: `2px solid ${typeof props.columns === 'number' && props.columns > 2 ? '#1890ff' : '#52c41a'}`,
      padding: 20,
      height: 280,
      backgroundColor: 'rgba(240,248,255,.6)',
    },
    item: {
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: '1px solid #1890ff',
    },
  };
};

const App: React.FC = () => {
  const sharedProps: MasonryProps = {
    classNames,
    itemRender: ({ data, index }) => (
      <Card size="small" style={{ height: data }}>
        {index + 1}
      </Card>
    ),
  };
  return (
    <Flex vertical gap={24}>
      <div>
        <Title level={4}>classNames·styles 객체</Title>
        <Masonry columns={4} gutter={16} items={items} {...sharedProps} styles={styles} />
      </div>
      <Divider />
      <div>
        <Title level={4}>classNames·styles 함수</Title>
        <Masonry
          columns={3}
          gutter={12}
          items={items.slice(0, 6)}
          {...sharedProps}
          styles={stylesFn}
        />
      </div>
    </Flex>
  );
};

export default App;