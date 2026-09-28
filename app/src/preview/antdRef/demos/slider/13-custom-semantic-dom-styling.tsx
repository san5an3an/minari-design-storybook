// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/slider.json 의 examples[13] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Flex, Slider } from 'antd';
import type { SliderSingleProps } from 'antd';
import { createStyles } from 'antd-style';

const useHorizontalStyles = createStyles(({ css }) => ({
  root: css`
    width: 300px;
  `,
}));

const useVerticalStyles = createStyles(({ css, prefixCls, cssVar }) => ({
  root: css`
    width: 100px;
    &:hover {
      .${prefixCls}-slider-handle:after {
        box-shadow: 0 0 0 ${cssVar.lineWidthBold} #722ed1;
      }
    }
  `,
  handle: css`
    &.${prefixCls}-slider-handle:hover::after,
      &.${prefixCls}-slider-handle:active::after,
      &.${prefixCls}-slider-handle:focus::after,
      &.${prefixCls}-slider-handle::after {
      box-shadow: 0 0 0 ${cssVar.lineWidthBold} #722ed1;
    }
  `,
}));

const stylesObject: SliderSingleProps['styles'] = {
  track: { backgroundImage: 'linear-gradient(180deg, #91caff, #1677ff)' },
  handle: { borderColor: '#1677ff', boxShadow: '0 2px 8px #1677ff' },
};

const stylesFn: SliderSingleProps['styles'] = (info) => {
  if (info.props.orientation === 'vertical') {
    return {
      root: { height: 300 },
      track: { backgroundImage: 'linear-gradient(180deg, #722cc0, #722ed1)' },
      handle: { borderColor: '#722ed1', boxShadow: '0 2px 8px #722ed1' },
    };
  }
  return {};
};

const sharedProps: SliderSingleProps = {
  defaultValue: 30,
};

const App: React.FC = () => {
  const { styles: horizontalClassNames } = useHorizontalStyles();
  const { styles: verticalClassNames } = useVerticalStyles();
  return (
    <Flex vertical gap="medium">
      <Slider
        {...sharedProps}
        orientation="horizontal"
        classNames={horizontalClassNames}
        styles={stylesObject}
      />
      <Slider
        {...sharedProps}
        classNames={verticalClassNames}
        orientation="vertical"
        reverse
        styles={stylesFn}
      />
    </Flex>
  );
};

export default App;