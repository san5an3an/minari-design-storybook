// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/switch.json 의 examples[5] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Flex, Switch } from 'antd';
import type { GetProp, SwitchProps } from 'antd';
import { createStyles } from 'antd-style';

const useStyle = createStyles((props) => {
  const { cssVar, prefixCls, css } = props;
  return {
    root: css`
      width: 40px;
      background-color: ${cssVar.colorPrimary};
    `,
    muiRoot: css`
      min-width: 32px;
      height: 14px;
      line-height: 14px;
      &&.${prefixCls}-switch-checked {
        background-color: rgba(25, 118, 210, 0.5);
        .${prefixCls}-switch-handle {
          inset-inline-start: calc(100% - 17px);
        }
      }
    `,
    muiIndicator: css`
      top: -3px;
      width: 20px;
      height: 20px;
      &&& {
        inset-inline-start: -3px;
      }
      &&&::before {
        background-color: rgb(25, 118, 210);
        border-radius: 999px;
        box-shadow:
          rgba(0, 0, 0, 0.2) 0 2px 1px -1px,
          rgba(0, 0, 0, 0.14) 0 1px 1px 0,
          rgba(0, 0, 0, 0.12) 0 1px 4px 0;
      }
    `,
  };
});

const stylesObject: SwitchProps['styles'] = {
  root: {
    backgroundColor: '#F5D2D2',
  },
};

const stylesFn: SwitchProps['styles'] = (info): GetProp<SwitchProps, 'styles', 'Return'> => {
  if (info.props.size === 'medium') {
    return {
      root: {
        backgroundColor: '#BDE3C3',
      },
    };
  }
  return {};
};

const Demo: React.FC = () => {
  const { styles: classNames } = useStyle();
  return (
    <Flex vertical align="flex-start" justify="flex-start" gap="medium">
      <Switch
        size="small"
        checkedChildren="on"
        unCheckedChildren="off"
        styles={stylesObject}
        classNames={{ root: classNames.root }}
      />
      <Switch
        size="medium"
        checkedChildren="on"
        unCheckedChildren="off"
        styles={stylesFn}
        classNames={classNames}
      />
      <Switch
        defaultChecked
        classNames={{ root: classNames.muiRoot, indicator: classNames.muiIndicator }}
      />
    </Flex>
  );
};

export default Demo;