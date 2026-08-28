// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/message.json 의 examples[3] ("Stack")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Button, Divider, InputNumber, message, Space, Switch } from 'antd';

const App: React.FC = () => {
  const [enabled, setEnabled] = React.useState(true);
  const [threshold, setThreshold] = React.useState(3);
  const indexRef = React.useRef(0);
  const [messageApi, contextHolder] = message.useMessage({
    stack: enabled
      ? {
          threshold,
        }
      : false,
  });

  const openMessage = () => {
    indexRef.current += 1;
    const isOdd = indexRef.current % 2 === 1;

    messageApi.open({
      type: 'info',
      content: isOdd
        ? `메시지 ${indexRef.current}: 쌓인 메시지예요.`
        : `메시지 ${indexRef.current}: 조금 더 긴 쌓인 메시지예요.`,
      duration: 0,
    });
  };

  return (
    <>
      {contextHolder}
      <Space size="large">
        <Space style={{ width: '100%' }}>
          <span>쓸 수 있음: </span>
          <Switch
            aria-label="메시지 쌓기 켜기"
            checked={enabled}
            onChange={(v) => setEnabled(v)}
          />
        </Space>
        <Space style={{ width: '100%' }}>
          <span>문턱값: </span>
          <InputNumber
            aria-label="쌓기 문턱값"
            disabled={!enabled}
            value={threshold}
            step={1}
            min={1}
            max={10}
            onChange={(v) => setThreshold(v ?? 1)}
          />
        </Space>
      </Space>
      <Divider />
      <Space>
        <Button type="primary" onClick={openMessage}>
          메시지 상자 열기
        </Button>
        <Button onClick={() => messageApi.destroy()}>모두 없애기</Button>
      </Space>
    </>
  );
};

export default App;