// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/auto-complete.json 의 examples[4] ("Lookup-Patterns - Certain Category")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { AutoComplete, Flex, Input } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles((props) => {
  const { css, prefixCls, cssVar } = props;
  return {
    categorySearch: css`
      .${prefixCls}-select-dropdown-menu-item-group-title {
        color: #666;
        font-weight: ${cssVar.fontWeightStrong};
      }
      .${prefixCls}-select-dropdown-menu-item-group {
        border-bottom: ${cssVar.lineWidth} ${cssVar.lineType} #f6f6f6;
      }
      .${prefixCls}-select-dropdown-menu-item {
        padding-inline-start: ${cssVar.padding};
      }
      .${prefixCls}-select-dropdown-menu-item.show-all {
        text-align: center;
        cursor: default;
      }
      .${prefixCls}-select-dropdown-menu {
        max-height: 300px;
      }
    `,
  };
});

const Title: React.FC<Readonly<{ title?: string }>> = (props) => (
  <Flex align="center" justify="space-between">
    {props.title}
    <a href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
      더 보기
    </a>
  </Flex>
);

const renderItem = (title: string, count: number) => ({
  value: title,
  label: (
    <Flex align="center" justify="space-between">
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </Flex>
  ),
});

const options = [
  {
    label: <Title title="라이브러리" />,
    options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
  },
  {
    label: <Title title="해결책" />,
    options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
  },
  {
    label: <Title title="글" />,
    options: [renderItem('AntDesign 디자인 언어', 100000)],
  },
];

const App: React.FC = () => {
  const { styles } = useStyles();
  return (
    <AutoComplete
      classNames={{ popup: { root: styles.categorySearch } }}
      popupMatchSelectWidth={500}
      style={{ width: 250 }}
      options={options}
    >
      <Input.Search size="large" placeholder="여기에 입력해 주세요" />
    </AutoComplete>
  );
};

export default App;