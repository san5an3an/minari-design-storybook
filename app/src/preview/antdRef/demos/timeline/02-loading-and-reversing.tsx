/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/timeline.json 의 examples[2] ("Loading and Reversing")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { Button, Flex, Timeline } from 'antd';

const App: React.FC = () => {
  const [reverse, setReverse] = useState(false);

  const handleClick = () => {
    setReverse(!reverse);
  };

  return (
    <Flex vertical gap="medium" align="flex-start">
      <Timeline
        reverse={reverse}
        items={[
          {
            content: '서비스 사이트 만들기 2015-09-01',
          },
          {
            content: '초기 네트워크 문제 해결 2015-09-01',
          },
          {
            content: '기술 테스트 2015-09-01',
          },
          {
            loading: true,
            content: '녹음 중…',
          },
        ]}
      />
      <Button type="primary" onClick={handleClick}>
        뒤집기
      </Button>
    </Flex>
  );
};

export default App;