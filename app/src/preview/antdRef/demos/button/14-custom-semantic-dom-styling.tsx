// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/button.json 의 examples[14] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Button, Flex } from 'antd';
import type { ButtonProps, GetProp } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ cssVar }) => ({
  root: {
    border: `${cssVar.lineWidth} ${cssVar.lineType} ${cssVar.colorBorder}`,
    borderRadius: cssVar.borderRadius,
    padding: `${cssVar.paddingXS} ${cssVar.padding}`,
    height: 'auto',
  }, content: {
    color: cssVar.colorText,
  },
}));

const stylesObject: ButtonProps['styles'] = {
  root: {
    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
  },
};

const stylesFn: ButtonProps['styles'] = (info): GetProp<ButtonProps, 'styles', 'Return'> => {
  if (info.props.type === 'primary') {
    return {
      root: {
        backgroundColor: '#171717',
      }, content: {
        color: '#fff',
      },
    };
  }
  return {};
};

const App: React.FC = () => {
  const { styles: classNames } = useStyles();
  return (
    <Flex gap="small">
      <Button type="default" classNames={classNames} styles={stylesObject}>
        객체
      </Button>
      <Button type="primary" classNames={classNames} styles={stylesFn}>
        함수
      </Button>
    </Flex>
  );
};

export default App;