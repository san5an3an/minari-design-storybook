import * as React from "react";
import { Avatar, Badge, Button, Flex, Grid, Input, theme, Typography } from "antd";
import { ArrowLeftOutlined, SendOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

interface Person {
  id: string;
  name: string;
  last: string;
  at: string;
  unread: number;
  online: boolean;
}

// 실제 팀 규모만큼 채워 목록 상자 스크롤 여백 제거
const PEOPLE: Person[] = [
  { id: "p1", name: "박서연", last: "재고 배지 색 확인 부탁해요", at: "방금", unread: 2, online: true },
  { id: "p2", name: "김도현", last: "주문표 가로 스크롤 고쳤습니다", at: "12분", unread: 0, online: true },
  { id: "p3", name: "이준호", last: "축 이름 한글로 바꿀게요", at: "1시간", unread: 0, online: false },
  { id: "p4", name: "최민아", last: "배송 목록 무한 스크롤 초안", at: "어제", unread: 1, online: false },
  { id: "p5", name: "정하늘", last: "환불 사유 코드표 올렸어요", at: "어제", unread: 0, online: false },
  { id: "p6", name: "오태윤", last: "결제 실패 로그 수집 완료", at: "어제", unread: 0, online: true },
  { id: "p7", name: "한소율", last: "배송 목록 QA 시작할게요", at: "2일 전", unread: 0, online: false },
  { id: "p8", name: "윤채민", last: "지역별 매출 축 확인했어요", at: "3일 전", unread: 0, online: false },
];

interface Line {
  who: "me" | "them";
  text: string;
  at: string;
}

const THREADS: Record<string, Line[]> = {
  p1: [
    { who: "them", text: "재고 배지가 테마를 안 타는 것 같아요", at: "10:02" },
    { who: "me", text: "프리셋 색을 쓰고 있어서 그렇습니다. 토큰으로 바꿀게요", at: "10:04" },
    { who: "them", text: "20색 전부에서 확인 가능할까요", at: "10:05" },
    { who: "me", text: "네, 라이트·다크·고대비까지 60조합으로 재겠습니다", at: "10:06" },
    { who: "them", text: "재고 배지 색 확인 부탁해요", at: "10:20" },
  ],
  p2: [{ who: "them", text: "주문표 가로 스크롤 고쳤습니다", at: "09:51" }],
  p3: [{ who: "them", text: "축 이름 한글로 바꿀게요", at: "어제" }],
  p4: [{ who: "them", text: "배송 목록 무한 스크롤 초안", at: "어제" }],
  p5: [{ who: "them", text: "환불 사유 코드표 올렸어요", at: "어제" }],
};

export function ChatScreen {
  const { token } = theme.useToken;
  const bp = Grid.useBreakpoint;
  const wide = bp.md ?? true;
  const [current, setCurrent] = React.useState<string | null>("p1");
  // 넓은 화면은 항상 하나 선택 유지, 없으면 오른쪽이 비어 절반 낭비되는 문제가 있음
  const person = PEOPLE.find((p) => p.id === current) ?? (wide ? PEOPLE[0] : null);

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
        <Input.Search placeholder="사람 찾기" aria-label="사람 찾기" />
      </div>
      {/* 목록만 스크롤. 페이지 전체가 아닌 이 영역 내부 */}
      <div style={{ overflowY: "auto", flex: 1 }}>
        {PEOPLE.map((p) => {
          const on = p.id === person?.id;
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
                    {p.at}
                  </Text>
                </Flex>
                <Flex justify="space-between" gap={8}>
                  <Text type="secondary" ellipsis style={{ fontSize: token.fontSizeSM }}>
                    {p.last}
                  </Text>
                  {p.unread ? (
                    <Badge count={p.unread} style={{ background: token.colorPrimary }} />
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
            {person.online ? "접속 중" : "자리 비움"}
          </Text>
        </Flex>
      </Flex>

      <Flex vertical gap={10} style={{ flex: 1, overflowY: "auto", padding: 12 }}>
        {(THREADS[person.id] ?? []).map((l, i) => {
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
      </Flex>

      <Flex gap={8} style={{ padding: 12, borderBlockStart: `1px solid ${token.colorBorderSecondary}` }}>
        <Input placeholder="메시지를 쓰세요" aria-label="메시지" />
        <Button type="primary" icon={<SendOutlined />} aria-label="보내기" />
      </Flex>
    </Flex>
  ) : null;

  if (!wide) {
    return (
      <Flex vertical gap={12}>
        <Title level={5} style={{ margin: 0 }}>대화</Title>
        {person ? thread : list}
      </Flex>
    );
  }

  return (
    <Flex gap={16} align="stretch">
      <div style={{ inlineSize: 280, flexShrink: 0 }}>{list}</div>
      <div style={{ flex: 1, minInlineSize: 0 }}>{thread}</div>
    </Flex>
  );
}
