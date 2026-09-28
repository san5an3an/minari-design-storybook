import * as React from "react";
import { Mail, Star, Users } from "lucide-react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Tooltip from "react-bootstrap/Tooltip";
import { STATUS_LABEL, TICKETS } from "./TicketsScreen";

interface Customer {
  name: string;
  email: string;
  tickets: number;
  tier: "일반" | "우수";
  lastTopic: string;
}

// 검색, 필터, 카드그리드, 교차참조 구조 구성
const CUSTOMERS: Customer[] = [
  { name: "김도윤", email: "doyun.kim@example.com", tickets: 3, tier: "일반", lastTopic: "배송 지연 문의" },
  { name: "이서연", email: "seoyeon.lee@example.com", tickets: 1, tier: "우수", lastTopic: "환불 처리" },
  { name: "박지훈", email: "jihoon.park@example.com", tickets: 5, tier: "우수", lastTopic: "쿠폰 미적용" },
  { name: "최민서", email: "minseo.choi@example.com", tickets: 1, tier: "일반", lastTopic: "사이즈 교환" },
  { name: "정하은", email: "haeun.jung@example.com", tickets: 2, tier: "일반", lastTopic: "적립금 미반영" },
  { name: "한소율", email: "soyul.han@example.com", tickets: 4, tier: "우수", lastTopic: "배송지 오입력" },
  { name: "오지호", email: "jiho.oh@example.com", tickets: 1, tier: "일반", lastTopic: "결제 중복" },
  { name: "윤아름", email: "areum.yoon@example.com", tickets: 2, tier: "일반", lastTopic: "선물 포장 누락" },
  { name: "장서윤", email: "seoyoon.jang@example.com", tickets: 6, tier: "우수", lastTopic: "재입고 알림" },
  { name: "임도현", email: "dohyun.lim@example.com", tickets: 1, tier: "일반", lastTopic: "쿠폰 미적용" },
];

export function CustomersScreen {
  const [query, setQuery] = React.useState("");
  const [tier, setTier] = React.useState<Customer["tier"] | "all">("all");

  const rows = CUSTOMERS.filter(
    (c) =>
      (tier === "all" || c.tier === tier)
      && (query.trim === "" || c.name.includes(query) || c.email.includes(query)),
  );

  return (
    <div className="d-flex flex-column gap-3">
      {/* CardGroup으로 통계 카드 두 개 묶기 */}
      <CardGroup>
        <Card>
          <Card.Body className="d-flex align-items-center gap-2">
            <Users size={18} style={{ color: "var(--semantic-fg-brand-default)" }} />
            <div>
              <div className="text-body-secondary small">전체 고객</div>
              <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{CUSTOMERS.length}명</div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body className="d-flex align-items-center gap-2">
            <Star size={18} style={{ color: "var(--semantic-fg-warning-default)" }} />
            <div>
              <div className="text-body-secondary small">우수 등급</div>
              <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                {CUSTOMERS.filter((c) => c.tier === "우수").length}명
              </div>
            </div>
          </Card.Body>
        </Card>
      </CardGroup>

      <div className="d-flex flex-wrap gap-2">
        {/* FloatingLabel로 검색 인풋 감싸기 */}
        <FloatingLabel controlId="customer-search" label="이름·이메일 검색" style={{ maxWidth: "220px" }}>
          <Form.Control
            type="search"
            placeholder="이름·이메일 검색"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </FloatingLabel>
        <Form.Select
          value={tier}
          onChange={(e) => setTier(e.target.value as Customer["tier"] | "all")}
          style={{ maxWidth: "140px" }}
          aria-label="등급 거르기"
        >
          <option value="all">전체 등급</option>
          <option value="우수">우수</option>
          <option value="일반">일반</option>
        </Form.Select>
      </div>

      <Row xs={1} sm={2} className="g-3">
        {rows.map((c) => (
          <Col key={c.email}>
            <Card className="h-100">
              <Card.Body className="d-flex flex-column gap-2">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    {/* div 대신 카드 전용 서브컴포넌트 사용 */}
                    <Card.Title style={{ fontSize: "1rem", marginBottom: 0 }}>{c.name}</Card.Title>
                    <Card.Link
                      href={`mailto:${c.email}`}
                      className="text-body-secondary small d-inline-flex align-items-center gap-1"
                    >
                      <Mail size={12} /> {c.email}
                    </Card.Link>
                  </div>
                  {/* OverlayTrigger, Tooltip으로 등급 배지 설명 표시 */}
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id={`tier-tip-${c.email}`}>
                        {c.tier === "우수" ? "누적 문의 3건 이상" : "누적 문의 3건 미만"}
                      </Tooltip>
                    }
                  >
                    <Badge bg={c.tier === "우수" ? "primary" : "secondary"} style={{ cursor: "help" }}>
                      {c.tier}
                    </Badge>
                  </OverlayTrigger>
                </div>
                <Card.Text className="text-body-secondary small border-top pt-2 mb-0">
                  최근 문의 · {c.lastTopic}
                </Card.Text>
                <div className="small">누적 문의 {c.tickets}건</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* TicketsScreen 티켓에서 닫힌 문의 추출해 표시 */}
      <div>
        <h3 style={{ fontSize: "0.875rem", fontWeight: 600 }}>최근 처리된 문의</h3>
        <Table size="sm" hover responsive>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>고객</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            {TICKETS.filter((t) => t.status === "closed").map((t) => (
              <tr key={t.id}>
                <td><code>{t.id}</code></td>
                <td>{t.subject}</td>
                <td>{t.customer}</td>
                <td><Badge bg={STATUS_LABEL[t.status].bg}>{STATUS_LABEL[t.status].text}</Badge></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
