import React from 'react';
import { Button, Flex, Popconfirm } from 'antd';
import type { GetProp, PopconfirmProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => ({
  container: css`
    padding: 10px;
  `,
}));

const styles: PopconfirmProps['styles'] = {
  container: {
    backgroundColor: '#eee',
    boxShadow: 'inset 5px 5px 3px #fff, inset -5px -5px 3px #ddd, 0 0 3px rgba(0,0,0,0.2)',
  },
  title: {
    color: '#262626',
  }, content: {
    color: '#262626',
  },
};

const stylesFn: PopconfirmProps['styles'] = (
  info,
): GetProp<PopconfirmProps, 'styles', 'Return'> => {
  if (!info.props.arrow) {
    return {
      container: {
        backgroundColor: 'rgba(53, 71, 125, 0.8)',
        padding: 12,
        borderRadius: 4,
      },
      title: {
        color: '#fff',
      }, content: {
        color: '#fff',
      },
    };
  }
};

const App: React.FC = () => {
  return (
    <Flex gap="medium">
      <Popconfirm
        title="객체 글"
        description="객체 설명"
        classNames={classNames}
        styles={styles}
        arrow={false}
      >
        <Button>객체 스타일</Button>
      </Popconfirm>
      <Popconfirm
        title="함수 글"
        description="함수 설명"
        classNames={classNames}
        styles={stylesFn}
        arrow={false}
        okButtonProps={{
          styles: { root: { backgroundColor: 'rgba(53, 71, 125, 0.6)', color: '#fff' } },
        }}
        cancelButtonProps={{
          styles: {
            root: {
              borderColor: 'rgba(53, 71, 125, 0.6)',
              backgroundColor: '#fff',
              color: 'rgba(53, 71, 125, 0.8)',
            },
          },
        }}
      >
        <Button type="primary">함수 스타일</Button>
      </Popconfirm>
    </Flex>
  );
};

export default App;