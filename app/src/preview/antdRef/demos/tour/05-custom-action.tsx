// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/tour.json 의 examples[5] ("Custom action")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useRef, useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import type { GetRef, TourProps } from 'antd';
import { Button, Divider, Space, Tour } from 'antd';

const App: React.FC = () => {
  const ref1 = useRef<GetRef<typeof Button>>(null);
  const ref2 = useRef<GetRef<typeof Button>>(null);
  const ref3 = useRef<GetRef<typeof Button>>(null);

  const [open, setOpen] = useState<boolean>(false);

  const steps: TourProps['steps'] = [
    {
      title: '파일 올리기',
      description: '파일을 여기에 놓아 주세요.',
      target: () => ref1.current!,
    },
    {
      title: '저장',
      description: '바꾼 것을 저장해요.',
      target: () => ref2.current!,
    },
    {
      title: '다른 동작',
      description: '눌러서 다른 동작을 봐요.',
      target: () => ref3.current!,
    },
  ];

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        둘러보기 시작
      </Button>
      <Divider />
      <Space>
        <Button ref={ref1}>올리기</Button>
        <Button ref={ref2} type="primary">
          저장
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        actionsRender={(originNode, { current, total }) => (
          <>
            {current !== total - 1 && (
              <Button
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                건너뛰기
              </Button>
            )}
            {originNode}
          </>
        )}
      />
    </>
  );
};

export default App;