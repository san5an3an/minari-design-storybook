/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/card.json 의 examples[7] ("Inner card")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Card } from 'antd';

const App: React.FC = () => (
  <Card title="카드 제목">
    <Card type="inner" title="안쪽 카드 제목" extra={<a href="#">더 보기</a>}>
      안쪽 카드 내용
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="안쪽 카드 제목"
      extra={<a href="#">더 보기</a>}
    >
      안쪽 카드 내용
    </Card>
  </Card>
);

export default App;