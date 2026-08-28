// @ts-nocheck
import React, { useRef, useState } from 'react';
import { Button, Divider, Flex, Space, Tour } from 'antd';
import type { GetProp, TourProps, TourStepProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const btnProps: {
  nextButtonProps: TourStepProps['nextButtonProps'];
  prevButtonProps: TourStepProps['prevButtonProps'];
} = {
  nextButtonProps: {
    style: {
      border: '1px solid #CDC1FF',
      color: '#CDC1FF',
    },
  },
  prevButtonProps: {
    style: {
      backgroundColor: '#CDC1FF',
      color: '#fff',
    },
  },
};

const classNames = createStaticStyles(({ css }) => ({
  root: css`
    border-radius: 4px;
  `,
  section: css`
    border-radius: 8px;
  `,
}));

const stylesObject: TourProps['styles'] = {
  mask: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  section: {
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    border: '2px solid #4096ff',
  },
  cover: {
    borderRadius: '12px 12px 0 0',
  },
};

const stylesFunction: TourProps['styles'] = (info): GetProp<TourProps, 'styles', 'Return'> => {
  if (info.props.type === 'primary') {
    return {
      mask: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      },
      section: {
        backgroundColor: 'rgb(205,193,255, 0.8)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
      cover: {
        borderRadius: '12px 12px 0 0',
      },
    };
  }
  return {};
};

const App: React.FC = () => {
  const ref1 = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const ref2 = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const ref3 = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const [open, setOpen] = useState<boolean>(false);
  const [openFn, setOpenFn] = useState<boolean>(false);

  const steps: TourProps['steps'] = [
    {
      title: '파일 올리기',
      description: '파일을 여기에 놓아 주세요.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current || document.body, prevButtonProps: {},
    },
    {
      title: '저장',
      description: '바꾼 것을 저장해요.',
      target: () => ref2.current || document.body,
    },
    {
      title: '다른 동작',
      description: '눌러서 다른 동작을 봐요.',
      target: () => ref3.current || document.body,
    },
  ];

  const sharedProps: TourProps = {
    steps,
    classNames,
    arrow: false,
  };

  return (
    <Flex vertical gap="medium">
      <Flex gap="medium">
        <Button type="primary" onClick={() => setOpen(true)}>
          둘러보기 시작 (객체)
        </Button>
        <Button type="primary" onClick={() => setOpenFn(true)}>
          둘러보기 시작 (함수)
        </Button>
      </Flex>
      <Divider />
      <Tour {...sharedProps} open={open} onClose={() => setOpen(false)} styles={stylesObject} />
      <Tour
        {...sharedProps}
        steps={steps.map((s) => ({ ...s, ...btnProps }))}
        type="primary"
        open={openFn}
        onClose={() => setOpenFn(false)}
        styles={stylesFunction}
      />
      <Space>
        <Button ref={ref1} type="primary">
          올리기
        </Button>
        <Button ref={ref2}>저장</Button>
        <Button ref={ref3} type="dashed">
          다른 동작
        </Button>
      </Space>
    </Flex>
  );
};

export default App;