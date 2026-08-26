/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/typography.json 의 examples[0] ("Basic")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Divider, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const blockContent = `AntV 는 앤트그룹의 새로운 데이터 시각화 해법이에요. 간단하고 편하면서도 믿을 만하고, 가능성에 제한이 없는 데이터 시각화의 좋은 사례를 드리려 해요. 다양한 업무 상황과 사용자 요구를 겪으며 여러 해 동안 쌓고 다듬어, 이미 앤트그룹 안팎의 수많은 화면을 받치고 있어요.`;

const App: React.FC = () => (
  <Typography>
    <Title>소개</Title>

    <Paragraph>
      사내 데스크톱 애플리케이션을 만들다 보면 서로 다른 디자인 명세와 구현이 뒤섞여요. 그러면 디자이너와 개발자가 어려움을 겪고 같은 일을 두 번 하게 되어 속도가 떨어져요.
    </Paragraph>

    <Paragraph>
      수많은 프로젝트를 거치고 정리해, 백오피스 애플리케이션을 위한 디자인 언어 Ant Design 을 Ant UED 팀이 다듬었어요. 목표는{' '}
      <Text strong>
        사내 백오피스 프로젝트의 화면 명세를 하나로 맞춰, 디자인이 달라서 생기는 쓸데없는 비용을 줄이고 디자인·프런트엔드 자원을 아껴요
      </Text>
      .
    </Paragraph>

    <Title level={2}>안내와 자원</Title>

    <Paragraph>
      디자인 원칙과 실용적인 패턴, 좋은 디자인 자원을 함께 드려요 (<Text code>Sketch</Text> and <Text code>Axure</Text>), 제품 프로토타입을 예쁘고 빠르게 만들 수 있게요.
    </Paragraph>

    <Paragraph>
      <ul>
        <li>
          <Link href="/docs/spec/proximity">원칙</Link>
        </li>
        <li>
          <Link href="/docs/spec/overview">패턴</Link>
        </li>
        <li>
          <Link href="/docs/resources">자료 내려받기</Link>
        </li>
      </ul>
    </Paragraph>

    <Paragraph>
      누르기 <Text keyboard>Esc</Text> 나가려면…
    </Paragraph>

    <Divider />

    <Title>소개</Title>

    <Paragraph>
      앤트의 기업용 제품은 크고 복잡한 체계예요. 규모가 클 뿐 아니라 기능도 복잡하고, 바뀌는 일도 동시에 벌어지는 일도 잦아서 디자인과 개발이 빠르게 답해야 해요. 그러면서도 비슷한 화면과 컴포넌트가 많아, 추려 내면 안정적이고 두루 쓰이는 것들을 얻을 수 있어요.
    </Paragraph>

    <Paragraph>
      상업화가 진행되면서 더 많은 기업용 제품이 더 나은 사용 경험을 요구하게 됐어요. 그 목표를 두고 저희(앤트그룹 경험기술부)는 수많은 프로젝트를 거치며 기업용 제품을 위한 디자인 체계 Ant Design 을 다듬어 왔어요. 이를 바탕으로<Text mark>『확실함』과 『자연스러움』</Text>
      이라는 디자인 가치를 바탕으로, 모듈로 나눈 해법을 통해 쓸데없는 생산 비용을 줄이고 디자이너가 이것에 집중하게 해요 —
      <Text strong>더 나은 사용 경험</Text>。
    </Paragraph>

    <Title level={2}>디자인 자원</Title>

    <Paragraph>
      디자인 원칙과 좋은 사례, 디자인 자원 파일을 함께 드려요 (<Text code>Sketch</Text> 和
      <Text code>Axure</Text>), 업무에서 좋은 제품 프로토타입을 빠르게 만들 수 있게 도와요.
    </Paragraph>

    <Paragraph>
      <ul>
        <li>
          <Link href="/docs/spec/proximity-cn">디자인 원칙</Link>
        </li>
        <li>
          <Link href="/docs/spec/overview-cn">디자인 패턴</Link>
        </li>
        <li>
          <Link href="/docs/resources-cn">디자인 자원</Link>
        </li>
      </ul>
    </Paragraph>

    <Paragraph>
      <blockquote>{blockContent}</blockquote>
      <pre>{blockContent}</pre>
    </Paragraph>

    <Paragraph>
      按<Text keyboard>Esc</Text>키로 읽기를 끝내요……
    </Paragraph>
  </Typography>
);

export default App;