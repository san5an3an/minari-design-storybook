// @ts-nocheck
import React from 'react';
import { SmileFilled, SmileOutlined } from '../_icons';
import { Typography } from 'antd';

const { Paragraph, Text } = Typography;

const App: React.FC = () => (
  <>
    <Paragraph copyable>복사할 수 있는 글이에요.</Paragraph>
    <Paragraph copyable={{ text: '안녕하세요, Ant Design!' }}>복사할 글을 바꿔요.</Paragraph>
    <Paragraph
      copyable={{
        icon: [<SmileOutlined key="copy-icon" />, <SmileFilled key="copied-icon" />],
        tooltips: ['여기를 눌러 보세요', '눌렀어요!!'],
      }}
    >
      복사 아이콘과 툴팁 글자를 직접 정해요.
    </Paragraph>
    <Paragraph copyable={{ tooltips: false }}>복사 툴팁 숨기기.</Paragraph>
    <Paragraph
      copyable={{
        text: async () =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve('요청 글');
            }, 500);
          }),
      }}
    >
      복사할 글을 받아 와요.
    </Paragraph>
    <Paragraph copyable actions={{ placement: 'start' }}>
      복사 버튼을 앞에 둬요.
    </Paragraph>
    <Text copyable={{ text: '복사할 글' }} />
  </>
);

export default App;