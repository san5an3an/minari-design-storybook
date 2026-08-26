/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/popconfirm.json 의 examples[4] ("Conditional trigger")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { Button, message, Popconfirm, Switch } from 'antd';

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [open, setOpen] = useState(false);
  const [condition, setCondition] = useState(true);

  const changeCondition = (checked: boolean) => {
    setCondition(checked);
  };

  const confirm = () => {
    setOpen(false);
    messageApi.success('다음 단계.');
  };

  const cancel = () => {
    setOpen(false);
    messageApi.error('취소를 눌렀어요.');
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setOpen(newOpen);
      return;
    }
    // Determining condition before show the popconfirm.
    console.log(condition);
    if (condition) {
      confirm(); // next step
    } else {
      setOpen(newOpen);
    }
  };

  return (
    <>
      {contextHolder}
      <div>
        <Popconfirm
          title="이 일을 지워요"
          description="이 일을 지울까요?"
          open={open}
          onOpenChange={handleOpenChange}
          onConfirm={confirm}
          onCancel={cancel}
          okText="네"
          cancelText="아니요"
        >
          <Button danger>일 지우기</Button>
        </Popconfirm>
        <br />
        <br />
        바로 실행할까요：
        <Switch defaultChecked onChange={changeCondition} />
      </div>
    </>
  );
};

export default App;