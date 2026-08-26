import React, { useState } from 'react';
import { Switch, Typography } from 'antd';

const { Paragraph, Text } = Typography;

const App: React.FC = () => {
  const [ellipsis, setEllipsis] = useState(true);

  return (
    <>
      <Switch
        checked={ellipsis}
        onChange={() => {
          setEllipsis(!ellipsis);
        }}
      />

      <Paragraph ellipsis={ellipsis}>
        Ant Design 은 백오피스 애플리케이션을 위한 디자인 언어예요. Ant UED 팀이 다듬었어요. Ant Design 은 백오피스 애플리케이션을 위한 디자인 언어예요. Ant UED 팀이 다듬었어요. Ant Design 은 백오피스 애플리케이션을 위한 디자인 언어예요. Ant UED 팀이 다듬었어요. Ant Design 은 백오피스 애플리케이션을 위한 디자인 언어예요. Ant UED 팀이 다듬었어요. Ant Design 은 백오피스 애플리케이션을 위한 디자인 언어예요. Ant UED 팀이 다듬었어요. Ant Design 은 백오피스 애플리케이션을 위한 디자인 언어예요. Ant UED 팀이 다듬었어요. 
      </Paragraph>

      <Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: '더 보기' } : false}>
        Ant Design 은 백오피스 애플리케이션을 위한 디자인 언어예요. Ant UED 팀이 다듬었어요. Ant Design 은 백오피스 애플리케이션을 위한 디자인 언어예요. Ant UED 팀이 다듬었어요. Ant Design 은 백오피스 애플리케이션을 위한 디자인 언어예요. Ant UED 팀이 다듬었어요. Ant Design 은 백오피스 애플리케이션을 위한 디자인 언어예요. Ant UED 팀이 다듬었어요. Ant Design 은 백오피스 애플리케이션을 위한 디자인 언어예요. Ant UED 팀이 다듬었어요. Ant Design 은 백오피스 애플리케이션을 위한 디자인 언어예요. Ant UED 팀이 다듬었어요. 
      </Paragraph>

      <Text
        style={ellipsis ? { width: 200 } : undefined}
        ellipsis={ellipsis ? { tooltip: '저는 지금 말줄임됐어요!' } : false}
      >
        Ant Design 은 백오피스 애플리케이션을 위한 디자인 언어예요. Ant UED 팀이 다듬었어요.
      </Text>

      <Text
        code
        style={ellipsis ? { width: 200 } : undefined}
        ellipsis={ellipsis ? { tooltip: '저는 지금 말줄임됐어요!' } : false}
      >
        Ant Design 은 백오피스 애플리케이션을 위한 디자인 언어예요. Ant UED 팀이 다듬었어요.
      </Text>
    </>
  );
};

export default App;