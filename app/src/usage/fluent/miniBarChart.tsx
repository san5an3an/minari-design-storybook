export interface MiniBarDatum {
  label: string;
  value: number;
}

function niceTicks(max: number, count = 3, minStep = 0): { top: number; step: number } {
  const raw = Math.max(max, 1) / count;
  const magnitude = 10 ** Math.floor(Math.log10(raw));
  const normalized = raw / magnitude;
  const base = (normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10) * magnitude;
  const step = Math.max(base, minStep);
  // 최댓값 기준 눈금 상단값 계산
  return { top: Math.ceil(Math.max(max, 1) / step) * step, step };
}

export function MiniBarChart({
  data,
  title,
  width = 240,
  height = 104,
}: {
  data: readonly MiniBarDatum[];
  // 접근성 이름. 카드 제목과 같은 문구 전달
  title: string;
  width?: number;
  height?: number;
}) {
  const max = Math.max(...data.map((d) => d.value), 1);
  const integerScale = data.every((d) => Number.isInteger(d.value));
  const { top, step } = niceTicks(max, 3, integerScale ? 1 : 0);
  const ticks: number[] = [];
  for (let v = 0; v <= top; v += step) ticks.push(v);

  // 축 눈금, 값, 범주 라벨 위치 지정
  const padLeft = 22;
  const padTop = 12;
  const padBottom = 16;
  const plotW = Math.max(width - padLeft, 1);
  const plotH = Math.max(height - padTop - padBottom, 1);
  const slot = plotW / Math.max(data.length, 1);
  const barW = Math.max(Math.min(slot - 12, 44), 6);

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={`${title} 막대그래프`}
      style={{ display: "block" }}
    >
      {/* 0 눈금선만 굵게 표시 */}
      {ticks.map((v) => {
        const y = padTop + plotH - (v / top) * plotH;
        return (
          <g key={`tick-${v}`}>
            <line
              x1={padLeft}
              y1={y}
              x2={width}
              y2={y}
              stroke={v === 0 ? "var(--colorNeutralStroke1)" : "var(--colorNeutralStroke2)"}
              strokeWidth={v === 0 ? 1 : 0.5}
            />
            <text x={padLeft - 4} y={y + 3} fontSize="8" textAnchor="end" fill="var(--colorNeutralForeground3)">
              {v}
            </text>
          </g>
        );
      })}
      {/* y축 */}
      <line
        x1={padLeft}
        y1={padTop}
        x2={padLeft}
        y2={padTop + plotH}
        stroke="var(--colorNeutralStroke1)"
        strokeWidth={1}
      />
      {data.map((d, i) => {
        const barH = (d.value / top) * plotH;
        const x = padLeft + i * slot + (slot - barW) / 2;
        const barTop = padTop + plotH - barH;
        return (
          <g key={d.label}>
            <rect x={x} y={barTop} width={barW} height={barH} fill="var(--colorBrandBackground)" rx={3}>
              <title>{`${d.label} ${d.value}`}</title>
            </rect>
            <text
              x={x + barW / 2}
              y={barTop - 3}
              fontSize="8"
              textAnchor="middle"
              fill="var(--colorNeutralForeground2)"
            >
              {d.value}
            </text>
            <text
              x={x + barW / 2}
              y={height - 4}
              fontSize="8.5"
              textAnchor="middle"
              fill="var(--colorNeutralForeground3)"
            >
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
