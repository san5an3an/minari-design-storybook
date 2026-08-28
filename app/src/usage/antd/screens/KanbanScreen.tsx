import * as React from "react";
import { Avatar, Button, Card, Col, Dropdown, Flex, Row, Tag, theme, Typography } from "antd";
import { MoreOutlined, PlusOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

type Lane = "backlog" | "todo" | "doing" | "done";

const LANES: { key: Lane; label: string; tone: "neutral" | "info" | "warning" | "success" }[] = [
  { key: "backlog", label: "대기", tone: "neutral" },
  { key: "todo", label: "할 일", tone: "info" },
  { key: "doing", label: "진행 중", tone: "warning" },
  { key: "done", label: "완료", tone: "success" },
];

interface CardItem {
  id: string;
  title: string;
  tag: string;
  who: string;
  due: string;
  lane: Lane;
}

const INITIAL: CardItem[] = [
  { id: "K-101", title: "결제 실패 로그를 한곳에 모으기", tag: "버그", who: "김도현", due: "8/29", lane: "backlog" },
  { id: "K-102", title: "장바구니 이탈 알림 문구 다듬기", tag: "기획", who: "박서연", due: "9/02", lane: "backlog" },
  { id: "K-103", title: "재고 부족 배지 색을 상태색으로", tag: "디자인", who: "이준호", due: "8/28", lane: "todo" },
  { id: "K-104", title: "주문 표에 가로 스크롤 상자 씌우기", tag: "버그", who: "김도현", due: "8/28", lane: "todo" },
  { id: "K-105", title: "배송 목록 무한 스크롤", tag: "기능", who: "최민아", due: "9/05", lane: "doing" },
  { id: "K-106", title: "지역별 매출 축 이름 한글화", tag: "디자인", who: "이준호", due: "8/27", lane: "doing" },
  { id: "K-107", title: "환불 사유 코드 표 정리", tag: "기획", who: "박서연", due: "8/20", lane: "done" },
  { id: "K-108", title: "재고 API 응답 캐시", tag: "기능", who: "최민아", due: "8/19", lane: "done" },
];

export function KanbanScreen {
  const { token } = theme.useToken;
  const [items, setItems] = React.useState(INITIAL);

  const laneColor = (tone: string) =>
    tone === "success" ? token.colorSuccess
      : tone === "warning" ? token.colorWarning
        : tone === "info" ? token.colorInfo
          : token.colorTextSecondary;

  const move = (id: string, lane: Lane) =>
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, lane } : it)));

  return (
    <Flex vertical gap={16}>
      <Flex align="center" justify="space-between" gap={12} wrap>
        {/* 화면 텍스트에 별표 강조 금지. JSX에서는 별표가 그대로 문자로 보임 */}
        <Text type="secondary">
          카드를 옮기면 패널이 바뀝니다. 상태를 값이 아니라 위치로 읽는 화면입니다.
        </Text>
        <Button type="primary" icon={<PlusOutlined />}>카드 더하기</Button>
      </Flex>

      {/* Row를 xs={24}로 세로 정렬 */}
      <Row gutter={[16, 16]} align="top">
        {LANES.map((lane) => {
          const cards = items.filter((it) => it.lane === lane.key);
          return (
            <Col xs={24} sm={12} xl={6} key={lane.key}>
              <Flex
                vertical
                gap={12}
                style={{
                  background: token.colorFillQuaternary,
                  borderRadius: token.borderRadiusLG,
                  padding: 12,
                }}
              >
                <Flex align="center" justify="space-between">
                  <Flex align="center" gap={8}>
                    <span
                      aria-hidden
                      style={{
                        background: laneColor(lane.tone),
                        borderRadius: "50%",
                        blockSize: 8,
                        inlineSize: 8,
                      }}
                    />
                    <Text strong>{lane.label}</Text>
                  </Flex>
                  <Text type="secondary">{cards.length}</Text>
                </Flex>

                {cards.length === 0 ? (
                  // 빈 행은 공백 대신 안내 문구로 표시
                  <div
                    style={{
                      border: `1px dashed ${token.colorBorderSecondary}`,
                      borderRadius: token.borderRadius,
                      color: token.colorTextTertiary,
                      padding: "20px 12px",
                      textAlign: "center",
                    }}
                  >
                    비어 있어요
                  </div>
                ) : null}

                {cards.map((it) => (
                  <Card key={it.id} size="small">
                    <Flex vertical gap={8}>
                      <Flex align="flex-start" justify="space-between" gap={8}>
                        <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
                          {it.id}
                        </Text>
                        {/* 이동 메뉴 선택 시 실제 이동 처리 */}
                        <Dropdown
                          trigger={["click"]}
                          menu={{
                            items: LANES.filter((l) => l.key !== it.lane).map((l) => ({
                              key: l.key,
                              label: `${l.label}(으)로 옮기기`,
                            })),
                            onClick: ({ key }) => move(it.id, key as Lane),
                          }}
                        >
                          <Button
                            type="text"
                            icon={<MoreOutlined />}
                            aria-label={`${it.id} 옮기기`}
                          />
                        </Dropdown>
                      </Flex>

                      <Title level={5} style={{ margin: 0, fontSize: token.fontSize }}>
                        {it.title}
                      </Title>

                      <Flex align="center" justify="space-between" gap={8}>
                        <Tag style={{ marginInlineEnd: 0 }}>{it.tag}</Tag>
                        <Flex align="center" gap={6}>
                          <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
                            {it.due}
                          </Text>
                          <Avatar size="small">{it.who.slice(0, 1)}</Avatar>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Card>
                ))}
              </Flex>
            </Col>
          );
        })}
      </Row>
    </Flex>
  );
}
