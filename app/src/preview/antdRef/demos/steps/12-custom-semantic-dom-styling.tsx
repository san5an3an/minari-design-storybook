/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/steps.json 의 examples[12] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Flex, Steps } from 'antd';
import type { GetProp, StepsProps } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => ({
  root: {
    border: `2px dashed ${token.colorBorder}`,
    borderRadius: token.borderRadius,
    padding: token.padding,
  },
}));

const stylesObject: StepsProps['styles'] = {
  itemIcon: { borderRadius: '30%' },
  itemContent: { fontStyle: 'italic' },
};

const stylesFn: StepsProps['styles'] = (info): GetProp<StepsProps, 'styles', 'Return'> => {
  if (info.props.type === 'navigation') {
    return {
      root: {
        borderColor: '#1890ff',
      },
    };
  }
  return {};
};

const App: React.FC = () => {
  const { styles } = useStyles();

  const sharedProps: StepsProps = {
    items: [
      { title: '끝남', content: '내용이 들어가는 자리예요.' },
      { title: '진행 중', content: '내용이 들어가는 자리예요.' },
      { title: '기다리는 중', content: '내용이 들어가는 자리예요.' },
    ],
    current: 1,
    classNames: { root: styles.root },
  };

  return (
    <Flex vertical gap="medium">
      <Steps {...sharedProps} styles={stylesObject} />
      <Steps {...sharedProps} styles={stylesFn} type="navigation" />
    </Flex>
  );
};

export default App;