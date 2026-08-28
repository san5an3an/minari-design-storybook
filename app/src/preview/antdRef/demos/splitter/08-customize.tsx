// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/splitter.json 의 examples[8] ("Customize")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import {
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  CaretUpOutlined,
  ColumnWidthOutlined,
} from '../_icons';
import { ConfigProvider, Divider, Flex, Splitter, Typography } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => ({
  dragger: {
    '&::before': {
      backgroundColor: 'transparent !important',
      border: `${token.lineWidth}px dashed ${token.controlItemBgHover}`,
    },
    '&:hover::before': {
      border: `${token.lineWidth}px dashed ${token.colorPrimary}`,
    },
  },
  draggerActive: {
    '&::before': {
      border: `${token.lineWidth}px dashed ${token.colorPrimary}`,
    },
  },
  draggerIcon: {
    '&:hover': {
      color: token.colorPrimary,
    },
  },
  collapsibleIcon: {
    fontSize: token.fontSizeLG,
    color: token.colorTextDescription,

    '&:hover': {
      color: token.colorPrimary,
    },
  },
}));

const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
  <Flex justify="center" align="center" style={{ height: '100%' }}>
    <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
      {props.text}
    </Typography.Title>
  </Flex>
);

const App: React.FC = () => {
  const { styles } = useStyles();

  return (
    <ConfigProvider
      theme={{
        components: {
          Splitter: { splitBarSize: 1, splitTriggerSize: 16 },
        },
      }}
    >
      <Splitter
        style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
        draggerIcon={<ColumnWidthOutlined className={styles.draggerIcon} />}
        collapsible={{
          icon: {
            start: <CaretLeftOutlined className={styles.collapsibleIcon} />, end: <CaretRightOutlined className={styles.collapsibleIcon} />,
          },
        }}
      >
        <Splitter.Panel defaultSize="40%" min="20%" max="70%" collapsible>
          <Desc text="판 1" />
        </Splitter.Panel>

        <Splitter.Panel collapsible>
          <Desc text="판 2" />
        </Splitter.Panel>

        <Splitter.Panel resizable={false}>
          <Desc text="판 3" />
        </Splitter.Panel>
      </Splitter>

      <Divider />

      <Splitter
        orientation="vertical"
        classNames={{ dragger: { default: styles.dragger, active: styles.draggerActive } }}
        style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
        draggerIcon={null}
        collapsible={{
          icon: {
            start: <CaretUpOutlined className={styles.collapsibleIcon} />, end: <CaretDownOutlined className={styles.collapsibleIcon} />,
          },
        }}
      >
        <Splitter.Panel defaultSize="40%" min="30%" max="70%" collapsible>
          <Desc text="첫째" />
        </Splitter.Panel>

        <Splitter.Panel collapsible>
          <Desc text="둘째" />
        </Splitter.Panel>
      </Splitter>
    </ConfigProvider>
  );
};

export default App;