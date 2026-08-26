/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/modal.json 의 examples[16] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { Button, Flex, Modal } from 'antd';
import type { GetProp, ModalProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const lineStyle: React.CSSProperties = {
  lineHeight: '28px',
};

const sharedContent = (
  <>
    <div style={lineStyle}>
      Ant Design 명세를 따라 React UI 라이브러리 antd 를 만들었어요. 풍부하고 반응 좋은 화면을 만들 수 있는 좋은 컴포넌트와 예제가 들어 있어요.
    </div>
    <div style={lineStyle}>🌈 웹 애플리케이션을 위한 기업용 UI.</div>
    <div style={lineStyle}>📦 바로 쓸 수 있는 좋은 React 컴포넌트 한 벌.</div>
    <div style={lineStyle}>🛡 TypeScript 로 썼고 타입을 예측할 수 있어요.</div>
    <div style={lineStyle}>⚙️ 디자인 자원과 개발 도구 한 벌.</div>
    <div style={lineStyle}>🌍 수십 개 언어를 지원해요.</div>
    <div style={lineStyle}>🎨 구석구석 손댈 수 있는 강력한 테마.</div>
  </>
);

const classNames = createStaticStyles(({ css }) => ({
  container: css`
    border-radius: 10px;
    padding: 10px;
  `,
}));

const styles: ModalProps['styles'] = {
  mask: {
    backgroundImage: `linear-gradient(to top, #18181b 0, rgba(21, 21, 22, 0.2) 100%)`,
  },
};

const stylesFn: ModalProps['styles'] = (info): GetProp<ModalProps, 'styles', 'Return'> => {
  if (info.props.footer) {
    return {
      container: {
        borderRadius: 14,
        border: '1px solid #ccc',
        padding: 0,
        overflow: 'hidden',
      },
      header: {
        padding: 16,
      },
      body: {
        padding: 16,
      },
      footer: {
        padding: '16px 10px',
        backgroundColor: '#fafafa',
      },
    };
  }
  return {};
};

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalFnOpen, setModalFnOpen] = useState(false);

  const sharedProps: ModalProps = {
    centered: true,
    classNames,
  };

  const footer: React.ReactNode = (
    <>
      <Button
        onClick={() => setModalFnOpen(false)}
        styles={{ root: { borderColor: '#ccc', color: '#171717', backgroundColor: '#fff' } }}
      >
        취소
      </Button>
      <Button
        type="primary"
        styles={{ root: { backgroundColor: '#171717' } }}
        onClick={() => setModalOpen(true)}
      >
        보내기
      </Button>
    </>
  );

  return (
    <Flex gap="medium">
      <Button onClick={() => setModalOpen(true)}>꾸민 Modal 열기</Button>
      <Button type="primary" onClick={() => setModalFnOpen(true)}>
        함수 Modal 열기
      </Button>
      <Modal
        {...sharedProps}
        footer={null}
        title="직접 꾸민 Modal"
        styles={styles}
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        {sharedContent}
      </Modal>
      <Modal
        {...sharedProps}
        footer={footer}
        title="직접 만든 함수 Modal"
        styles={stylesFn}
        mask={{ enabled: true, blur: true }}
        open={modalFnOpen}
        onOk={() => setModalFnOpen(false)}
        onCancel={() => setModalFnOpen(false)}
      >
        {sharedContent}
      </Modal>
    </Flex>
  );
};

export default App;