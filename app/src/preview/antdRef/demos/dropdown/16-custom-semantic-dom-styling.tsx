/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/dropdown.json 의 examples[16] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { DownOutlined, LogoutOutlined, SettingOutlined } from '../_icons';
import { Button, Dropdown, Flex, Space } from 'antd';
import type { DropdownProps, GetProp, MenuProps } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => ({
  root: {
    backgroundColor: token.colorFillAlter,
    border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
    borderRadius: token.borderRadius,
  },
}));

const items: MenuProps['items'] = [
  {
    key: '1',
    label: '프로필',
  },
  {
    key: '2',
    label: '설정',
    icon: <SettingOutlined />,
  },
  {
    type: 'divider',
  },
  {
    key: '3',
    label: '로그아웃',
    icon: <LogoutOutlined />,
    danger: true,
  },
];

const objectStyles: DropdownProps['styles'] = {
  root: {
    backgroundColor: '#fff',
    border: '1px solid #d9d9d9',
    borderRadius: '4px',
  },
  item: {
    padding: '8px 12px',
    fontSize: '14px',
  },
  itemTitle: {
    fontWeight: '500',
  },
  itemIcon: {
    color: '#1890ff',
    marginInlineEnd: '8px',
  },
  itemContent: {
    backgroundColor: 'transparent',
  },
};

const functionStyles: DropdownProps['styles'] = (
  info,
): GetProp<DropdownProps, 'styles', 'Return'> => {
  const { props } = info;
  const isClick = props.trigger?.includes('click');
  if (isClick) {
    return {
      root: {
        borderColor: '#1890ff',
        borderRadius: '8px',
      },
    };
  }
  return {};
};

const App: React.FC = () => {
  const { styles } = useStyles();

  const sharedProps: DropdownProps = {
    menu: { items },
    placement: 'bottomLeft',
    classNames: { root: styles.root },
  };

  return (
    <Flex gap="medium" wrap="wrap">
      <Space vertical size="large">
        <Dropdown {...sharedProps} styles={objectStyles}>
          <Button>
            <Space>
              객체 스타일
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>

        <Dropdown {...sharedProps} styles={functionStyles} trigger={['click']}>
          <Button type="primary">
            <Space>
              함수 스타일
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Space>
    </Flex>
  );
};

export default App;