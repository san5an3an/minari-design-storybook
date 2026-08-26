/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/drawer.json 의 examples[10] ("mask")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';

type MaskType = 'blur' | 'dimmed' | 'none';
type DrawerConfig = {
  type: MaskType;
  mask: boolean | { blur: boolean };
  title: string;
};

const drawerList: DrawerConfig[] = [
  { type: 'blur', mask: { blur: true }, title: 'blur' },
  { type: 'dimmed', mask: true, title: '어둡게 덮기' },
  { type: 'none', mask: false, title: '덮기 없음' },
];
const App: React.FC = () => {
  const [open, setOpen] = useState<false | MaskType>(false);

  const showDrawer = (type: MaskType) => {
    setOpen(type);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Space wrap>
      {drawerList.map((item) => (
        <React.Fragment key={item.type}>
          <Button
            onClick={() => {
              showDrawer(item.type);
            }}
          >
            {item.title}
          </Button>
          <Drawer
            title={item.title}
            placement="right"
            mask={item.mask}
            onClose={onClose}
            open={open === item.type}
          >
            <p>내용이 들어가요…</p>
            <p>내용이 들어가요…</p>
            <p>내용이 들어가요…</p>
          </Drawer>
        </React.Fragment>
      ))}
    </Space>
  );
};

export default App;