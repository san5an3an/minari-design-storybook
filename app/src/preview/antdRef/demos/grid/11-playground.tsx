/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/grid.json 의 examples[11] ("Playground")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { Col, Row, Slider } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles((props) => {
  const { css, cssVar } = props;
  return {
    colContainer: css`
      border: 0;
      padding-block: 0 !important;
      background-color: transparent !important;
    `,
    box: css`
      height: 120px;
      font-size: ${cssVar.fontSize};
      line-height: 120px;
      background-color: #0092ff;
      border-radius: ${cssVar.borderRadiusSM};
    `,
    code: css`
      direction: ltr;
      padding: ${cssVar.paddingXS} ${cssVar.padding};
      font-size: ${cssVar.fontSize};
      background-color: #f9f9f9;
      border-radius: ${cssVar.borderRadius};
    `,
  };
});

const gutters: Record<PropertyKey, number> = {};
const vgutters: Record<PropertyKey, number> = {};
const colCounts: Record<PropertyKey, number> = {};

[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  gutters[i] = value;
});

[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  vgutters[i] = value;
});

[2, 3, 4, 6, 8, 12].forEach((value, i) => {
  colCounts[i] = value;
});

const App: React.FC = () => {
  const { styles } = useStyles();

  const [gutterKey, setGutterKey] = useState(1);
  const [vgutterKey, setVgutterKey] = useState(1);
  const [colCountKey, setColCountKey] = useState(2);

  const cols: React.ReactNode[] = [];
  const colCount = colCounts[colCountKey];
  let colCode = '';
  for (let i = 0; i < colCount; i++) {
    cols.push(
      <Col className={styles.colContainer} key={i.toString()} span={24 / colCount}>
        <div className={styles.box}>열</div>
      </Col>,
    );
    colCode += `  <Col span={${24 / colCount}} />\n`;
  }

  return (
    <>
      <span>가로 간격 (px): </span>
      <div style={{ width: '50%' }}>
        <Slider
          min={0}
          max={Object.keys(gutters).length - 1}
          value={gutterKey}
          onChange={setGutterKey}
          marks={gutters}
          step={null}
          tooltip={{ formatter: (value) => gutters[value as number] }}
        />
      </div>
      <span>세로 간격 (px): </span>
      <div style={{ width: '50%' }}>
        <Slider
          min={0}
          max={Object.keys(vgutters).length - 1}
          value={vgutterKey}
          onChange={setVgutterKey}
          marks={vgutters}
          step={null}
          tooltip={{ formatter: (value) => vgutters[value as number] }}
        />
      </div>
      <span>열 개수:</span>
      <div style={{ width: '50%', marginBottom: 48 }}>
        <Slider
          min={0}
          max={Object.keys(colCounts).length - 1}
          value={colCountKey}
          onChange={setColCountKey}
          marks={colCounts}
          step={null}
          tooltip={{ formatter: (value) => colCounts[value as number] }}
        />
      </div>
      <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>
        {cols}
        {cols}
      </Row>
      또 다른 행:
      <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>{cols}</Row>
      <pre
        className={styles.code}
      >{`<Row gutter={[${gutters[gutterKey]}, ${vgutters[vgutterKey]}]}>\n${colCode}\n${colCode}</Row>`}</pre>
      <pre
        className={styles.code}
      >{`<Row gutter={[${gutters[gutterKey]}, ${vgutters[vgutterKey]}]}>\n${colCode}</Row>`}</pre>
    </>
  );
};

export default App;