import * as React from "react";
import { Avatar, Badge, Button, Empty, Flex, Input, theme, Typography } from "antd";
import { ArrowLeftOutlined, SendOutlined } from "@ant-design/icons";
import type { ScreenProps } from "../screens";
import { useContainerWidth } from "../useContainerWidth";

const { Text, Title } = Typography;

interface Person {
  id: string;
  name: string;
  role: string;
  online: boolean;
}

interface Line {
  who: "me" | "them";
  text: string;
  at: string;
}

// 실제 팀 규모만큼 채워 목록 상자 스크롤 여백 제거
const PEOPLE: Person[] = [
  { id: "p1", name: "박서연", role: "디자인", online: true },
  { id: "p2", name: "김도현", role: "프런트엔드", online: true },
  { id: "p3", name: "이준호", role: "디자인", online: false },
  { id: "p4", name: "최민아", role: "백엔드", online: false },
  { id: "p5", name: "정하늘", role: "CS", online: false },
  { id: "p6", name: "오태윤", role: "데이터", online: true },
  { id: "p7", name: "한소율", role: "QA", online: false },
  { id: "p8", name: "윤채민", role: "마케팅", online: false },
];

// 대화. 목록의 마지막 메시지와 시각은 여기서 꺼냄. 따로 적으면 값이 어긋날 수 있음
const THREADS: Record<string, Line[]> = {
  p1: [
    { who: "them", text: "재고 배지가 테마를 안 타는 것 같아요", at: "10:02" },
    { who: "me", text: "프리셋 색을 쓰고 있어서 그래요. 토큰으로 바꿀게요", at: "10:04" },
    { who: "them", text: "20색 전부에서 확인 가능할까요", at: "10:05" },
    { who: "me", text: "네, 라이트·다크·고대비까지 60조합으로 잴게요", at: "10:06" },
    { who: "them", text: "재고 배지 색 확인 부탁해요", at: "10:20" },
  ],
  p2: [
    { who: "me", text: "주문 표가 390px 에서 페이지를 밀어요", at: "09:40" },
    { who: "them", text: "표에 가로 스크롤 상자를 씌웠어요", at: "09:48" },
    { who: "them", text: "주문표 가로 스크롤 고쳤습니다", at: "09:51" },
  ],
  p3: [
    { who: "me", text: "지역 매출 축이 영문이에요", at: "어제 16:10" },
    { who: "them", text: "축 이름 한글로 바꿀게요", at: "어제 16:12" },
  ],
  p4: [
    { who: "them", text: "배송 목록 무한 스크롤 초안 올렸어요", at: "어제 14:02" },
    { who: "me", text: "고마워요, 내일 오전에 볼게요", at: "어제 14:30" },
    { who: "them", text: "배송 목록 무한 스크롤 초안", at: "어제 18:40" },
  ],
  p5: [
    { who: "them", text: "환불 사유 코드표 올렸어요", at: "어제 11:20" },
  ],
  p6: [
    { who: "me", text: "결제 실패 로그, 한곳에 모으는 거 언제쯤 될까요", at: "어제 09:30" },
    { who: "them", text: "결제 실패 로그 수집 완료", at: "어제 10:15" },
  ],
  p7: [
    { who: "them", text: "배송 목록 QA 시작할게요", at: "2일 전" },
  ],
  p8: [
    { who: "them", text: "지역별 매출 축 확인했어요", at: "3일 전" },
  ],
};

const INITIAL_UNREAD: Record<string, number> = { p1: 2, p4: 1 };

const nowLabel =  => {
  const d = new Date;
  return `${String(d.getHours).padStart(2, "0")}:${String(d.getMinutes).padStart(2, "0")}`;
};

