/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/tooltip.json 의 examples[7] ("Wrap custom component")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Tooltip } from 'antd';

const ComponentWithEvents = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => (
    <span ref={ref} {...props}>
      필요한 이벤트를 열어 둔 컴포넌트 안의 글이에요.
    </span>
  ),
);

const App: React.FC = () => (
  <Tooltip title="안내 글">
    <ComponentWithEvents />
  </Tooltip>
);

export default App;