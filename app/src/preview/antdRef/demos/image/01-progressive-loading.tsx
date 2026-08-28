// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/image.json 의 examples[1] ("Progressive Loading")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useEffect, useState } from 'react';
import { Button, Flex, Image, theme } from 'antd';

const GeneratingProgress: React.FC = () => {
  const { token } = theme.useToken();
  const [percent, setPercent] = useState(0);
  const [status, setStatus] = useState<'idle' | 'generating' | 'complete'>('idle');
  const imageStyles = {
    root: { borderRadius: token.borderRadiusLG },
    image: { borderRadius: token.borderRadiusLG },
    cover: { borderRadius: token.borderRadiusLG },
  };

  useEffect(() => {
    if (status === 'generating' && percent < 100) {
      const timer = setTimeout(() => {
        setPercent((prev) => Math.min(prev + Math.random() * 8 + 2, 100));
      }, 200);
      return () => clearTimeout(timer);
    } else if (status === 'generating' && percent >= 100) {
      const timer = setTimeout(() => {
        setStatus('complete');
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [status, percent]);

  const handleStart = () => {
    setPercent(0);
    setStatus('generating');
  };

  const imageNode =
    status === 'complete' ? (
      <Image
        width={200}
        height={200}
        styles={imageStyles}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    ) : (
      <Image
        width={200}
        height={200}
        styles={imageStyles}
        placeholder={{
          progress: {
            percent: Math.round(percent),
            render: (progress, p) => (
              <>
                {progress}
                <div style={{ marginTop: 8 }}>만드는 중 {p}%</div>
              </>
            ),
          },
        }}
      />
    );

  return (
    <Flex vertical gap={8}>
      <Button type="primary" onClick={handleStart} disabled={status === 'generating'}>
        만들기
      </Button>
      {imageNode}
    </Flex>
  );
};

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [random, setRandom] = useState<number>(() => Date.now());
  const imageStyles = {
    root: { borderRadius: token.borderRadiusLG },
    image: { borderRadius: token.borderRadiusLG },
    cover: { borderRadius: token.borderRadiusLG },
  };

  return (
    <>
      <Flex gap={16} wrap>
        <Image width={200} height={200} styles={imageStyles} placeholder={{ progress: true }} />
        <Image
          width={200}
          height={200}
          styles={imageStyles}
          placeholder={{ progress: { render: () => '불러오는 중…' } }}
        />
        <Image
          width={200}
          height={200}
          styles={imageStyles}
          placeholder={{ progress: { percent: 50 } }}
        />
        <Image
          width={200}
          height={200}
          styles={imageStyles}
          placeholder={{
            progress: {
              percent: 75,
              render: (progress, p) => (
                <>
                  {progress}
                  <div style={{ marginTop: 8 }}>만드는 중 {p}%</div>
                </>
              ),
            },
          }}
        />
      </Flex>
      <Flex gap={16} wrap style={{ marginTop: 16 }}>
        <Flex vertical gap={8}>
          <Button
            type="primary"
            onClick={() => {
              setRandom(Date.now());
            }}
          >
            이미지 새로 고침
          </Button>
          <Image
            width={200}
            height={200}
            alt="기본 이미지"
            styles={imageStyles}
            src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
            placeholder={
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: token.borderRadiusLG,
                }}
              />
            }
          />
        </Flex>
        <GeneratingProgress />
      </Flex>
    </>
  );
};

export default App;