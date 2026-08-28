// @ts-nocheck
import React, { useRef, useState } from 'react';
import { Button, Tour } from 'antd';
import type { TourProps } from 'antd';

const App: React.FC = () => {
  const ref = useRef(null);

  const [open, setOpen] = useState<boolean>(false);

  const steps: TourProps['steps'] = [
    {
      title: '가운데',
      description: '화면 가운데에 보여요.',
      target: null,
    },
    {
      title: '오른쪽',
      description: '대상의 오른쪽에요.',
      placement: 'right',
      target: () => ref.current,
    },
    {
      title: '위',
      description: '대상의 위에요.',
      placement: 'top',
      target: () => ref.current,
    },
  ];

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)} ref={ref}>
        둘러보기 시작
      </Button>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};

export default App;