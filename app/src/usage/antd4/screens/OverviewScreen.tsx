import * as React from "react";
import { Flex, Table, Tag, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer,
  Tooltip as ChartTooltip, XAxis, YAxis,
} from "recharts";
import {
  AXIS_MAX, BRANDS, CHANNELS, FOOTNOTES, SCORES, SCORE_AXES,
  TOTAL_REVENUE, shareOf, totalScore, type Brand,
} from "../data";
import { CHART, Figure, HeatCell, HeatLegend, LegendItem, Note, SERIES, StatTile, fmt, pct1 } from "../parts";

// ChartTooltip은 recharts Tooltip, antd 충돌 방지용 이름 사용

const SERIES_BY_RANK = [SERIES.first, SERIES.second, SERIES.third, SERIES.fourth] as const;
// 계열색 4개뿐, 5, 6번째는 중립 면 대체. 없는 series-5는 셀 투명 처리
const barColor = (i: number) => SERIES_BY_RANK[i] ?? SERIES.idle;

export function OverviewScreen {
  const revenueData = BRANDS.map((b) => ({ name: b.name, value: b.revenue, share: shareOf(b) }));
  const channelData = CHANNELS.map((c) => ({ name: c.label, value: c.rate }));

  const topBrand = BRANDS[0];
  const risingBrand = [...BRANDS].sort((a, b) => b.yoy - a.yoy)[0];
  const totalStores = BRANDS.reduce((s, b) => s + b.stores, 0);

  // 제목은 짧고 고유하게 지정, 측정 대상 설명은 caption 으로 표시
  const revenueColumns: ColumnsType<Brand> = [
    {
      title: "브랜드",
      dataIndex: "name",
      // 이름 셀 고정 폭, 이름은 title 유지. 옆 셀 auto 시 0px 로 눌리는 문제임
      width: 104,
      render: (name: string, row) => (
        <span title={`${name} · ${row.kind}`} style={{ display: "block", inlineSize: 96, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {name}
        </span>
      ),
    },
    {
      title: "매출",
      dataIndex: "revenue",
      align: "right",
      render: (v: number) => <span style={{ fontVariantNumeric: "tabular-nums" }}>{fmt(v)}억</span>,
    },
    {
      title: "점유",
      key: "share",
      align: "right",
      render: (_, row) => <span style={{ fontVariantNumeric: "tabular-nums" }}>{pct1(shareOf(row))}%</span>,
    },
    {
      title: "전년비",
      dataIndex: "yoy",
      align: "right",
      render: (v: number) => (
        <Tag color={v >= 0 ? "success" : "error"} style={{ marginInlineEnd: 0, fontVariantNumeric: "tabular-nums" }}>
          {v >= 0 ? "+" : ""}{pct1(v)}%
        </Tag>
      ),
    },
  ];

  return (
    <Flex vertical gap={24}>
      <div className="rp-axes">

        {/* 축 1, 매출 점유 */}
        <section className="rp-axis">
          <Typography.Title level={4} style={{ marginBlock: 0 }}>브랜드별 매출 점유</Typography.Title>
          <Typography.Paragraph type="secondary" style={{ marginBlockStart: 4, marginBlockEnd: 12, fontSize: 13 }}>
            매출을 공개한 여섯 브랜드 안에서의 비중입니다. 시장 전체가 아닙니다.
          </Typography.Paragraph>

          <div className="rp-bento">
            <div className="rp-c3"><StatTile label="합계 매출" value={fmt(TOTAL_REVENUE)} unit="억" sub="여섯 브랜드 합" /></div>
            <div className="rp-c3"><StatTile label="매장 수" value={fmt(totalStores)} unit="개" sub="같은 여섯 브랜드" /></div>
            <div className="rp-c3"><StatTile label="1위 점유" value={`${pct1(shareOf(topBrand))}%`} sub={topBrand.name} /></div>
            <div className="rp-c3"><StatTile label="최고 성장" value={`+${pct1(risingBrand.yoy)}%`} unit="전년비" sub={risingBrand.name} tone="up" /></div>

            <Figure
              className="rp-c12"
              title="매출과 점유"
              caption="막대는 연매출(억원), 표의 점유는 여섯 브랜드 합을 분모로 계산한 값입니다."
              source="가상 자료 · 여섯 브랜드 · 2026 회계연도 기준"
            >
              {/* rp-pair 로 폭 고정, 넘치는 영역은 rp-scrollx 로 스크롤 처리 */}
              <div className="rp-pair">
                {/* 좁은 영역엔 세로 막대 사용. 가로 막대 6행은 좁을수록 길어져 높이가 어긋나는 문제 있음 */}
                {/* margin.left에 음수 금지. 주면 Y축 눈금 앞자리가 잘려 더 작은 값처럼 보임 */}
                <div style={{ inlineSize: "100%", blockSize: 208 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueData} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
                      <CartesianGrid stroke={CHART.grid} vertical={false} />
                      <XAxis dataKey="name" tickLine={false} axisLine={false} interval={0} tick={CHART.tick} angle={-30} textAnchor="end" height={52} />
                      <YAxis tickLine={false} axisLine={false} tick={CHART.tick} width={44} />
                      <ChartTooltip
                        cursor={CHART.cursor}
                        contentStyle={CHART.tooltip}
                        itemStyle={CHART.tooltipItem}
                        labelStyle={CHART.tooltipLabel}
                        // Formatter 반환값 ValueType|undefined. unknown 받아 좁히기
                        formatter={(v: unknown) => [`${fmt(Number(v))}억`, "매출"] as [string, string]}
                      />
                      {/* isAnimationActive={false} 지정, 재렌더 재생돼 폭 0 찍힐 수 있음 */}
                      <Bar dataKey="value" radius={[4, 4, 0, 0]} isAnimationActive={false}>
                        {revenueData.map((_, i) => <Cell key={i} fill={barColor(i)} />)}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="rp-scrollx">
                  <Table
                    rowKey="id"
                    size="small"
                    pagination={false}
                    columns={revenueColumns}
                    dataSource={BRANDS}
                  />
                </div>
              </div>
            </Figure>

            <Figure
              className="rp-c12"
              title="평가 항목별 점수"
              caption="네 항목이 각각 25점 만점이고, 넷을 더한 값이 총점(100점)입니다."
              source="가상 자료 · 분기 평가 · 항목당 만점 25"
            >
              <div className="rp-scrollx">
                <table style={{ inlineSize: "100%", borderCollapse: "separate", borderSpacing: "4px 4px", minInlineSize: 320 }}>
                  <thead>
                    <tr>
                      <th style={{ inlineSize: 96, textAlign: "start" }}>
                        <Typography.Text type="secondary" style={{ fontSize: 11 }}>브랜드</Typography.Text>
                      </th>
                      {SCORE_AXES.map((a) => (
                        <th key={a.id} style={{ textAlign: "center" }}>
                          <Typography.Text type="secondary" style={{ fontSize: 11 }}>{a.label}</Typography.Text>
                        </th>
                      ))}
                      <th style={{ textAlign: "end", paddingInlineStart: 8 }}>
                        <Typography.Text type="secondary" style={{ fontSize: 11 }}>총점</Typography.Text>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {BRANDS.map((b) => (
                      <tr key={b.id}>
                        {/* 고정 폭 지정, 전체 이름은 title 속성으로 표시 */}
                        <td>
                          <span title={b.name} style={{ display: "block", inlineSize: 88, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: 12.5 }}>
                            {b.name}
                          </span>
                        </td>
                        {SCORE_AXES.map((a) => (
                          <td key={a.id}>
                            <HeatCell value={SCORES[b.id][a.id]} max={AXIS_MAX} title={`${b.name} · ${a.label} ${SCORES[b.id][a.id]}/${AXIS_MAX}`} />
                          </td>
                        ))}
                        <td style={{ textAlign: "end", paddingInlineStart: 8, fontVariantNumeric: "tabular-nums", fontSize: 12.5 }}>
                          {totalScore(b.id)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Flex justify="space-between" align="center" gap={12} wrap style={{ marginBlockStart: 12 }}>
                <HeatLegend max={AXIS_MAX} />
                <Typography.Text type="secondary" style={{ fontSize: 11 }}>
                  총점은 100점 대비라 셀 색과 다른 자입니다. 더하거나 견주지 않습니다.
                </Typography.Text>
              </Flex>
            </Figure>
          </div>
        </section>

        {/* 축 2, 채널 도입률 */}
        <section className="rp-axis">
          <Typography.Title level={4} style={{ marginBlock: 0 }}>주문 채널 도입률</Typography.Title>
          <Typography.Paragraph type="secondary" style={{ marginBlockStart: 4, marginBlockEnd: 12, fontSize: 13 }}>
            매장 수를 분모로 한 값입니다. 한 매장이 여러 채널을 동시에 씁니다.
          </Typography.Paragraph>

          {/* rp-axis 를 flex, rp-bento 를 flex:1 로 지정해 확장하기 */}
          <div className="rp-bento">
            {CHANNELS.map((c) => (
              <div className="rp-c6" key={c.id}>
                <StatTile
                  label={c.label}
                  value={`${pct1(c.rate)}%`}
                  sub={`전년비 ${c.delta >= 0 ? "+" : ""}${pct1(c.delta)}%p · ${c.note}`}
                  tone={c.delta >= 0 ? "up" : "down"}
                />
              </div>
            ))}

            <Figure
              className="rp-c12"
              title="채널별 도입 비율"
              caption="네 막대는 서로 겹칩니다. 합이 100이 되지 않는 것이 정상입니다."
              source="가상 자료 · 분모 = 조사 대상 매장 수"
              action={<Typography.Text type="secondary" style={{ fontSize: 11 }}>단위 %</Typography.Text>}
            >
              <div style={{ inlineSize: "100%", blockSize: 200 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={channelData} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
                    <CartesianGrid stroke={CHART.grid} vertical={false} />
                    <XAxis dataKey="name" tickLine={false} axisLine={false} interval={0} tick={CHART.tick} height={28} />
                    <YAxis tickLine={false} axisLine={false} tick={CHART.tick} width={44} domain={[0, 100]} />
                    <ChartTooltip
                      cursor={CHART.cursor}
                      contentStyle={CHART.tooltip}
                      itemStyle={CHART.tooltipItem}
                      labelStyle={CHART.tooltipLabel}
                      formatter={(v: unknown) => [`${pct1(Number(v))}%`, "도입률"] as [string, string]}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} isAnimationActive={false}>
                      {channelData.map((_, i) => <Cell key={i} fill={barColor(i)} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <Flex gap={12} wrap style={{ marginBlockStart: 10 }}>
                {CHANNELS.map((c, i) => (
                  <LegendItem key={c.id} color={barColor(i)} label={c.label} value={`${pct1(c.rate)}%`} />
                ))}
              </Flex>
            </Figure>

            <div className="rp-c12">
              <Note tone="stop" title="네 값을 하나의 원으로 합치지 마세요">
                한 매장이 배달앱·키오스크·모바일 주문·구독을 동시에 씁니다. 합치면 「전체의 몇 퍼센트」라는
              </Note>
            </div>

            <div className="rp-c12">
              <Note tone="info" title="도입률은 켜 둔 것만 셉니다">
                켜 두고 쓰지 않는 매장은 가려내지 못합니다. 실사용 비율은 다른 자로 재야 하고, 이 화면에는 없습니다.
              </Note>
            </div>
          </div>
        </section>
      </div>

      <section style={{ borderBlockStart: "1px solid var(--semantic-border-neutral-subtle)", paddingBlockStart: 16 }}>
        <Typography.Text strong style={{ fontSize: 13 }}>이 수치를 읽는 법</Typography.Text>
        <div
          style={{
            marginBlockStart: 10,
            display: "grid",
            gap: "0.75rem 1.25rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
          }}
        >
          {FOOTNOTES.map((f) => (
            <div key={f.title} style={{ minWidth: 0 }}>
              <Typography.Text strong style={{ fontSize: 12.5 }}>{f.title}</Typography.Text>
              <Typography.Paragraph type="secondary" style={{ marginBlockEnd: 0, marginBlockStart: 2, fontSize: 12, lineHeight: 1.7 }}>
                {f.body}
              </Typography.Paragraph>
            </div>
          ))}
        </div>
      </section>
    </Flex>
  );
}
