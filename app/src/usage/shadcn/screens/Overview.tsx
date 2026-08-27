import { Avatar } from "../../../bases/shadcn/Avatar";
import { Badge } from "../../../bases/shadcn/Badge";
import { Button } from "../../../bases/shadcn/Button";
import { Card } from "../../../bases/shadcn/Card";
import { Divider } from "../../../bases/shadcn/Divider";
import { Progress } from "../../../bases/shadcn/Progress";
import { Table } from "../../../bases/shadcn/Table";

const METRICS = [
  { label: "월 매출", value: "₩228,441,000", delta: "+3.3%", up: true },
  { label: "지출", value: "₩25,108,000", delta: "−3.3%", up: false },
  { label: "신규 계약", value: "458", delta: "+3.3%", up: true },
  { label: "순이익", value: "₩203,133,000", delta: "+4.1%", up: true },
] as const;

const GOALS = [
  { label: "분기 목표", value: 76 },
  { label: "온보딩 완료", value: 42 },
  { label: "응답 SLA", value: 93 },
] as const;

const MEMBERS = [
  { id: "#4586936", name: "김서연", email: "seoyeon@acme.co.kr", role: "프로덕트 매니저", type: "정규", tone: "brand" },
  { id: "#4586937", name: "박도윤", email: "doyun@acme.co.kr", role: "시니어 디자이너", type: "정규", tone: "neutral" },
  { id: "#4586933", name: "이하은", email: "haeun@acme.co.kr", role: "기술이사", type: "정규", tone: "success" },
  { id: "#4586921", name: "정민준", email: "minjun@acme.co.kr", role: "데이터 분석", type: "계약", tone: "warning" },
] as const;

function Metric({ label, value, delta, up }: {
  label: string; value: string; delta: string; up: boolean;
}) {
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <span
          style={{
            color: "var(--semantic-fg-neutral-subtle)",
            fontSize: "var(--semantic-text-caption)",
            letterSpacing: "var(--semantic-tracking-caption)",
          }}
        >
          {label}
        </span>
        <div className="flex flex-wrap items-baseline gap-2">
          <span
            style={{
              color: "var(--semantic-fg-neutral-default)",
              fontSize: "var(--semantic-text-heading)",
              letterSpacing: "var(--semantic-tracking-heading)",
              lineHeight: "var(--semantic-line-height-tight)",
            }}
          >
            {value}
          </span>
          {/* 증감을 색과 부호 글자로 함께 표시 */}
          <Badge variant="subtle" tone={up ? "success" : "danger"}>
            {delta}
          </Badge>
        </div>
      </div>
    </Card>
  );
}

export function Overview {
  return (
    <div className="flex flex-col gap-6">
      {/* 지표 카드 4개. 좁아지면 2개씩, 더 좁아지면 1개씩 정렬 */}
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(13rem,1fr))]">
        {METRICS.map((m) => (
          <Metric key={m.label} {...m} />
        ))}
      </div>

      {/* 진행률 표시 위치, 숫자 대신 진행 정도로 표시 */}
      <Card title="이번 분기 진척" description="목표 대비 현재 위치">
        <div className="mt-2 flex flex-col gap-4">
          {GOALS.map((g) => (
            <Progress key={g.label} value={g.value} label={g.label} showValue />
          ))}
        </div>
      </Card>

      {/* 구성원 표. 지표의 근거가 되는 개별 항목 */}
      <Card
        title="구성원"
        description={`${MEMBERS.length}명`}
        action={
          <div className="flex gap-2">
            <Button variant="outline" size="sm">필터</Button>
            <Button variant="solid" tone="brand" size="sm">추가</Button>
          </div>
        }
      >
        <div className="mt-2">
          <Divider />
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head>사번</Table.Head>
                <Table.Head>이름</Table.Head>
                <Table.Head>직무</Table.Head>
                <Table.Head>고용 형태</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {MEMBERS.map((m) => (
                <Table.Row key={m.id}>
                  <Table.Cell>
                    <span
                      style={{
                        color: "var(--semantic-fg-neutral-subtle)",
                        fontSize: "var(--semantic-text-body-sm)",
                      }}
                    >
                      {m.id}
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      {/* 사진 없는 상태를 기본값으로 지정. 외부 이미지를 불러오면 네트워크 차단 환경에서 화면이 깨지는 문제가 있음 */}
                      <Avatar size="sm" fallback={m.name.slice(0, 1)} />
                      <div className="flex min-w-0 flex-col">
                        <span style={{ color: "var(--semantic-fg-neutral-default)" }}>
                          {m.name}
                        </span>
                        <span
                          className="truncate"
                          style={{
                            color: "var(--semantic-fg-neutral-subtlest)",
                            fontSize: "var(--semantic-text-caption)",
                          }}
                        >
                          {m.email}
                        </span>
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell>{m.role}</Table.Cell>
                  <Table.Cell>
                    <Badge variant="subtle" tone={m.tone}>{m.type}</Badge>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </Card>
    </div>
  );
}
