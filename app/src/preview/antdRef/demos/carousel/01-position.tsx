/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/carousel.json 의 examples[1] ("Position")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import type { CarouselProps, RadioChangeEvent } from 'antd';
import { Carousel, Radio } from 'antd';

type DotPlacement = CarouselProps['dotPlacement'];

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const App: React.FC = () => {
  const [dotPlacement, setDotPlacement] = useState<DotPlacement>('top');

  const handlePositionChange = ({ target: { value } }: RadioChangeEvent) => {
    setDotPlacement(value);
  };

  return (
    <>
      <Radio.Group onChange={handlePositionChange} value={dotPlacement} style={{ marginBottom: 8 }}>
        <Radio.Button value="top">위</Radio.Button>
        <Radio.Button value="bottom">아래</Radio.Button>
        <Radio.Button value="start">시작</Radio.Button>
        <Radio.Button value="end">끝</Radio.Button>
      </Radio.Group>
      <Carousel dotPlacement={dotPlacement}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  );
};

export default App;