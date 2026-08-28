// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/image.json 의 examples[10] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Flex, Image } from 'antd';
import type { GetProp, ImageProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => ({
  root: css`
    padding: 4px;
    border-radius: 8px;
    overflow: hidden;
  `,
}));

const styles: ImageProps['styles'] = {
  image: {
    borderRadius: '4px',
  },
};

const stylesFn: ImageProps['styles'] = (info): GetProp<ImageProps, 'styles', 'Return'> => {
  if (info.props.preview) {
    return {
      root: {
        border: '2px solid #A594F9',
        borderRadius: 8,
        padding: 4,
        transition: 'all 0.3s ease',
      },
      image: {
        borderRadius: 4,
        filter: 'grayscale(50%)',
      },
    };
  }
  return {};
};

const App: React.FC = () => {
  const sharedProps: ImageProps = {
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    width: 160,
    alt: '보기 이미지',
    classNames,
  };

  return (
    <Flex gap="medium">
      <Image {...sharedProps} styles={styles} />
      <Image {...sharedProps} styles={stylesFn} preview={{ open: false }} />
    </Flex>
  );
};

export default App;