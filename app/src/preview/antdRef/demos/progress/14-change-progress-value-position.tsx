/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/progress.json 의 examples[14] ("Change progress value position")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Flex, Progress } from 'antd';

const App: React.FC = () => (
  <Flex gap="small" vertical>
    <Progress
      percent={0}
      percentPosition={{ align: 'center', type: 'inner' }}
      size={[200, 20]}
      strokeColor="#E6F4FF"
    />
    <Progress percent={10} percentPosition={{ align: 'center', type: 'inner' }} size={[300, 20]} />
    <Progress
      percent={50}
      percentPosition={{ align: 'start', type: 'inner' }}
      size={[300, 20]}
      strokeColor="#B7EB8F"
    />
    <Progress
      percent={60}
      percentPosition={{ align: 'end', type: 'inner' }}
      size={[300, 20]}
      strokeColor="#001342"
    />
    <Progress percent={100} percentPosition={{ align: 'center', type: 'inner' }} size={[400, 20]} />
    <Progress percent={60} percentPosition={{ align: 'start', type: 'outer' }} />
    <Progress percent={100} percentPosition={{ align: 'start', type: 'outer' }} />
    <Progress percent={60} percentPosition={{ align: 'center', type: 'outer' }} size="small" />
    <Progress percent={100} percentPosition={{ align: 'center', type: 'outer' }} />
  </Flex>
);

export default App;