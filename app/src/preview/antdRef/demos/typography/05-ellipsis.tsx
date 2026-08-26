/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/typography.json 의 examples[5] ("Ellipsis")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
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