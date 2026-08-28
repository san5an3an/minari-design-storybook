// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/typography.json 의 examples[9] ("Table")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

/**
 * Ref: https://github.com/ant-design/ant-design/issues/17125
 */
const App: React.FC = () => (
  <Typography>
    <Title level={4}>표가 있는 Typography</Title>

    <table>
      <thead>
        <tr>
          <th>요금제</th>
          <th>가격</th>
          <th>기능</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>기본</td>
          <td>무료</td>
          <td>1GB Storage, Basic Support</td>
        </tr>
        <tr>
          <td>프로</td>
          <td>월 $9.99</td>
          <td>100GB Storage, Priority Support</td>
        </tr>
        <tr>
          <td>기업</td>
          <td>문의하기</td>
          <td>무제한 저장 공간, 24시간 지원</td>
        </tr>
      </tbody>
    </table>
  </Typography>
);

export default App;