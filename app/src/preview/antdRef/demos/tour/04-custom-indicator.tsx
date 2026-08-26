import React, { useRef, useState } from 'react';
import { EllipsisOutlined } from '../_icons';
import type { GetRef, TourProps } from 'antd';
import { Button, Divider, Space, Tour } from 'antd';

const App: React.FC = () => {
  const ref1 = useRef<GetRef<typeof Button>>(null);
  const ref2 = useRef<GetRef<typeof Button>>(null);
  const ref3 = useRef<GetRef<typeof Button>>(null);

  const [open, setOpen] = useState<boolean>(false);

  const steps: TourProps['steps'] = [
    {
      title: '파일 올리기',
      description: '파일을 여기에 놓아 주세요.',
      target: () => ref1.current!,
    },
    {
      title: '저장',
      description: '바꾼 것을 저장해요.',
      target: () => ref2.current!,
    },
    {
      title: '다른 동작',
      description: '눌러서 다른 동작을 봐요.',
      target: () => ref3.current!,
    },
  ];

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        둘러보기 시작
      </Button>
      <Divider />
      <Space>
        <Button ref={ref1}>올리기</Button>
        <Button ref={ref2} type="primary">
          저장
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        indicatorsRender={(current, total) => (
          <span>
            {current + 1} / {total}
          </span>
        )}
      />
    </>
  );
};

export default App;