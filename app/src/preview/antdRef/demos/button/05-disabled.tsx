// @ts-nocheck
import React from 'react';
import { Button, Flex } from 'antd';

const App: React.FC = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Flex gap="small">
      <Button type="primary">기본</Button>
      <Button type="primary" disabled>
        주요(못 씀)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button>기본값</Button>
      <Button disabled>기본(못 씀)</Button>
    </Flex>
    <Flex gap="small">
      <Button type="dashed">파선</Button>
      <Button type="dashed" disabled>
        파선(못 씀)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button type="text">글자</Button>
      <Button type="text" disabled>
        글자(못 씀)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button type="link">링크</Button>
      <Button type="link" disabled>
        링크(못 씀)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button type="primary" href="https://ant.design/index-cn">
        링크 기본
      </Button>
      <Button type="primary" href="https://ant.design/index-cn" disabled>
        링크 기본(못 씀)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button danger>위험 기본</Button>
      <Button danger disabled>
        위험 기본(못 씀)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button danger type="text">
        위험 글자
      </Button>
      <Button danger type="text" disabled>
        위험 글자(못 씀)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button type="link" danger>
        위험 링크
      </Button>
      <Button type="link" danger disabled>
        위험 링크(못 씀)
      </Button>
    </Flex>
    <Flex gap="small" className="site-button-ghost-wrapper">
      <Button ghost>유령</Button>
      <Button ghost disabled>
        유령(못 씀)
      </Button>
    </Flex>
  </Flex>
);

export default App;