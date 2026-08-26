/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/badge.json 의 examples[10] ("Ribbon")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Badge, Card, Space } from 'antd';

const App: React.FC = () => (
  <Space vertical size="medium" style={{ width: '100%' }}>
    <Badge.Ribbon text="히피">
      <Card title="창을 밀어서 열어요" size="small">
        그리고 망원경을 들어 올려요.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="히피" color="pink">
      <Card title="창을 밀어서 열어요" size="small">
        그리고 망원경을 들어 올려요.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="히피" color="red">
      <Card title="창을 밀어서 열어요" size="small">
        그리고 망원경을 들어 올려요.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="히피" color="cyan">
      <Card title="창을 밀어서 열어요" size="small">
        그리고 망원경을 들어 올려요.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="히피" color="green">
      <Card title="창을 밀어서 열어요" size="small">
        그리고 망원경을 들어 올려요.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="히피" color="purple">
      <Card title="창을 밀어서 열어요" size="small">
        그리고 망원경을 들어 올려요.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="히피" color="volcano">
      <Card title="창을 밀어서 열어요" size="small">
        그리고 망원경을 들어 올려요.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="히피" color="magenta">
      <Card title="창을 밀어서 열어요" size="small">
        그리고 망원경을 들어 올려요.
      </Card>
    </Badge.Ribbon>
  </Space>
);

export default App;