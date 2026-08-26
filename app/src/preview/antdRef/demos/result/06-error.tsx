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