/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/drawer.json 의 examples[7] ("Preview drawer")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { Avatar, Col, Divider, Drawer, List, Row } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles((props) => {
  const { css, cssVar } = props;
  return {
    descriptionItem: css`
      margin-bottom: ${cssVar.marginXS};
      color: ${cssVar.colorTextLabel};
      font-size: ${cssVar.fontSize};
      line-height: ${cssVar.lineHeight};
    `,
    profileTitle: css`
      display: block;
      margin-bottom: ${cssVar.margin};
      color: ${cssVar.colorTextHeading};
      font-size: ${cssVar.fontSizeLG};
      line-height: ${cssVar.lineHeight};
    `,
    label: css`
      display: inline-block;
      margin-inline-end: ${cssVar.marginXS};
      color: ${cssVar.colorTextHeading};
    `,
  };
});

interface DescriptionItemProps {
  title: string;
  content: React.ReactNode;
}

const DescriptionItem: React.FC<DescriptionItemProps> = (props) => {
  const { title, content } = props;
  const { styles } = useStyles();
  return (
    <div className={styles.descriptionItem}>
      <p className={styles.label}>{title}:</p>
      {content}
    </div>
  );
};

const App: React.FC = () => {
  const { styles } = useStyles();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <List
        bordered
        dataSource={[
          { id: 1, name: '수아' },
          { id: 2, name: '수아' },
        ]}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <a onClick={showDrawer} key={`a-${item.id}`}>
                프로필 보기
              </a>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
              }
              title={<a href="https://ant.design/index-cn">{item.name}</a>}
              description="프로그레서 XTech"
            />
          </List.Item>
        )}
      />
      <Drawer size={640} placement="right" closable={false} onClose={onClose} open={open}>
        <p className={styles.profileTitle} style={{ marginBottom: 24 }}>
          사용자 프로필
        </p>
        <p className={styles.profileTitle}>개인</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="전체 이름" content="수아" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="계정" content="AntDesign@example.com" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="도시" content="서울" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="나라" content="한국🇰🇷" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="생일" content="1900년 2월 2일" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="웹사이트" content="-" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="메시지"
              content="될 수 있는 한 단순하게, 그렇다고 더 단순하지는 않게."
            />
          </Col>
        </Row>
        <Divider />
        <p className={styles.profileTitle}>회사</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="자리" content="개발자" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="맡은 일" content="코딩" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="부서" content="XTech" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="관리자" content={<a>지우</a>} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="기술"
              content="C / C++, 자료구조, 소프트웨어 공학, 운영체제, 컴퓨터 네트워크, 데이터베이스, 컴파일러 이론, 컴퓨터 구조, 마이크로컴퓨터 원리와 인터페이스, 컴퓨터 영어, Java, ASP 등."
            />
          </Col>
        </Row>
        <Divider />
        <p className={styles.profileTitle}>연락처</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="이메일" content="AntDesign@example.com" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="전화번호" content="+86 181 0000 0000" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="GitHub"
              content={
                <a
                  href="https://github.com/ant-design/ant-design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/ant-design/ant-design
                </a>
              }
            />
          </Col>
        </Row>
      </Drawer>
    </>
  );
};

export default App;