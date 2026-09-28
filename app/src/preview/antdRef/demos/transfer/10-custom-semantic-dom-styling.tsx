// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/transfer.json 의 examples[10] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Flex, Transfer } from 'antd';
import type { GetProp, TransferProps } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  section: { backgroundColor: 'rgba(250,250,250, 0.5)' },
  header: { color: token.colorPrimary },
  actions: css`
    & button {
      background-color: rgba(255, 242, 232, 0.6);
    }
  `,
}));

const mockData = Array.from({ length: 20 }).map<any>((_, i) => ({
  key: i.toString(),
  title: `내용${i + 1}`,
  description: `내용${i + 1}의 설명`,
}));

const initialTargetKeys = mockData.filter((item) => Number(item.key) > 10).map((item) => item.key);

const stylesObject: TransferProps['styles'] = {
  header: { fontWeight: 'bold' },
};

const stylesFn: TransferProps['styles'] = (info): GetProp<TransferProps, 'styles', 'Return'> => {
  if (info.props.status === 'warning') {
    return {
      section: { backgroundColor: 'rgba(246,255,237, 0.6)', borderColor: '#b7eb8f' },
      header: { color: '#8DBCC7', fontWeight: 'normal' },
    };
  }
  return {};
};

const App: React.FC = () => {
  const { styles: classNames } = useStyles();
  const sharedProps: TransferProps = {
    dataSource: mockData,
    targetKeys: initialTargetKeys,
    render: (item) => item.title,
    classNames,
  };
  return (
    <Flex vertical gap="large" style={{ width: '100%' }}>
      <Transfer {...sharedProps} status="error" styles={stylesObject} />
      <Transfer {...sharedProps} status="warning" styles={stylesFn} />
    </Flex>
  );
};

export default App;