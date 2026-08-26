/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/drawer.json 의 examples[9] ("Preset size")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import type { DrawerProps } from 'antd';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps['size']>();

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Radio.Group
          value={size}
          onChange={(e) => setSize(e.target.value)}
          options={[
            { label: '큰 크기 (736px)', value: 'large' },
            { label: '기본 크기 (378px)', value: 'default' },
            { label: 256, value: 256 },
            { label: '500px', value: '500px' },
            { label: '50%', value: '50%' },
            { label: '20vw', value: '20vw' },
          ]}
        />
      </Space>
      <Button type="primary" onClick={() => setOpen(true)}>
        서랍 열기
      </Button>
      <Drawer
        title={`${size} 서랍`}
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>취소</Button>
            <Button type="primary" onClick={onClose}>
              확인
            </Button>
          </Space>
        }
      >
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
      </Drawer>
    </>
  );
};

export default App;