import * as React from "react";
import { Mail, Star } from "lucide-react";
import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const THREAD = [
  { from: "김도윤", time: "3일 전", body: "주문한 지 8일이 지났는데 아직도 배송 중이라고만 떠요. 확인 부탁드려요." },
  { from: "지원팀 · 박서준", time: "2일 전", body: "불편을 드려 죄송합니다. 택배사에 확인 요청 넣었고, 오늘 중으로 회신드리겠습니다." },
  { from: "김도윤", time: "12분 전", body: "아직도 소식이 없어서 다시 문의드립니다." },
];

const CUSTOMER: { name: string; email: string; tier: "일반" | "우수"; totalTickets: number } =
  { name: "김도윤", email: "doyun.kim@example.com", tier: "일반", totalTickets: 3 };

const PREVIOUS_TICKETS = [
  { id: "#2988", subject: "적립금이 반영이 안 돼요", status: "닫힘", resolvedLabel: "지난달" },
  { id: "#2941", subject: "배송지 변경 요청", status: "닫힘", resolvedLabel: "2개월 전" },
];

const ASSIGNEES = ["박서준", "한지민", "미배정"];
const PRIORITIES = ["낮음", "보통", "높음"] as const;

export function TicketDetailScreen {
  const [priority, setPriority] = React.useState<(typeof PRIORITIES)[number]>("높음");
  const [assignee, setAssignee] = React.useState(ASSIGNEES[0]);
  const [status, setStatus] = React.useState<"open" | "pending" | "closed">("open");
  const [showSaved, setShowSaved] = React.useState(false);
  const [showCloseConfirm, setShowCloseConfirm] = React.useState(false);
  const [showMemo, setShowMemo] = React.useState(false);

  return (
    <>
      {/* Breadcrumb를 상세 화면 네비게이션으로 추가 */}
      <Breadcrumb className="mb-2">
        <Breadcrumb.Item active>고객 지원</Breadcrumb.Item>
        <Breadcrumb.Item active>티켓</Breadcrumb.Item>
        <Breadcrumb.Item active>#3021</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="g-3">
      <Col xs={12} lg={7}>
        <Card>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <span>
              <code className="me-2">#3021</code>
              배송이 8일째 안 와요
            </span>
            <div className="d-flex align-items-center gap-2">
              <Badge bg={priority === "높음" ? "danger" : priority === "보통" ? "warning" : "secondary"}>
                우선순위 {priority}
              </Badge>
              <Badge bg={status === "open" ? "danger" : status === "pending" ? "warning" : "secondary"}>
                {status === "open" ? "열림" : status === "pending" ? "대기" : "닫힘"}
              </Badge>
              {/* Modal로 티켓 닫기 확인 */}
              <Button size="sm" variant="outline-danger" onClick={ => setShowCloseConfirm(true)}>
                닫기
              </Button>
            </div>
          </Card.Header>
          <ListGroup variant="flush">
            {THREAD.map((m, i) => (
              <ListGroup.Item key={i}>
                <div className="d-flex justify-content-between">
                  <strong>{m.from}</strong>
                  <span className="text-body-secondary small">{m.time}</span>
                </div>
                <div>{m.body}</div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Card.Body>
            <Form>
              <Form.Group className="mb-2" controlId="reply">
                <Form.Control as="textarea" placeholder="답장을 입력하세요" rows={3} />
              </Form.Group>
              {/* Form.Select로 상세 화면 채우기 */}
              <Form.Group className="mb-2" controlId="ticket-status" style={{ maxWidth: "160px" }}>
                <Form.Select
                  size="sm"
                  value={status}
                  onChange={(e) => setStatus(e.target.value as "open" | "pending" | "closed")}
                >
                  <option value="open">열림</option>
                  <option value="pending">대기</option>
                  <option value="closed">닫힘</option>
                </Form.Select>
              </Form.Group>
              <Button variant="primary">답장 보내기</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} lg={5}>
        <div className="d-flex flex-column gap-3 position-relative">
          {/* 저장 피드백 Toast로 표시. fixed 대신 상대 위치 부모 안에 절대 배치한 것임 */}
          <ToastContainer className="position-absolute" style={{ insetBlockEnd: "0.5rem", insetInlineEnd: "0.5rem", zIndex: 5 }}>
            <Toast show={showSaved} onClose={ => setShowSaved(false)} delay={2000} autohide bg="light">
              {/* Toast.Header 추가 */}
              <Toast.Header>
                <strong className="me-auto">티켓 관리</strong>
              </Toast.Header>
              <Toast.Body>저장했어요.</Toast.Body>
            </Toast>
          </ToastContainer>
          <Card>
            <Card.Body className="d-flex flex-column gap-2">
              <div className="d-flex align-items-center justify-content-between">
                <h3 style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: 0 }}>고객 정보</h3>
                <Badge bg={CUSTOMER.tier === "우수" ? "primary" : "secondary"}>{CUSTOMER.tier}</Badge>
              </div>
              <div className="d-flex align-items-center gap-2">
                {/* Image의 roundedCircle 옵션으로 고객 아바타 표시 */}
                <Image
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=64&h=64&q=60"
                  alt=""
                  roundedCircle
                  style={{ inlineSize: "2rem", blockSize: "2rem", objectFit: "cover" }}
                />
                <div style={{ fontWeight: 600 }}>{CUSTOMER.name}</div>
              </div>
              <div className="text-body-secondary small d-flex align-items-center gap-1">
                <Mail size={12} /> {CUSTOMER.email}
              </div>
              <div className="text-body-secondary small d-flex align-items-center gap-1">
                <Star size={12} /> 누적 문의 {CUSTOMER.totalTickets}건
              </div>
              {/* Collapse로 메모 기본 접힘 처리 */}
              <Button
                variant="link"
                size="sm"
                className="p-0 align-self-start"
                onClick={ => setShowMemo((v) => !v)}
                aria-controls="customer-memo"
                aria-expanded={showMemo}
              >
                {showMemo ? "메모 접기" : "메모 더보기"}
              </Button>
              <Collapse in={showMemo}>
                <div id="customer-memo">
                  <p className="text-body-secondary small mb-0">
                    배송 관련 문의가 반복되는 고객이에요. 우선 응대 권장.
                  </p>
                </div>
              </Collapse>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body className="d-flex flex-column gap-3">
              <h3 style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: 0 }}>티켓 관리</h3>
              <Form.Group>
                <Form.Label className="small text-body-secondary mb-1">우선순위</Form.Label>
                <Form.Select
                  size="sm"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value as (typeof PRIORITIES)[number])}
                >
                  {PRIORITIES.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label className="small text-body-secondary mb-1 d-block">담당자</Form.Label>
                {/* Dropdown으로 담당자 선택하기 */}
                <Dropdown>
                  <Dropdown.Toggle variant="outline-secondary" size="sm" id="ticket-assignee">
                    {assignee}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {/* Dropdown.Header 등으로 메뉴 구성하기 */}
                    <Dropdown.Header>담당자 선택</Dropdown.Header>
                    {ASSIGNEES.map((a) => (
                      <Dropdown.Item key={a} active={assignee === a} onClick={ => setAssignee(a)}>
                        {a}
                      </Dropdown.Item>
                    ))}
                    <Dropdown.Divider />
                    <Dropdown.ItemText className="text-body-secondary" style={{ fontSize: "0.75rem" }}>
                      업무량 적은 순으로 정렬돼요
                    </Dropdown.ItemText>
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
              <Button size="sm" style={{ alignSelf: "flex-start" }} onClick={ => setShowSaved(true)}>저장</Button>
            </Card.Body>
          </Card>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{CUSTOMER.name}님의 이전 문의 {PREVIOUS_TICKETS.length}건</Accordion.Header>
              <Accordion.Body className="d-flex flex-column gap-2">
                {PREVIOUS_TICKETS.map((t) => (
                  <div key={t.id} className="d-flex justify-content-between align-items-center">
                    <div>
                      <code className="me-1">{t.id}</code>
                      <span className="small">{t.subject}</span>
                    </div>
                    <span className="text-body-secondary small">{t.status} · {t.resolvedLabel}</span>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Col>
      </Row>

      <Modal show={showCloseConfirm} onHide={ => setShowCloseConfirm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "1rem" }}>티켓을 닫을까요?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <code>#3021</code> 티켓을 닫으면 고객에게 "닫힘" 상태로 표시돼요.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" size="sm" onClick={ => setShowCloseConfirm(false)}>
            취소
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={ => { setStatus("closed"); setShowCloseConfirm(false); }}
          >
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
