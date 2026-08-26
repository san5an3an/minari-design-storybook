/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/skeleton.json 의 examples[4] ("Contains sub component")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { Button, Skeleton, Space } from 'antd';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const showSkeleton = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <Space vertical style={{ width: '100%' }} size={16}>
      <Skeleton loading={loading}>
        <h4 style={{ marginBottom: 16 }}>Ant Design 은 디자인 언어예요</h4>
        <p>
          디자인 원칙과 실용적인 패턴, 좋은 디자인 자원(Sketch·Axure)을 함께 드려요. 제품 프로토타입을 예쁘고 빠르게 만들 수 있게요.
        </p>
      </Skeleton>
      <Button onClick={showSkeleton} disabled={loading}>
        스켈레톤 보이기
      </Button>
    </Space>
  );
};

export default App;