// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/layout.json 의 examples[0] ("Basic Structure")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Flex, Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
};

const App: React.FC = () => (
  <Flex gap="medium" wrap>
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>머리</Header>
      <Content style={contentStyle}>내용</Content>
      <Footer style={footerStyle}>바닥</Footer>
    </Layout>

    <Layout style={layoutStyle}>
      <Header style={headerStyle}>머리</Header>
      <Layout>
        <Sider width="25%" style={siderStyle}>
          사이드바
        </Sider>
        <Content style={contentStyle}>내용</Content>
      </Layout>
      <Footer style={footerStyle}>바닥</Footer>
    </Layout>

    <Layout style={layoutStyle}>
      <Header style={headerStyle}>머리</Header>
      <Layout>
        <Content style={contentStyle}>내용</Content>
        <Sider width="25%" style={siderStyle}>
          사이드바
        </Sider>
      </Layout>
      <Footer style={footerStyle}>바닥</Footer>
    </Layout>

    <Layout style={layoutStyle}>
      <Sider width="25%" style={siderStyle}>
        사이드바
      </Sider>
      <Layout>
        <Header style={headerStyle}>머리</Header>
        <Content style={contentStyle}>내용</Content>
        <Footer style={footerStyle}>바닥</Footer>
      </Layout>
    </Layout>
  </Flex>
);

export default App;