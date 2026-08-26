/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/alert.json 의 examples[10] ("Custom action")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Alert, Button, Flex } from 'antd';

const App: React.FC = () => (
  <>
    <Alert
      title="성공 안내"
      type="success"
      showIcon
      action={
        <Button size="small" type="text">
          되돌리기
        </Button>
      }
      closable
    />
    <br />
    <Alert
      title="오류 글"
      showIcon
      description="오류 설명 오류 설명 오류 설명 오류 설명"
      type="error"
      action={
        <Button size="small" danger>
          자세히
        </Button>
      }
    />
    <br />
    <Alert
      title="경고 글"
      type="warning"
      action={
        <Button type="text" size="small">
          완료
        </Button>
      }
      closable
    />
    <br />
    <Alert
      title="안내 글"
      description="안내 설명 안내 설명 안내 설명 안내 설명"
      type="info"
      action={
        <Flex vertical gap="small" style={{ minWidth: 80 }}>
          <Button size="small" type="primary" block>
            받기
          </Button>
          <Button size="small" danger ghost block>
            거절
          </Button>
        </Flex>
      }
      closable
    />
  </>
);

export default App;