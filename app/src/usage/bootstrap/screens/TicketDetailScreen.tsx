import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";

const THREAD = [
  { from: "김도윤", time: "3일 전", body: "주문한 지 8일이 지났는데 아직도 배송 중이라고만 떠요. 확인 부탁드려요." },
  { from: "지원팀 · 박서준", time: "2일 전", body: "불편을 드려 죄송합니다. 택배사에 확인 요청 넣었고, 오늘 중으로 회신드리겠습니다." },
  { from: "김도윤", time: "12분 전", body: "아직도 소식이 없어서 다시 문의드립니다." },
];

export function TicketDetailScreen {
  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <span>
          <code className="me-2">#3021</code>
          배송이 8일째 안 와요
        </span>
        <Badge bg="danger">열림</Badge>
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
          <Button variant="primary">답장 보내기</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
