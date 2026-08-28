// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/tag.json 의 examples[8] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Flex, Space, Tag } from 'antd';
import type { GetProp, GetProps, TagProps } from 'antd';
import { createStaticStyles } from 'antd-style';

type CheckableTagGroupProps = GetProps<typeof Tag.CheckableTagGroup>;

const classNames = createStaticStyles(({ css }) => ({
  root: css`
    padding: 2px 6px;
    border-radius: 4px;
  `,
}));

const styles: TagProps['styles'] = {
  root: {
    backgroundColor: '#e6f7ff',
  },
  icon: {
    color: '#52c41a',
  }, content: {
    color: '#262626',
  },
};

const stylesFn: TagProps['styles'] = (info): GetProp<TagProps, 'styles', 'Return'> => {
  if (info.props.variant === 'filled') {
    return {
      root: {
        backgroundColor: '#F5EFFF',
      },
      icon: {
        color: '#8F87F1',
      }, content: {
        color: '#8F87F1',
      },
    };
  }
};

const groupStyles: CheckableTagGroupProps['styles'] = {
  root: {
    gap: 12,
    padding: '8px 12px',
    backgroundColor: 'rgba(82, 196, 26, 0.08)',
    borderRadius: 8,
  },
  item: {
    backgroundColor: 'rgba(82, 196, 26, 0.1)',
    borderColor: 'rgba(82, 196, 26, 0.3)',
    color: '#52c41a',
  },
};

const groupStylesFn: CheckableTagGroupProps['styles'] = (
  info,
): GetProp<CheckableTagGroupProps, 'styles', 'Return'> => {
  const { multiple } = info.props;
  if (multiple) {
    return {
      root: {
        gap: 16,
        padding: '8px 12px',
        backgroundColor: 'rgba(143, 135, 241, 0.08)',
        borderRadius: 8,
      },
      item: {
        backgroundColor: 'rgba(143, 135, 241, 0.1)',
        borderColor: 'rgba(143, 135, 241, 0.3)',
        color: '#8F87F1',
        fontWeight: 500,
      },
    };
  }
  return {};
};

const App: React.FC = () => {
  return (
    <Space size="large" vertical>
      <Flex gap="medium">
        <Tag classNames={classNames} styles={styles} icon={<CheckCircleOutlined />}>
          객체
        </Tag>
        <Tag
          variant="filled"
          classNames={classNames}
          styles={stylesFn}
          icon={<CloseCircleOutlined />}
        >
          함수
        </Tag>
      </Flex>
      <Flex vertical gap="medium">
        <Tag.CheckableTagGroup
          classNames={classNames}
          styles={groupStyles}
          options={['React', 'Vue', 'Angular']}
        />
        <Tag.CheckableTagGroup
          classNames={classNames}
          styles={groupStylesFn}
          options={['학생 만나기', 'thinkasany']}
          multiple
        />
      </Flex>
    </Space>
  );
};

export default App;