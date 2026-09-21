import * as React from "react";
import { BookOpen, BookX, Library, Search, SearchX, Sparkles } from "lucide-react";
import { Table } from "../../../bases/standalone/Table";
import { Badge } from "../../../bases/standalone/Badge";
import { Stat } from "../../../bases/standalone/Stat";
import { Card } from "../../../bases/standalone/Card";
import { Button } from "../../../bases/standalone/Button";
import { Nativeselect } from "../../../bases/standalone/Nativeselect";
import { Label } from "../../../bases/standalone/Label";
import { Dialog } from "../../../bases/standalone/Dialog";
import { Toast } from "../../../bases/standalone/Toast";
import { Empty } from "../../../bases/standalone/Empty";
import { Divider } from "../../../bases/standalone/Divider";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=60";

interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  available: boolean;
  loans: number;
  desc: string;
}

const CATEGORIES = ["전체", "인문", "IT", "소설"] as const;

const BOOKS: Book[] = [
  { id: "b1", title: "코드가 만드는 세계", author: "정재승", category: "인문", available: true, loans: 42, desc: "소프트웨어가 사회 구조에 미치는 영향을 다룬 교양서." },
  { id: "b2", title: "타입스크립트 핸드북", author: "이한나", category: "IT", available: false, loans: 88, desc: "타입 시스템 기초부터 제네릭까지 실전 예제 중심 구성." },
  { id: "b3", title: "고요한 지구", author: "김초엽", category: "소설", available: true, loans: 65, desc: "기후 위기 이후를 그린 연작 단편집." },
  { id: "b4", title: "디자인 시스템 만들기", author: "박서연", category: "IT", available: true, loans: 51, desc: "토큰 설계부터 컴포넌트 배포까지의 실무 가이드." },
  { id: "b5", title: "아침의 문", author: "한강", category: "소설", available: false, loans: 73, desc: "일상 속 상실과 회복을 다룬 장편 소설." },
  { id: "b6", title: "통계로 세상 읽기", author: "최인철", category: "인문", available: true, loans: 29, desc: "데이터 리터러시를 키우는 통계 입문서." },
  { id: "b7", title: "리액트 아키텍처 패턴", author: "윤도훈", category: "IT", available: true, loans: 58, desc: "대규모 프론트엔드 조직화 전략과 사례." },
  { id: "b8", title: "밤의 도서관", author: "배수아", category: "소설", available: true, loans: 34, desc: "도서관을 배경으로 한 몽환적 연작 소설." },
  { id: "b9", title: "행동경제학 강의", author: "이준영", category: "인문", available: false, loans: 47, desc: "의사결정 편향을 실험 사례로 설명." },
  { id: "b10", title: "클라우드 네이티브 입문", author: "장혜진", category: "IT", available: true, loans: 39, desc: "컨테이너·오케스트레이션 핵심 개념 정리." },
];

const POPULAR = [...BOOKS].sort((a, b) => b.loans - a.loans).slice(0, 5);

