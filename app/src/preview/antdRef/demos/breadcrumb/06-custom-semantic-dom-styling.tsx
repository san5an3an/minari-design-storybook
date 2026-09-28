// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/breadcrumb.json 의 examples[6] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Breadcrumb, Flex } from 'antd';
import type { BreadcrumbProps, GetProp } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => ({
  root: css`
    padding: 8px;
    border-radius: 4px;
  `,
  item: css`
    color: #1890ff;
  `,
  separator: css`
    color: rgba(0, 0, 0, 0.45);
  `,
}));

const styles: BreadcrumbProps['styles'] = {
  root: { border: '1px solid #f0f0f0', padding: 8, borderRadius: 4 },
  item: { color: '#1890ff' },
  separator: { color: 'rgba(0, 0, 0, 0.45)' },
};

const stylesFn: BreadcrumbProps['styles'] = (
  info,
): GetProp<BreadcrumbProps, 'styles', 'Return'> => {
  const items = info.props.items || [];
  if (items.length > 2) {
    return {
      root: { border: '1px solid #F5EFFF', padding: 8, borderRadius: 4 },
      item: { color: '#8F87F1' },
    };
  }
  return {};
};

const items = [
  { title: 'Ant Design' },
  { title: <a href="">컴포넌트</a> },
  { title: 'Breadcrumb' },
];

const App: React.FC = () => {
  return (
    <Flex vertical gap="medium">
      <Breadcrumb
        classNames={classNames}
        items={items.slice(0, 2)}
        styles={styles}
        aria-label="Breadcrumb (객체)"
      />
      <Breadcrumb
        classNames={classNames}
        items={items}
        styles={stylesFn}
        aria-label="Breadcrumb (함수)"
      />
    </Flex>
  );
};

export default App;