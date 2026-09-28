// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/drawer.json 의 examples[2] ("Resizable")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Button, Drawer, Radio, Space } from 'antd';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');
  const [size, setSize] = useState(256);

  const onChange = (e: RadioChangeEvent) => {
    setSize(256);
    setPlacement(e.target.value);
  };

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Radio.Group
          value={placement}
          onChange={onChange}
          options={['top', 'right', 'bottom', 'left'].map((pos) => ({
            label: pos,
            value: pos,
          }))}
        />
        <Button type="primary" onClick={() => setOpen(true)}>
          서랍 열기
        </Button>
      </Space>
      <div>지금 크기: {size}px</div>
      <Drawer
        title="크기를 바꿀 수 있는 서랍"
        placement={placement}
        onClose={() => setOpen(false)}
        open={open}
        key={placement}
        size={size}
        resizable={{
          onResize: (newSize) => setSize(newSize),
        }}
      >
        <p>가장자리를 끌어 서랍 크기를 바꿔요</p>
        <p>지금 크기: {size}px</p>
      </Drawer>
    </>
  );
};

export default App;