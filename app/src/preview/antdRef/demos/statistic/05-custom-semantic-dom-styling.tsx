// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/statistic.json 의 examples[5] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { ArrowUpOutlined } from '../_icons';
import { Flex, Statistic } from 'antd';
import type { GetProp, StatisticProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => ({
  root: css`
    border: 2px dashed #ccc;
    padding: 16px;
    border-radius: 8px;
  `,
}));

const styleFn: StatisticProps['styles'] = ({
  props,
}): GetProp<StatisticProps, 'styles', 'Return'> => {
  const numValue = Number(props.value ?? 0);
  const isNegative = Number.isFinite(numValue) && numValue < 0;
  if (isNegative) {
    return {
      title: {
        color: '#ff4d4f',
      }, content: {
        color: '#ff7875',
      },
      value: {
        backgroundColor: '#fff1f0',
        borderRadius: 4,
        paddingInline: 6,
        userSelect: 'none',
      },
    };
  }
  return {};
};

const Demo: React.FC = () => {
  const statisticSharedProps: StatisticProps = {
    classNames: { root: classNames.root },
    prefix: <ArrowUpOutlined />,
  };
  return (
    <Flex vertical gap="medium">
      <Statistic
        {...statisticSharedProps}
        title="월간 활성 사용자"
        value={93241}
        styles={{
          title: { color: '#1890ff', fontWeight: 600 }, content: { fontSize: '24px' },
          value: {
            backgroundColor: '#e6f4ff',
            borderRadius: 4,
            color: '#0958d9',
            paddingInline: 6,
            userSelect: 'none',
          },
        }}
        suffix="users"
      />
      <Statistic
        {...statisticSharedProps}
        title="연간 손실"
        value={-18.7}
        precision={1}
        styles={styleFn}
        suffix="%"
      />
    </Flex>
  );
};

export default Demo;