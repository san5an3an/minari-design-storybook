/* Horizontal Anchor — **손으로 쓴 것.** 생성기가 이 이름을 만나면 비켜난다.

 * 공식 원본에서 바꾼 것은 **한 가지, 칸 배경의 알파뿐**이다 — `0.02` → `0.08`.
 * 구조·높이·`100vh`·`position: fixed`·`targetOffset`·이름·문구는 **전부 그대로**다.
 *
 * 왜 바꾸는가
 * ----------
 * 공식 예제는 세 칸을 `rgba(255,0,0,0.02)` · `rgba(0,255,0,0.02)` · `rgba(0,0,255,0.02)`
 * 로 칠한다. **알파 2%** 라 셋 다 사실상 흰색이고, 서로 구별되지 않는다.
 * 공식 문서에서도 똑같이 안 보인다 (2026-08-26 실측 — 그쪽 화면의 Part 2 칸도 흰색이었다).
 *
 * 우리 화면에서는 그게 더 아프다. 이 예제가 보여 주려는 것이 **앵커를 누르면 그 칸으로
 * 옮겨 간다**는 사실인데, 칸이 안 갈리면 옮겨 갔는지를 알 수 없다
 * (2026-08-26 사용자 지적 — "1부에서 2부로 전환될 때 색상이 없어서 전환이 되는지를 모르겠어").
 * 스크롤은 정확히 되고 있었다. 안 보였을 뿐이다.
 *
 * ⚠️ **색상(hue)은 공식 그대로다.** 빨강·초록·파랑 순서도 그대로다. 진하기만 올렸다 —
 *    다른 색을 넣으면 그건 공식 예제가 아니라 우리 예제가 된다.
 *
 * ⚠️ **공식이 이 예제를 고치면 여기는 따라가지 않는다.** 손으로 쓴 것이 이기므로
 *    생성기가 이 파일을 덮지 않는다. 그쪽 코드가 바뀌면 `antdRef/anchor.json` 의
 *    `examples[]` 를 보고 **여기도 손으로** 맞춰야 한다. 그것이 이 방식의 값이다.
 */
import React from 'react';
import { Anchor } from 'antd';

const App: React.FC = () => (
  <>
    <div style={{ padding: '20px' }}>
      <Anchor
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: '1부',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: '2부',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: '3부',
          },
        ]}
      />
    </div>
    <div>
      <div
        id="part-1"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,255,0,0.08)',
        }}
      />
      <div
        id="part-2"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,0,255,0.08)',
        }}
      />
      <div
        id="part-3"
        style={{ width: '100vw', height: '100vh', textAlign: 'center', background: '#FFFBE9' }}
      />
    </div>
  </>
);

export default App;