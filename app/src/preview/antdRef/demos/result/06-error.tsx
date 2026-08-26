/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/result.json 의 examples[6] ("Error")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { CloseCircleOutlined } from '../_icons';
import { Button, Result, Typography } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles((props) => {
  const { css, cssVar } = props;
  return {
    errorIcon: css`
      color: ${cssVar.colorError};
      margin-inline-end: ${cssVar.marginXS};
    `,
  };
});

const { Paragraph, Text } = Typography;

const App: React.FC = () => {
  const { styles } = useStyles();
  return (
    <Result
      status="error"
      title="보내기 실패"
      subTitle="다시 보내기 전에 아래 내용을 확인하고 고쳐 주세요."
      extra={[
        <Button type="primary" key="console">
          콘솔로 가기
        </Button>,
        <Button key="buy">다시 사기</Button>,
      ]}
    >
      <div className="desc">
        <Paragraph>
          <Text strong style={{ fontSize: 16 }}>
            보내신 내용에 이런 오류가 있어요:
          </Text>
        </Paragraph>
        <Paragraph>
          <CloseCircleOutlined className={styles.errorIcon} />
          계정이 잠겼어요. <a>즉시 해동 &gt;</a>
        </Paragraph>
        <Paragraph>
          <CloseCircleOutlined className={styles.errorIcon} />
          아직 신청할 수 있는 계정이 아니에요. <a>잠금 해제 신청 &gt;</a>
        </Paragraph>
      </div>
    </Result>
  );
};

export default App;