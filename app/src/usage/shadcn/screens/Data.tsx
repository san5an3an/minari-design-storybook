import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Aspectratio } from "../../../bases/shadcn/Aspectratio";
import { Carousel } from "../../../bases/shadcn/Carousel";
import { Card } from "../../../bases/shadcn/Card";
import { Chart } from "../../../bases/shadcn/Chart";
import { Datatable } from "../../../bases/shadcn/Datatable";
import { Empty } from "../../../bases/shadcn/Empty";
import { Listrow } from "../../../bases/shadcn/Listrow";
import { Marker } from "../../../bases/shadcn/Marker";
import { Pagination } from "../../../bases/shadcn/Pagination";
import { Scrollarea } from "../../../bases/shadcn/Scrollarea";
import { Skeleton } from "../../../bases/shadcn/Skeleton";
import * as React from "react";

const COLUMNS = [
  { key: "region", header: "지역" },
  { key: "orders", header: "주문", numeric: true },
  { key: "revenue", header: "매출", numeric: true },
] as const;

const ROWS = [
  { region: "서울", orders: 1284, revenue: "₩92,400,000" },
  { region: "부산", orders: 731, revenue: "₩48,100,000" },
  { region: "대구", orders: 512, revenue: "₩31,700,000" },
  { region: "인천", orders: 402, revenue: "₩24,900,000" },
] as const;

const SERIES = [
  { month: "1월", 신규: 186, 재구매: 80 },
  { month: "2월", 신규: 305, 재구매: 200 },
  { month: "3월", 신규: 237, 재구매: 120 },
  { month: "4월", 신규: 273, 재구매: 190 },
  { month: "5월", 신규: 209, 재구매: 130 },
  { month: "6월", 신규: 314, 재구매: 240 },
];

// 계열 색을 시스템 토큰으로 지정, Recharts가 --color-{키}로 해석해 연동
const CHART_CONFIG = {
  신규: { label: "신규", color: "var(--semantic-bg-brand-default)" },
  재구매: { label: "재구매", color: "var(--semantic-bg-brand-subtle)" },
};

const FILES = [
  { title: "2026-08 매출 요약.xlsx", sub: "2.4 MB · 어제" },
  { title: "지역별 원장.csv", sub: "812 KB · 3일 전" },
  { title: "분기 보고.pdf", sub: "5.1 MB · 지난주" },
] as const;

export function Data {
  const [page, setPage] = React.useState(1);

  return (
    <div className="flex flex-col gap-6">
      {/* 그림. 수치를 도형으로 표현 */}
      <Card title="월별 유입" description="신규와 재구매 구분">
        <div className="mt-2">
          <Chart config={CHART_CONFIG}>
            <BarChart data={SERIES}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
              <Chart.Tooltip content={<Chart.TooltipContent />} />
              <Bar dataKey="신규" fill="var(--color-신규)" radius={4} />
              <Bar dataKey="재구매" fill="var(--color-재구매)" radius={4} />
            </BarChart>
          </Chart>
        </div>
      </Card>

      {/* 열에 의미가 있는 데이터 표와 하단 페이지네이션 */}
      <Card title="지역별 실적" description="열끼리 견주는 자료라 표 사용">
        <div className="mt-2 flex flex-col gap-4">
          <Datatable columns={COLUMNS} rows={ROWS} />
          <Pagination page={page} total={5} onPage={setPage} />
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* 목록, 행 단위 데이터 */}
        <Card title="첨부" description="한 줄이 하나의 대상이라 목록 사용">
          <div className="mt-2">
            <Listrow.List>
              {FILES.map((f) => (
                <Listrow key={f.title} interactive title={f.title} sub={f.sub} />
              ))}
            </Listrow.List>
          </div>
        </Card>

        {/* 빈 상태에서 이유와 다음 행동 함께 안내 */}
        <Card title="보관함" description="비었을 때의 모습">
          <div className="mt-2">
            <Empty>
              <Empty.Header>
                <Empty.Media variant="icon" />
                <Empty.Title>보관한 자료가 없어요</Empty.Title>
                <Empty.Description>
                  표에서 줄을 골라 보관하면 여기에 모입니다.
                </Empty.Description>
              </Empty.Header>
            </Empty>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* 넘침 영역과 구분선 */}
        <Card title="변경 내역" description="넘치면 이 안에서만 스크롤">
          <div className="mt-2">
            <Scrollarea style={{ height: "11rem" }}>
              <div className="flex flex-col gap-3 pe-3">
                <Marker>
                  <Marker.Content>오늘</Marker.Content>
                </Marker>
                {["가격표를 고쳤습니다", "지역 코드를 합쳤습니다", "중복 3건을 지웠습니다"].map((t) => (
                  <p
                    key={t}
                    style={{
                      color: "var(--semantic-fg-neutral-subtle)",
                      fontSize: "var(--semantic-text-body-sm)",
                    }}
                  >
                    {t}
                  </p>
                ))}
                <Marker variant="separator">
                  <Marker.Content>어제</Marker.Content>
                </Marker>
                {["초기 자료를 올렸습니다", "권한을 나눴습니다"].map((t) => (
                  <p
                    key={t}
                    style={{
                      color: "var(--semantic-fg-neutral-subtle)",
                      fontSize: "var(--semantic-text-body-sm)",
                    }}
                  >
                    {t}
                  </p>
                ))}
              </div>
            </Scrollarea>
          </div>
        </Card>

        {/* 비율 유지 위치 고정 상자 */}
        <Card title="불러오는 중" description="위치를 먼저 잡아 화면이 튀지 않게 함">
          <div className="mt-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Skeleton style={{ height: "2.5rem", width: "2.5rem", borderRadius: "9999px" }} />
              <div className="flex flex-1 flex-col gap-2">
                <Skeleton style={{ height: "0.75rem", width: "60%" }} />
                <Skeleton style={{ height: "0.75rem", width: "40%" }} />
              </div>
            </div>
            <Aspectratio ratio={16 / 9}>
              <div
                className="flex size-full items-center justify-center"
                style={{
                  background: "var(--semantic-bg-neutral-subtle)",
                  borderRadius: "var(--semantic-radius-container)",
                  color: "var(--semantic-fg-neutral-subtlest)",
                  fontSize: "var(--semantic-text-caption)",
                }}
              >
                16 : 9
              </div>
            </Aspectratio>
          </div>
        </Card>
      </div>

      {/* 옆으로 넘겨보기 */}
      <Card title="추천 보고서" description="옆으로 넘겨 보기">
        <div className="mt-2 px-10">
          <Carousel>
            <Carousel.Content>
              {["주간 요약", "이탈 분석", "재구매 코호트", "지역 비교"].map((t) => (
                <Carousel.Item key={t} className="md:basis-1/2">
                  <div
                    className="flex h-28 items-center justify-center"
                    style={{
                      background: "var(--semantic-bg-neutral-subtle)",
                      borderRadius: "var(--semantic-radius-container)",
                      color: "var(--semantic-fg-neutral-default)",
                      fontSize: "var(--semantic-text-body-sm)",
                    }}
                  >
                    {t}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel.Content>
            <Carousel.Previous />
            <Carousel.Next />
          </Carousel>
        </div>
      </Card>
    </div>
  );
}
