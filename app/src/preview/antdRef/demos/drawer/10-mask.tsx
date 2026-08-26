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