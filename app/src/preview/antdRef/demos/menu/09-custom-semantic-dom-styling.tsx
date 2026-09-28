// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/menu.json 의 examples[9] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Flex, Menu } from 'antd';
import type { GetProp, MenuProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => ({
  root: css`
    border: 1px solid #f0f0f0;
    max-width: 600px;
    padding: 8px;
    border-radius: 4px;
  `,
  item: css`
    color: #1677ff;
  `,
}));

const items: Required<MenuProps>['items'] = [
  {
    key: '하위 메뉴',
    label: '메뉴 하나',
    children: [
      {
        key: 'g1',
        label: '항목 1',
        type: 'group',
        children: [
          { key: '1', label: '선택지 1' },
          { key: '2', label: '선택지 2' },
        ],
      },
    ],
  },
  { key: 'mail', label: '메뉴 둘' },
];

const styles: MenuProps['styles'] = {
  root: { border: '1px solid #f0f0f0', padding: 8, borderRadius: 4 },
  item: { color: '#1677ff' },
  subMenu: { list: { color: '#fa541c' } },
};

const stylesFn: MenuProps['styles'] = (info): GetProp<MenuProps, 'styles', 'Return'> => {
  const hasSub = info.props.items?.[0];
  return {
    root: {
      backgroundColor: hasSub ? 'rgba(240,249,255, 0.6)' : 'rgba(255,255,255)',
    },
  };
};

const App: React.FC = () => {
  const shareProps: MenuProps = {
    classNames,
    items,
  };

  return (
    <Flex vertical gap="medium">
      <Menu {...shareProps} styles={styles} />
      <Menu mode="inline" {...shareProps} styles={stylesFn} />
    </Flex>
  );
};

export default App;