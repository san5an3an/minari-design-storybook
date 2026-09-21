import * as React from "react";
import { Boxes, PackageCheck, PackageX, Search, SearchX, Wallet } from "lucide-react";
import { Segmented } from "../../../bases/standalone/Segmented";
import { Badge } from "../../../bases/standalone/Badge";
import { Table } from "../../../bases/standalone/Table";
import { Stat } from "../../../bases/standalone/Stat";
import { Card } from "../../../bases/standalone/Card";
import { Button } from "../../../bases/standalone/Button";
import { Switch } from "../../../bases/standalone/Switch";
import { Breadcrumb } from "../../../bases/standalone/Breadcrumb";
import { Nativeselect } from "../../../bases/standalone/Nativeselect";
import { Label } from "../../../bases/standalone/Label";
import { Empty } from "../../../bases/standalone/Empty";

interface Item {
  id: string;
  name: string;
  category: string;
  sku: string;
  stock: number;
  price: number;
  desc: string;
}

const CATEGORIES = ["전체", "전자기기", "가구", "문구", "소모품"] as const;
const REORDER_STATUS = ["재주문 없음", "재주문 요청됨", "입고 대기"] as const;

const ITEMS: Item[] = [
  { id: "i1", name: "무선 마우스", category: "전자기기", sku: "SKU-1021", stock: 84, price: 22000, desc: "2.4GHz 무선, 1600DPI, 건전지 별매." },
  { id: "i2", name: "모니터 스탠드", category: "가구", sku: "SKU-1022", stock: 12, price: 45000, desc: "높이 조절 가능, 최대 32인치 지원." },
  { id: "i3", name: "A4 복사용지 500매", category: "소모품", sku: "SKU-1023", stock: 3, price: 6000, desc: "80g/m², 친환경 인증." },
  { id: "i4", name: "기계식 키보드", category: "전자기기", sku: "SKU-1024", stock: 27, price: 89000, desc: "청축, 유선 USB-C, 한영 각인." },
  { id: "i5", name: "사무용 의자", category: "가구", sku: "SKU-1025", stock: 8, price: 158000, desc: "메쉬 등받이, 요추 지지대 포함." },
  { id: "i6", name: "네임펜 12색 세트", category: "문구", sku: "SKU-1026", stock: 45, price: 9800, desc: "수성, 화이트보드 겸용." },
  { id: "i7", name: "27인치 모니터", category: "전자기기", sku: "SKU-1027", stock: 2, price: 289000, desc: "QHD, IPS 패널, 75Hz." },
  { id: "i8", name: "책상 정리함", category: "가구", sku: "SKU-1028", stock: 19, price: 32000, desc: "3단 서랍, 조립식." },
  { id: "i9", name: "스테이플러", category: "문구", sku: "SKU-1029", stock: 31, price: 4500, desc: "20매 철심, 예비 심 포함." },
  { id: "i10", name: "포스트잇 세트", category: "소모품", sku: "SKU-1030", stock: 60, price: 5200, desc: "5색 구성, 각 100매." },
  { id: "i11", name: "웹캠 1080p", category: "전자기기", sku: "SKU-1031", stock: 6, price: 52000, desc: "자동 초점, 내장 마이크." },
  { id: "i12", name: "화이트보드 마커", category: "문구", sku: "SKU-1032", stock: 4, price: 7200, desc: "4색 세트, 지우개 포함." },
];

