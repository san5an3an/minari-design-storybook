// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/skeleton.json 의 examples[6] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Flex, Skeleton } from 'antd';
import type { GetProp, SkeletonProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classnames = createStaticStyles(({ css }) => ({
  root: css`
    border-radius: 10px;
    padding: 12px;
  `,
  header: css`
    margin-bottom: 12px;
  `,
}));

const paragraphStyles = createStaticStyles(({ css }) => ({
  paragraph: css`
    & > li {
      background-color: rgba(229, 243, 254, 0.5);
    }
  `,
}));

const styles: SkeletonProps['styles'] = {
  avatar: {
    border: '1px solid #aaa',
  },
  title: {
    border: '1px solid #aaa',
  },
};

const stylesFn: SkeletonProps['styles'] = (info): GetProp<SkeletonProps, 'styles', 'Return'> => {
  if (info.props.active) {
    return {
      root: {
        border: '1px solid rgba(229, 243, 254, 0.3)',
      },
      title: {
        backgroundColor: 'rgba(229, 243, 254, 0.5)',
        height: 20,
        borderRadius: 20,
      },
    };
  }
  return {};
};

const App: React.FC = () => {
  return (
    <Flex gap="medium">
      <Skeleton classNames={classnames} styles={styles} avatar paragraph={false} />
      <Skeleton
        classNames={{ ...classnames, paragraph: paragraphStyles.paragraph }}
        styles={stylesFn}
        active
      />
    </Flex>
  );
};

export default App;