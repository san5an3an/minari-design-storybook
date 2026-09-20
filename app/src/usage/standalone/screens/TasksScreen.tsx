import * as React from "react";
import { Table } from "../../../bases/standalone/Table";
import { Badge } from "../../../bases/standalone/Badge";
import { Pagination } from "../../../bases/standalone/Pagination";
import { Card } from "../../../bases/standalone/Card";

interface Task {
  id: string;
  title: string;
  project: string;
  owner: string;
  due: string;
  status: "할 일" | "진행 중" | "완료";
  desc: string;
}

const TASKS: Task[] = [
  { id: "t1", title: "결제 API 연동 테스트", project: "결제 시스템 마이그레이션", owner: "김도현", due: "09-19", status: "진행 중", desc: "레거시 결제 게이트웨이와 신규 API 간 트랜잭션 정합성을 검증." },
  { id: "t2", title: "디자인 QA", project: "고객 포털 v2", owner: "이서아", due: "09-19", status: "할 일", desc: "피그마 최종본과 실제 화면 간 픽셀 단위 차이를 점검한다." },
  { id: "t3", title: "스테이징 배포", project: "결제 시스템 마이그레이션", owner: "박준서", due: "09-20", status: "진행 중", desc: "스테이징 환경에 최신 브랜치를 배포하고 스모크 테스트를 돌린다." },
  { id: "t4", title: "접근성 점검", project: "고객 포털 v2", owner: "최유나", due: "09-22", status: "할 일", desc: "WCAG 2.2 AA 기준으로 키보드 내비게이션과 스크린리더 흐름을 점검한다." },
  { id: "t5", title: "API 응답 스키마 문서화", project: "내부 대시보드 개편", owner: "정하은", due: "09-18", status: "완료", desc: "신규 엔드포인트 응답 형식을 OpenAPI 스펙으로 정리했다." },
  { id: "t6", title: "온보딩 플로우 개선", project: "Cobalt 모바일 앱 리뉴얼", owner: "한지우", due: "09-23", status: "할 일", desc: "첫 실행 시 튜토리얼 이탈률을 낮추기 위한 단계 축소안." },
  { id: "t7", title: "다크모드 대응", project: "Cobalt 모바일 앱 리뉴얼", owner: "오세준", due: "09-24", status: "진행 중", desc: "전 화면 색 토큰을 다크 팔레트로 매핑하고 대비를 재검증한다." },
  { id: "t8", title: "결제 실패 알림 로직", project: "결제 시스템 마이그레이션", owner: "윤새별", due: "09-21", status: "할 일", desc: "결제 실패 시 사용자·운영팀 양쪽에 알림을 보내는 로직을 구현한다." },
  { id: "t9", title: "대시보드 위젯 재배치", project: "내부 대시보드 개편", owner: "송민재", due: "09-25", status: "할 일", desc: "사용 빈도 데이터를 기반으로 위젯 기본 배치를 다시 정한다." },
  { id: "t10", title: "고객 지원 챗봇 연동", project: "고객 포털 v2", owner: "임도현", due: "09-26", status: "할 일", desc: "기존 헬프데스크 API 를 챗봇 위젯에 연결한다." },
  { id: "t11", title: "성능 프로파일링", project: "Cobalt 모바일 앱 리뉴얼", owner: "김도현", due: "09-20", status: "완료", desc: "초기 로딩 3초를 1.2초로 줄인 결과를 문서화했다." },
  { id: "t12", title: "결제 영수증 PDF 생성", project: "결제 시스템 마이그레이션", owner: "박준서", due: "09-27", status: "할 일", desc: "결제 완료 후 영수증을 PDF 로 생성해 이메일로 발송한다." },
];

const STATUS_TONE: Record<Task["status"], string> = {
  "할 일": "neutral",
  "진행 중": "brand",
  완료: "success",
};

const PAGE_SIZE = 6;

export function TasksScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [page, setPage] = React.useState(1);
  const selected = TASKS.find((t) => t.id === selectedId);

  if (selected) {
    return (
      <Card
        title={selected.title}
        description={`${selected.project} · ${selected.owner} 담당 · 마감 ${selected.due}`}
        action={<Badge tone={STATUS_TONE[selected.status]}>{selected.status}</Badge>}
      >
        <button
          type="button"
          onClick={ => setSelectedId(null)}
          style={{ background: "none", border: "none", color: "var(--semantic-fg-brand-default)", cursor: "pointer", padding: 0, marginBottom: "0.75rem" }}
        >
          ← 목록으로
        </button>
        <p>{selected.desc}</p>
      </Card>
    );
  }

  const shown = TASKS.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const pages = Math.ceil(TASKS.length / PAGE_SIZE);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>작업</Table.Head>
            <Table.Head>프로젝트</Table.Head>
            <Table.Head>담당자</Table.Head>
            <Table.Head>마감</Table.Head>
            <Table.Head>상태</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {shown.map((t) => (
            <Table.Row key={t.id} className="cursor-pointer" >
              <Table.Cell>
                <button
                  type="button"
                  onClick={ => setSelectedId(t.id)}
                  style={{ background: "none", border: "none", color: "var(--semantic-fg-brand-default)", cursor: "pointer", padding: 0, font: "inherit", textAlign: "left" }}
                >
                  {t.title}
                </button>
              </Table.Cell>
              <Table.Cell>{t.project}</Table.Cell>
              <Table.Cell>{t.owner}</Table.Cell>
              <Table.Cell>{t.due}</Table.Cell>
              <Table.Cell>
                <Badge tone={STATUS_TONE[t.status]}>{t.status}</Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Pagination page={page} total={pages} onPage={setPage} />
    </div>
  );
}
