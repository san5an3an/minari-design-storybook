// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/pagination.json 의 examples[12] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Flex, Pagination } from 'antd';
import type { GetProp, PaginationProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => ({
  root: css`
    border: 2px dashed #ccc;
    padding: 8px;
  `,
}));

const styleFn: PaginationProps['styles'] = ({
  props,
}): GetProp<PaginationProps, 'styles', 'Return'> => {
  if (props.size === 'small') {
    return {
      item: {
        backgroundColor: `rgba(200, 200, 200, 0.3)`,
        marginInlineEnd: 4,
      },
    };
  }
  return {};
};

const App: React.FC = () => {
  const paginationSharedProps: PaginationProps = {
    total: 500,
    classNames: { root: classNames.root },
  };

  return (
    <Flex vertical gap="medium">
      <Pagination {...paginationSharedProps} styles={{ item: { borderRadius: 999 } }} />
      <Pagination {...paginationSharedProps} size="small" styles={styleFn} />
    </Flex>
  );
};

export default App;