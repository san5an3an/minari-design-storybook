/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/result.json 의 examples[8] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Button, Result } from 'antd';
import type { GetProp, ResultProps } from 'antd';

const classNamesObject: ResultProps['classNames'] = {
  root: 'demo-result-root',
  title: 'demo-result-title',
  subTitle: 'demo-result-subtitle',
  icon: 'demo-result-icon',
  extra: 'demo-result-extra',
  body: 'demo-result-body',
};

const classNamesFn: ResultProps['classNames'] = (
  info,
): GetProp<ResultProps, 'classNames', 'Return'> => {
  if (info.props.status === 'success') {
    return {
      root: 'demo-result-root--success',
    };
  }
  return {
    root: 'demo-result-root--default',
  };
};

const stylesObject: ResultProps['styles'] = {
  root: { borderWidth: 2, borderStyle: 'dashed', padding: 16 },
  title: { fontStyle: 'italic', color: '#1890ff' },
  subTitle: { fontWeight: 'bold' },
  icon: { opacity: 0.8 },
  extra: { backgroundColor: '#f0f0f0', padding: 8 },
  body: { backgroundColor: '#fafafa', padding: 12 },
};

const stylesFn: ResultProps['styles'] = (info): GetProp<ResultProps, 'styles', 'Return'> => {
  if (info.props.status === 'error') {
    return {
      root: { backgroundColor: '#fff2f0', borderColor: '#ff4d4f' },
      title: { color: '#ff4d4f' },
    };
  } else {
    return {
      root: { backgroundColor: '#f6ffed', borderColor: '#52c41a' },
      title: { color: '#52c41a' },
    };
  }
};

const App: React.FC = () => {
  return (
    <>
      <Result
        status="info"
        title="classNames 객체"
        subTitle="부제목이에요"
        styles={stylesObject}
        classNames={classNamesObject}
        extra={<Button type="primary">동작</Button>}
      >
        <div>내용 영역</div>
      </Result>
      <Result
        status="success"
        title="classNames 함수"
        subTitle="동적 클래스 이름"
        styles={stylesFn}
        classNames={classNamesFn}
        extra={<Button>동작</Button>}
      />
    </>
  );
};

export default App;