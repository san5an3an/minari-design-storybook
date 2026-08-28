// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/list.json 의 examples[0] ("Simple list")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Divider, List, Typography } from 'antd';

const data = [
  '경주차가 불붙은 연료를 관중에게 뿌렸어요.',
  '일본 공주가 평민과 결혼해요.',
  '호주에서 사고 뒤 100km 를 걸어 나왔어요.',
  '결혼식에서 사라진 아이 사건으로 남성이 기소됐어요.',
  '로스앤젤레스가 큰 산불과 싸워요.',
];

const App: React.FC = () => (
  <>
    <Divider titlePlacement="start">기본 크기</Divider>
    <List
      header={<div>머리</div>}
      footer={<div>바닥</div>}
      bordered dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
    <Divider titlePlacement="start">작은 크기</Divider>
    <List
      size="small"
      header={<div>머리</div>}
      footer={<div>바닥</div>}
      bordered dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
    <Divider titlePlacement="start">큰 크기</Divider>
    <List
      size="large"
      header={<div>머리</div>}
      footer={<div>바닥</div>}
      bordered dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </>
);

export default App;