export function ChatScreen({ focusId }: ScreenProps) {
  const { token } = theme.useToken;
  // 화면 폭 기준 두 단/한 단 레이아웃 전환. 목록 280px, 대화 최소 280px
  const [rootRef, width] = useContainerWidth<HTMLDivElement>;
  const wide = width === null || width >= 560;
  const [threads, setThreads] = React.useState(THREADS);
  const [unread, setUnread] = React.useState(INITIAL_UNREAD);
  const [current, setCurrent] = React.useState<string | null>("p1");
  const [query, setQuery] = React.useState("");
  const [draft, setDraft] = React.useState("");
  const endRef = React.useRef<HTMLDivElement | null>(null);

  // 넓은 화면은 항상 하나 선택 유지, 없으면 오른쪽이 비어 절반 낭비되는 문제가 있음
  const person = PEOPLE.find((p) => p.id === current) ?? (wide ? PEOPLE[0] : null);

  // 머리줄 검색, 알림에서 선택한 사람과의 대화 열기
  React.useEffect( => {
    if (focusId && PEOPLE.some((p) => p.id === focusId)) setCurrent(focusId);
  }, [focusId]);

  // 열어 본 대화는 읽음 처리
  React.useEffect( => {
    if (person) setUnread((prev) => (prev[person.id] ? { ...prev, [person.id]: 0 } : prev));
  }, [person]);

  // 새 글 추가 시 대화 영역만 바닥으로 스크롤, 목록은 고정
  const lines = person ? threads[person.id] ?? [] : [];
  React.useEffect( => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [lines.length, person?.id]);

  const send =  => {
    const text = draft.trim;
    if (!text || !person) return;
    const line: Line = { who: "me", text, at: nowLabel };
    setThreads((prev) => ({ ...prev, [person.id]: [...(prev[person.id] ?? []), line] }));
    setDraft("");
  };

  const lastOf = (id: string) => {
    const t = threads[id] ?? [];
    return t[t.length - 1];
  };
  const q = query.trim.toLowerCase;
  const people = PEOPLE.filter(
    (p) => !q || p.name.toLowerCase.includes(q) || p.role.toLowerCase.includes(q) || (lastOf(p.id)?.text ?? "").toLowerCase.includes(q),
  );

  const PANE_HEIGHT = "max(20rem, calc(100dvh - 22.8rem))";

  const list = (
    <Flex
      vertical
      style={{
        background: token.colorBgContainer,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
        blockSize: PANE_HEIGHT,
        overflow: "hidden",
      }}
    >
      <div style={{ padding: 12, borderBlockEnd: `1px solid ${token.colorBorderSecondary}` }}>
        <Input.Search
          allowClear
          placeholder="사람 찾기"
          aria-label="사람 찾기"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {/* 목록만 스크롤. 페이지 전체가 아닌 이 영역 내부 */}
      <div style={{ overflowY: "auto", flex: 1 }}>
        {people.length === 0 ? (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="찾는 사람이 없어요" style={{ marginBlock: 32 }} />
        ) : null}
        {people.map((p) => {
          const on = p.id === person?.id;
          const last = lastOf(p.id);
          const count = unread[p.id] ?? 0;
          return (
            <button
              key={p.id}
              type="button"
              onClick={ => setCurrent(p.id)}
              style={{
                background: on ? token.colorFillTertiary : "transparent",
                border: 0,
                cursor: "pointer",
                display: "flex",
                gap: 10,
                inlineSize: "100%",
                padding: "10px 12px",
                textAlign: "start",
              }}
            >
              {/* 접속 여부 점 하나로 표시 */}
              <Badge dot={p.online} color={token.colorSuccess} offset={[-4, 28]}>
                <Avatar>{p.name.slice(0, 1)}</Avatar>
              </Badge>
              <Flex vertical style={{ minInlineSize: 0, flex: 1 }}>
                <Flex justify="space-between" gap={8}>
                  <Text strong ellipsis>{p.name}</Text>
                  <Text type="secondary" style={{ fontSize: token.fontSizeSM, whiteSpace: "nowrap" }}>
                    {last?.at}
                  </Text>
                </Flex>
                <Flex justify="space-between" gap={8}>
                  <Text type="secondary" ellipsis style={{ fontSize: token.fontSizeSM }}>
                    {last ? `${last.who === "me" ? "나: " : ""}${last.text}` : p.role}
                  </Text>
                  {count ? (
                    <Badge count={count} style={{ background: token.colorPrimary }} />
                  ) : null}
                </Flex>
              </Flex>
            </button>
          );
        })}
      </div>
    </Flex>
  );

  const thread = person ? (
    <Flex
      vertical
      style={{
        background: token.colorBgContainer,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
        blockSize: PANE_HEIGHT,
        overflow: "hidden",
      }}
    >
      <Flex
        align="center"
        gap={10}
        style={{ padding: 12, borderBlockEnd: `1px solid ${token.colorBorderSecondary}` }}
      >
        {!wide ? (
          <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            aria-label="목록으로"
            onClick={ => setCurrent(null)}
          />
        ) : null}
        <Avatar>{person.name.slice(0, 1)}</Avatar>
        <Flex vertical>
          <Text strong>{person.name}</Text>
          <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
            {person.role} · {person.online ? "접속 중" : "자리 비움"}
          </Text>
        </Flex>
      </Flex>

      <Flex vertical gap={10} style={{ flex: 1, overflowY: "auto", padding: 12 }}>
        {lines.map((l, i) => {
          const mine = l.who === "me";
          return (
            <Flex key={i} justify={mine ? "flex-end" : "flex-start"}>
              <Flex
                vertical
                gap={2}
                style={{
                  background: mine ? token.colorPrimary : token.colorFillSecondary,
                  borderRadius: token.borderRadiusLG,
                  color: mine ? token.colorTextLightSolid : token.colorText,
                  maxInlineSize: "min(80%, 26rem)",
                  padding: "8px 12px",
                }}
              >
                <span>{l.text}</span>
                <span
                  style={{
                    fontSize: token.fontSizeSM,
                    opacity: 0.75,
                    textAlign: mine ? "end" : "start",
                  }}
                >
                  {l.at}
                </span>
              </Flex>
            </Flex>
          );
        })}
        <div ref={endRef} />
      </Flex>

      <Flex gap={8} style={{ padding: 12, borderBlockStart: `1px solid ${token.colorBorderSecondary}` }}>
        <Input
          placeholder="메시지를 쓰세요"
          aria-label="메시지"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onPressEnter={send}
        />
        <Button type="primary" icon={<SendOutlined />} aria-label="보내기" disabled={!draft.trim} onClick={send} />
      </Flex>
    </Flex>
  ) : null;

  if (!wide) {
    return (
      <div ref={rootRef}>
        <Flex vertical gap={12}>
          <Title level={5} style={{ margin: 0 }}>대화</Title>
          {person ? thread : list}
        </Flex>
      </div>
    );
  }

  return (
    <div ref={rootRef}>
      <Flex gap={16} align="stretch">
        <div style={{ inlineSize: 280, flexShrink: 0 }}>{list}</div>
        <div style={{ flex: 1, minInlineSize: 0 }}>{thread}</div>
      </Flex>
    </div>
  );
}
