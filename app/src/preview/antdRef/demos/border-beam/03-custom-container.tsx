// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/border-beam.json 의 examples[3] ("Custom container")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { BorderBeam } from 'antd';

const panelStyle: React.CSSProperties = {
  position: 'relative',
  width: 420,
  background: '#fff',
  border: '1px solid #f0f0f0',
  borderRadius: 8,
};

const contentStyle: React.CSSProperties = {
  minHeight: 160,
  padding: 24,
  color: 'rgba(0, 0, 0, 0.88)',
  lineHeight: 1.5715,
};

const App: React.FC = () => (
  <BorderBeam>
    <div style={panelStyle}>
      <div style={contentStyle}>
        작업 상태, 배포 상태, 최근 자동화 활동을 직접 만든 상자 하나에서 봐요.
      </div>
    </div>
  </BorderBeam>
);

export default App;