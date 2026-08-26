/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/anchor.json 의 examples[8] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Anchor, Col, Row } from 'antd';
import type { AnchorProps, GetProp } from 'antd';

const classNamesObject: AnchorProps['classNames'] = {
  root: 'demo-anchor-root',
  item: 'demo-anchor-item',
  itemTitle: 'demo-anchor-title',
  indicator: 'demo-anchor-indicator',
};

const stylesFn: AnchorProps['styles'] = (info): GetProp<AnchorProps, 'styles', 'Return'> => {
  if (info.props.direction === 'vertical') {
    return {
      root: {
        backgroundColor: 'rgba(255,251,230,0.5)',
        height: '100vh',
      },
    };
  }
  return {};
};

const items: NonNullable<AnchorProps['items']> = [
  {
    key: 'part-1',
    href: '#part-1',
    title: '1부',
  },
  {
    key: 'part-2',
    href: '#part-2',
    title: '2부',
  },
  {
    key: 'part-3',
    href: '#part-3',
    title: '3부',
  },
];

const App: React.FC = () => {
  return (
    <Row>
      <Col span={16}>
        <div id="part-1" style={{ height: '100vh', background: 'rgba(255,0,0,0.08)' }} />
        <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.08)' }} />
        <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.08)' }} />
      </Col>
      <Col span={8}>
        <Anchor replace items={items} styles={stylesFn} classNames={classNamesObject} />
      </Col>
    </Row>
  );
};

export default App;