export function InventoryScreen {
  const [filter, setFilter] = React.useState<string[]>(["전체"]);
  const [lowOnly, setLowOnly] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [reorderStatus, setReorderStatus] = React.useState<Record<string, string>>({});

  const active = filter[0] ?? "전체";
  const selected = ITEMS.find((i) => i.id === selectedId);

  if (selected) {
    const related = ITEMS.filter((i) => i.category === selected.category && i.id !== selected.id).slice(0, 3);
    const status = reorderStatus[selected.id] ?? REORDER_STATUS[0];
    return (
      <Card
        title={selected.name}
        description={`${selected.category} · ${selected.sku}`}
        action={<Badge tone={selected.stock < 10 ? "danger" : "success"}>{selected.stock < 10 ? "재고 부족" : "재고 정상"}</Badge>}
      >
        <Button variant="plain" tone="brand" size="sm" onClick={ => setSelectedId(null)} style={{ padding: 0, marginBottom: "0.75rem" }}>
          ← 목록으로
        </Button>
        <p>{selected.desc}</p>
        <p style={{ marginTop: "0.5rem" }}>
          재고 {selected.stock}개 · 단가 ₩{selected.price.toLocaleString}
        </p>

        <div className="ods-field" style={{ maxWidth: "14rem", marginTop: "0.9rem" }}>
          <Label htmlFor="iv-reorder">재주문 상태</Label>
          <Nativeselect
            id="iv-reorder"
            value={status}
            onChange={(e) => {
              const v = e.target.value;
              setReorderStatus((prev) => ({ ...prev, [selected.id]: v }));
            }}
          >
            {REORDER_STATUS.map((s) => (
              <Nativeselect.Option key={s} value={s}>{s}</Nativeselect.Option>
            ))}
          </Nativeselect>
        </div>

        {related.length > 0 && (
          <div style={{ marginTop: "1.1rem" }}>
            <div style={{ fontWeight: 600, fontSize: "0.8125rem", marginBottom: "0.5rem" }}>같은 분류의 다른 상품</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
              {related.map((i) => (
                <div key={i.id} style={{ display: "flex", justifyContent: "space-between", gap: "0.5rem", fontSize: "0.8125rem" }}>
                  <span style={{ minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{i.name}</span>
                  <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{i.stock}개</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>
    );
  }

  const STATS = [
    { label: "전체 SKU", value: String(ITEMS.length), icon: Boxes },
    { label: "재고 부족(10개 미만)", value: String(ITEMS.filter((i) => i.stock < 10).length), icon: PackageX },
    { label: "총 재고 가치", value: `₩${ITEMS.reduce((s, i) => s + i.stock * i.price, 0).toLocaleString}`, icon: Wallet },
    { label: "이번 주 입고", value: "3건", icon: PackageCheck },
  ];

  const shown = ITEMS
    .filter((i) => active === "전체" || i.category === active)
    .filter((i) => !lowOnly || i.stock < 10)
    .filter((i) => {
      const q = query.trim;
      return q === "" || i.name.includes(q) || i.sku.toLowerCase.includes(q.toLowerCase);
    });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <style>{`
        .sa2-iv-stats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.75rem; }
        @container sa2 (min-width: 40rem) { .sa2-iv-stats { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
      `}</style>

      <div className="sa2-iv-stats">
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

      {/* BreadcrumbProps.items에 onClick 없음. 위치만 알리는 정보성 요소임 */}
      <Breadcrumb items={active === "전체" ? [{ label: "전체 창고" }] : [{ label: "전체 창고" }, { label: active }]} />

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.625rem" }}>
        <Segmented value={filter} onValueChange={(v) => { setFilter(v); setSelectedId(null); }}>
          {CATEGORIES.map((c) => (
            <Segmented.Item key={c} value={c}>
              {c} {c !== "전체" && `(${ITEMS.filter((i) => i.category === c).length})`}
            </Segmented.Item>
          ))}
        </Segmented>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.8125rem" }}>
            <Switch size="sm" checked={lowOnly} onCheckedChange={setLowOnly} />
            부족 재고만
          </label>
          <span style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
            <Search size={13} aria-hidden style={{ position: "absolute", left: "0.6rem", color: "var(--semantic-fg-neutral-subtle)", pointerEvents: "none" }} />
            <input
              className="ods-input"
              style={{ paddingInlineStart: "1.9rem", width: "10rem" }}
              placeholder="상품명·SKU 검색"
              aria-label="재고 검색"
              value={query}
              onChange={(e) => {
                const v = e.target.value;
                setQuery(v);
              }}
            />
          </span>
        </div>
      </div>

      {shown.length === 0 ? (
        <Empty>
          <Empty.Header>
            <Empty.Media><SearchX size={22} aria-hidden /></Empty.Media>
            <Empty.Title>조건에 맞는 재고가 없어요</Empty.Title>
            <Empty.Description>검색어나 분류·재고 필터를 바꿔 보세요.</Empty.Description>
          </Empty.Header>
          <Empty.Content>
            <Button size="sm" variant="subtle" onClick={ => { setQuery(""); setLowOnly(false); setFilter(["전체"]); }}>필터 초기화</Button>
          </Empty.Content>
        </Empty>
      ) : (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>상품명</Table.Head>
              <Table.Head>SKU</Table.Head>
              <Table.Head>분류</Table.Head>
              <Table.Head>재고</Table.Head>
              <Table.Head>단가</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {shown.map((i) => (
              <Table.Row key={i.id}>
                <Table.Cell>
                  <Button variant="plain" tone="brand" size="sm" onClick={ => setSelectedId(i.id)} style={{ padding: 0, height: "auto" }}>
                    {i.name}
                  </Button>
                </Table.Cell>
                <Table.Cell>{i.sku}</Table.Cell>
                <Table.Cell>{i.category}</Table.Cell>
                <Table.Cell>
                  {i.stock < 10 ? <Badge tone="danger">{i.stock}개</Badge> : `${i.stock}개`}
                </Table.Cell>
                <Table.Cell>₩{i.price.toLocaleString}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </div>
  );
}
