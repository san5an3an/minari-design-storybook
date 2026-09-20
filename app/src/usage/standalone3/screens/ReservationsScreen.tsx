import { Badge } from "../../../bases/standalone/Badge";
import { Card } from "../../../bases/standalone/Card";

interface Reservation {
  book: string;
  requester: string;
  position: number;
  requested: string;
}

const RESERVATIONS: Reservation[] = [
  { book: "타입스크립트 핸드북", requester: "정하은", position: 1, requested: "09-16" },
  { book: "아침의 문", requester: "한지우", position: 1, requested: "09-17" },
  { book: "행동경제학 강의", requester: "오세준", position: 1, requested: "09-15" },
  { book: "행동경제학 강의", requester: "윤새별", position: 2, requested: "09-17" },
  { book: "타입스크립트 핸드북", requester: "송민재", position: 2, requested: "09-18" },
  { book: "아침의 문", requester: "임도현", position: 2, requested: "09-18" },
];

export function ReservationsScreen {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {RESERVATIONS.map((r) => (
        <Card
          key={`${r.book}-${r.requester}`}
          title={r.book}
          description={`${r.requester} · 신청 ${r.requested}`}
          action={<Badge tone={r.position === 1 ? "brand" : "neutral"}>대기 {r.position}번</Badge>}
        />
      ))}
    </div>
  );
}
