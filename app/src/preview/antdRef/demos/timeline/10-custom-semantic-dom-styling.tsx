/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/timeline.json 의 examples[10] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Flex, Timeline } from 'antd';
import type { GetProp, TimelineProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => ({
  root: css`
    padding: 8px;
    border-radius: 4px;
  `,
}));

const styles: TimelineProps['styles'] = {
  itemIcon: {
    borderColor: '#1890ff',
  },
};

const stylesFn: TimelineProps['styles'] = (info): GetProp<TimelineProps, 'styles', 'Return'> => {
  if (info.props.orientation === 'vertical') {
    return {
      root: {
        padding: '10px 6px',
        border: '1px solid #A294F9',
      },
      itemIcon: {
        borderColor: '#A294F9',
      },
    };
  }
  return {};
};

const App: React.FC = () => {
  const sharedProps: TimelineProps = {
    classNames,
    items: [
      {
        title: '2015-09-01',
        content: '서비스 사이트 만들기',
      },
      {
        title: '2015-09-01 09:12:11',
        content: '초기 네트워크 문제 해결',
      },
      {
        content: '기술 테스트',
      },
    ],
  };

  return (
    <Flex vertical gap="medium">
      <Timeline {...sharedProps} orientation="horizontal" styles={styles} />
      <Timeline {...sharedProps} orientation="vertical" styles={stylesFn} />
    </Flex>
  );
};

export default App;