export function BooksScreen {
  const [books, setBooks] = React.useState<readonly Book[]>(BOOKS);
  const [category, setCategory] = React.useState("전체");
  const [query, setQuery] = React.useState("");
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [confirmAction, setConfirmAction] = React.useState<"대출" | "예약" | null>(null);

  const selected = books.find((b) => b.id === selectedId);

  const closeConfirm =  => setConfirmAction(null);
  const runConfirm =  => {
    if (!selected || !confirmAction) return;
    if (confirmAction === "대출") {
      setBooks((prev) => prev.map((b) => (b.id === selected.id ? { ...b, available: false, loans: b.loans + 1 } : b)));
      Toast.show({ title: "대출을 신청했어요", description: `${selected.title} · 반납 예정 2주 후`, type: "success" });
    } else {
      Toast.show({ title: "예약을 신청했어요", description: `${selected.title} 반납 시 알려드려요`, type: "info" });
    }
    closeConfirm;
  };

  if (selected) {
    const related = books.filter((b) => b.category === selected.category && b.id !== selected.id).slice(0, 3);
    return (
      <Card
        title={selected.title}
        description={`${selected.author} · ${selected.category}`}
        action={<Badge tone={selected.available ? "success" : "danger"}>{selected.available ? "대출 가능" : "대출 중"}</Badge>}
      >
        <Button variant="plain" tone="brand" size="sm" onClick={ => setSelectedId(null)} style={{ padding: 0, marginBottom: "0.75rem" }}>
          ← 목록으로
        </Button>
        <p>{selected.desc}</p>
        <p style={{ marginTop: "0.5rem" }}>누적 대출 {selected.loans}회</p>

        <div style={{ marginTop: "0.9rem" }}>
          {selected.available ? (
            <Button variant="solid" tone="brand" size="sm" onClick={ => setConfirmAction("대출")}>대출하기</Button>
          ) : (
            <Button variant="subtle" tone="brand" size="sm" onClick={ => setConfirmAction("예약")}>예약하기</Button>
          )}
        </div>

        {related.length > 0 && (
          <>
            <Divider />
            <div style={{ fontWeight: 600, fontSize: "0.8125rem", marginBottom: "0.5rem" }}>같은 분류의 다른 책</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
              {related.map((b) => (
                <div key={b.id} style={{ display: "flex", justifyContent: "space-between", gap: "0.5rem", fontSize: "0.8125rem" }}>
                  <span style={{ minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{b.title}</span>
                  <Badge tone={b.available ? "success" : "danger"}>{b.available ? "대출 가능" : "대출 중"}</Badge>
                </div>
              ))}
            </div>
          </>
        )}

        <Dialog
          open={confirmAction !== null}
          onClose={closeConfirm}
          title={confirmAction === "대출" ? "대출하시겠어요?" : "예약하시겠어요?"}
          actions={
            <>
              <Button variant="subtle" tone="neutral" onClick={closeConfirm}>취소</Button>
              <Button variant="solid" tone="brand" onClick={runConfirm}>확인</Button>
            </>
          }
        >
          <p>{selected.title}{confirmAction === "대출" ? " 을(를) 대출해요. 반납 기한은 2주예요." : " 은(는) 지금 대출 중이에요. 반납되면 알려드려요."}</p>
        </Dialog>
      </Card>
    );
  }

  const active = books.filter((b) => category === "전체" || b.category === category)
    .filter((b) => {
      const q = query.trim;
      return q === "" || b.title.includes(q) || b.author.includes(q);
    });

  const STATS = [
    { label: "전체 장서", value: String(books.length), icon: Library },
    { label: "대출 중", value: String(books.filter((b) => !b.available).length), icon: BookX },
    { label: "대출 가능", value: String(books.filter((b) => b.available).length), icon: BookOpen },
    { label: "신착 도서", value: "4", icon: Sparkles },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <style>{`
        .sa3-bk-stats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.75rem; }
        .sa3-bk-split { display: grid; grid-template-columns: minmax(0, 1fr); gap: 1rem; }
        @container sa3 (min-width: 40rem) { .sa3-bk-stats { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
        @container sa3 (min-width: 44rem) { .sa3-bk-split { grid-template-columns: minmax(0, 2fr) minmax(0, 1fr); } }
      `}</style>

      <div
        className="flex flex-col justify-end gap-1 px-6 py-4"
        style={{
          minHeight: "8rem",
          borderRadius: "var(--semantic-radius-container)",
          backgroundImage:
            `linear-gradient(180deg, transparent 0%, transparent 40%, ` +
            `color-mix(in oklch, var(--semantic-bg-brand-default) 25%, black) 100%), url("${HERO_IMAGE}")`,
          backgroundSize: "cover", backgroundPosition: "center",
        }}
      >
        <span style={{ color: "var(--semantic-fg-on-brand-default)", fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.25 }}>오늘도 책과 함께해요</span>
        <span style={{ color: "var(--semantic-fg-on-brand-default)", opacity: 0.9 }}>신착 도서 4권이 들어왔어요. 아래에서 확인해요.</span>
      </div>

      <div className="sa3-bk-stats">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-container)", padding: "0.9rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "1.75rem", height: "1.75rem", borderRadius: "var(--semantic-radius-control)", background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" }}>
                  <Icon size={14} aria-hidden />
                </span>
              </div>
              <Stat label={s.label} value={s.value} />
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "0.625rem" }}>
        <div className="ods-field" style={{ margin: 0, minWidth: "8rem" }}>
          <Label htmlFor="bk-category">분류</Label>
          <Nativeselect id="bk-category" value={category} onChange={(e) => setCategory(e.target.value)}>
            {CATEGORIES.map((c) => (
              <Nativeselect.Option key={c} value={c}>{c}</Nativeselect.Option>
            ))}
          </Nativeselect>
        </div>
        <div className="ods-field" style={{ margin: 0 }}>
          <Label htmlFor="bk-search">검색</Label>
          <span style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
            <Search size={13} aria-hidden style={{ position: "absolute", left: "0.6rem", color: "var(--semantic-fg-neutral-subtle)", pointerEvents: "none" }} />
            <input
              id="bk-search"
              className="ods-input"
              style={{ paddingInlineStart: "1.9rem", width: "11rem" }}
              placeholder="제목·저자 검색"
              value={query}
              onChange={(e) => {
                const v = e.target.value;
                setQuery(v);
              }}
            />
          </span>
        </div>
      </div>

      {active.length === 0 ? (
        <Empty>
          <Empty.Header>
            <Empty.Media><SearchX size={22} aria-hidden /></Empty.Media>
            <Empty.Title>조건에 맞는 책이 없어요</Empty.Title>
            <Empty.Description>검색어나 분류를 바꿔 보세요.</Empty.Description>
          </Empty.Header>
          <Empty.Content>
            <Button size="sm" variant="subtle" onClick={ => { setQuery(""); setCategory("전체"); }}>필터 초기화</Button>
          </Empty.Content>
        </Empty>
      ) : (
        <div className="sa3-bk-split">
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head>제목</Table.Head>
                <Table.Head>저자</Table.Head>
                <Table.Head>분류</Table.Head>
                <Table.Head>상태</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {active.map((b) => (
                <Table.Row key={b.id}>
                  <Table.Cell>
                    <Button variant="plain" tone="brand" size="sm" onClick={ => setSelectedId(b.id)} style={{ padding: 0, height: "auto" }}>
                      {b.title}
                    </Button>
                  </Table.Cell>
                  <Table.Cell>{b.author}</Table.Cell>
                  <Table.Cell>{b.category}</Table.Cell>
                  <Table.Cell>
                    <Badge tone={b.available ? "success" : "danger"}>{b.available ? "대출 가능" : "대출 중"}</Badge>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>

          <div style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-container)", padding: "0.9rem" }}>
            <div style={{ fontWeight: 600, marginBottom: "0.6rem" }}>인기 대출 TOP 5</div>
            <ol style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {POPULAR.map((b, i) => (
                <li key={b.id} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <Badge tone="neutral" variant="subtle">{i + 1}</Badge>
                  <span style={{ flex: 1, fontSize: "0.8125rem", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{b.title}</span>
                  <span className="text-sm" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{b.loans}회</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
