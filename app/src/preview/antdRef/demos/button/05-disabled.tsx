/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/button.json 의 examples[5] ("Disabled")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Button, Flex } from 'antd';

const App: React.FC = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Flex gap="small">
      <Button type="primary">기본</Button>
      <Button type="primary" disabled>
        기본(못 씀)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button>기본값</Button>
      <Button disabled>기본(못 씀)</Button>
    </Flex>
    <Flex gap="small">
      <Button type="dashed">파선</Button>
      <Button type="dashed" disabled>
        파선(못 씀)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button type="text">글자</Button>
      <Button type="text" disabled>
        글자(못 씀)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button type="link">링크</Button>
      <Button type="link" disabled>
        링크(못 씀)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button type="primary" href="https://ant.design/index-cn">
        링크 기본
      </Button>
      <Button type="primary" href="https://ant.design/index-cn" disabled>
        링크 기본(못 씀)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button danger>위험 기본</Button>
      <Button danger disabled>
        위험 기본(못 씀)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button danger type="text">
        위험 글자
      </Button>
      <Button danger type="text" disabled>
        위험 글자(못 씀)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button type="link" danger>
        위험 링크
      </Button>
      <Button type="link" danger disabled>
        위험 링크(못 씀)
      </Button>
    </Flex>
    <Flex gap="small" className="site-button-ghost-wrapper">
      <Button ghost>유령</Button>
      <Button ghost disabled>
        유령(못 씀)
      </Button>
    </Flex>
  </Flex>
);

export default App;