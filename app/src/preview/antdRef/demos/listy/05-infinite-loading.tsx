/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/listy.json 의 examples[5] ("Infinite loading")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Flex, Listy, Spin, Typography } from 'antd';

interface Item {
  id: number;
  content: string;
}

const PAGE_SIZE = 50;

const makePage = (offset: number) =>
  Array.from<any, Item>({ length: PAGE_SIZE }, (_, index) => ({
    id: offset + index,
    content: `항목 ${offset + index}`,
  }));

const App: React.FC = () => {
  const [items, setItems] = React.useState<Item[]>(() => makePage(0));
  const [loading, setLoading] = React.useState(false);
  const loadingRef = React.useRef(false);

  const onScroll: React.UIEventHandler<HTMLElement> = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop - clientHeight > 200 || loadingRef.current) {
      return;
    }
    loadingRef.current = true;
    setLoading(true);
    setTimeout(() => {
      setItems((prev) => [...prev, ...makePage(prev.length)]);
      loadingRef.current = false;
      setLoading(false);
    }, 600);
  };

  return (
    <Flex vertical gap="small">
      <Listy<Item>
        virtual items={items}
        rowKey="id"
        height={400}
        itemRender={(item) => item.content}
        onScroll={onScroll}
      />
      <Flex justify="center" align="center" style={{ height: 24 }}>
        {loading ? (
          <Spin size="small" />
        ) : (
          <Typography.Text type="secondary">{items.length} items loaded</Typography.Text>
        )}
      </Flex>
    </Flex>
  );
};

export default App;