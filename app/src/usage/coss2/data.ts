export type Equipment = "빔프로젝터" | "화이트보드" | "화상회의" | "TV모니터" | "음향시스템";

export const EQUIPMENT_OPTIONS: readonly Equipment[] = ["빔프로젝터", "화이트보드", "화상회의", "TV모니터", "음향시스템"];

export type RoomStatus = "사용가능" | "사용중" | "점검중";

export interface Room {
  id: string;
  name: string;
  floor: string;
  capacity: number;
  equipment: readonly Equipment[];
  status: RoomStatus;
  note: string;
}

// 카드, 그리드 분할 시 나머지 없도록 8개로 고정
export const ROOMS: readonly Room[] = [
  { id: "r1", name: "하늘", floor: "3층", capacity: 12, equipment: ["빔프로젝터", "화상회의", "화이트보드"], status: "사용가능", note: "채광이 좋아 오전 회의에 자주 쓰여요." },
  { id: "r2", name: "바다", floor: "3층", capacity: 8, equipment: ["빔프로젝터", "화이트보드"], status: "사용가능", note: "화이트보드 2면, 브레인스토밍에 알맞아요." },
  { id: "r3", name: "숲", floor: "3층", capacity: 6, equipment: ["화이트보드", "TV모니터"], status: "사용가능", note: "소규모 1:1 면담에 적합한 조용한 방이에요." },
  { id: "r4", name: "별빛", floor: "5층", capacity: 20, equipment: ["빔프로젝터", "화상회의", "음향시스템"], status: "사용중", note: "전사 행사·타운홀에 쓰는 대회의실이에요." },
  { id: "r5", name: "노을", floor: "5층", capacity: 4, equipment: ["TV모니터"], status: "점검중", note: "모니터 교체 작업 중이라 오늘은 예약이 막혀 있어요." },
  { id: "r6", name: "구름", floor: "5층", capacity: 10, equipment: ["화상회의", "화이트보드"], status: "사용가능", note: "화상회의 장비가 상시 세팅돼 있어요." },
  { id: "r7", name: "오로라", floor: "7층", capacity: 16, equipment: ["빔프로젝터", "화상회의", "음향시스템", "화이트보드"], status: "사용가능", note: "장비가 가장 많아 데모·발표에 인기가 많아요." },
  { id: "r8", name: "이슬", floor: "7층", capacity: 6, equipment: ["화이트보드"], status: "사용가능", note: "가볍게 붙어 앉아 코드리뷰하기 좋아요." },
] as const;

export const ROOM_MAP: ReadonlyMap<string, Room> = new Map(ROOMS.map((r) => [r.id, r]));

// 09~18시, 경계선 10개로 9개 셀 구성. 시작 시각 문자열도 이 배열에서 파생
export const HOUR_MARKS: readonly number[] = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

export function formatHour(h: number): string {
  return `${String(h).padStart(2, "0")}:00`;
}

export interface DateOption {
  iso: string;
  label: string;
  weekday: string;
}

// 데모용 고정 3일 날짜 사용. 라벨은 오늘, 내일, 모레 상대값 표시
export const DATES: readonly DateOption[] = [
  { iso: "2026-09-22", label: "오늘", weekday: "화" },
  { iso: "2026-09-23", label: "내일", weekday: "수" },
  { iso: "2026-09-24", label: "모레", weekday: "목" },
] as const;

export const CURRENT_USER = { name: "김도윤", department: "프로덕트팀", initial: "김" } as const;

const DATE_ISO_SET: ReadonlySet<string> = new Set(DATES.map((d) => d.iso));

export function isKnownDate(iso: string): boolean {
  return DATE_ISO_SET.has(iso);
}

// Calendar는 Date로 주고받아 ISO 변환. UTC 파싱 시 하루 밀림 문제임
export function isoToDate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function dateToIso(date: Date): string {
  return `${date.getFullYear}-${String(date.getMonth + 1).padStart(2, "0")}-${String(date.getDate).padStart(2, "0")}`;
}

export type BookingStatus = "예정" | "진행중" | "완료" | "취소";
export type Recurrence = "1회" | "매주 반복" | "매월 반복";

export interface Booking {
  id: string;
  roomId: string;
  date: string;
  start: string;
  end: string;
  title: string;
  organizer: string;
  department: string;
  attendeeCount: number;
  status: BookingStatus;
  recurrence: Recurrence;
  equipmentRequested: readonly Equipment[];
  note: string;
}

// 샘플 데이터 총 12건, 취소 0건은 의도된 빈 상태
export const INITIAL_BOOKINGS: readonly Booking[] = [
  { id: "b1", roomId: "r1", date: "2026-09-22", start: "09:00", end: "10:00", title: "주간 스프린트 플래닝", organizer: "김도윤", department: "프로덕트팀", attendeeCount: 8, status: "완료", recurrence: "매주 반복", equipmentRequested: ["빔프로젝터", "화이트보드"], note: "지난주 이월 항목부터 확인해요." },
  { id: "b2", roomId: "r2", date: "2026-09-22", start: "10:00", end: "11:00", title: "신규 입사자 온보딩", organizer: "박서현", department: "HR팀", attendeeCount: 6, status: "완료", recurrence: "1회", equipmentRequested: ["빔프로젝터"], note: "" },
  { id: "b3", roomId: "r4", date: "2026-09-22", start: "11:00", end: "13:00", title: "3분기 사업 리뷰", organizer: "이하준", department: "경영전략팀", attendeeCount: 18, status: "진행중", recurrence: "1회", equipmentRequested: ["빔프로젝터", "화상회의", "음향시스템"], note: "임원 화상 접속 3인 포함." },
  { id: "b4", roomId: "r7", date: "2026-09-22", start: "13:00", end: "14:00", title: "고객사 화상 미팅 (ACME)", organizer: "김도윤", department: "프로덕트팀", attendeeCount: 5, status: "예정", recurrence: "1회", equipmentRequested: ["화상회의", "TV모니터"], note: "계약 갱신 논의, 자료 미리 공유함." },
  { id: "b5", roomId: "r6", date: "2026-09-22", start: "14:00", end: "15:00", title: "디자인 리뷰", organizer: "최유나", department: "디자인팀", attendeeCount: 7, status: "예정", recurrence: "매주 반복", equipmentRequested: ["화상회의", "화이트보드"], note: "" },
  { id: "b6", roomId: "r3", date: "2026-09-22", start: "15:00", end: "16:00", title: "1:1 면담", organizer: "김도윤", department: "프로덕트팀", attendeeCount: 2, status: "예정", recurrence: "1회", equipmentRequested: [], note: "" },
  { id: "b7", roomId: "r8", date: "2026-09-22", start: "16:00", end: "17:00", title: "코드리뷰 세션", organizer: "정하늘", department: "엔지니어링팀", attendeeCount: 4, status: "예정", recurrence: "매주 반복", equipmentRequested: ["TV모니터"], note: "" },
  { id: "b8", roomId: "r1", date: "2026-09-22", start: "17:00", end: "18:00", title: "주간 회고", organizer: "김도윤", department: "프로덕트팀", attendeeCount: 8, status: "예정", recurrence: "매주 반복", equipmentRequested: ["화이트보드"], note: "" },
  { id: "b9", roomId: "r2", date: "2026-09-23", start: "09:00", end: "11:00", title: "파트너사 계약 협상", organizer: "이하준", department: "경영전략팀", attendeeCount: 6, status: "예정", recurrence: "1회", equipmentRequested: ["빔프로젝터", "화상회의"], note: "" },
  { id: "b10", roomId: "r6", date: "2026-09-23", start: "10:00", end: "11:00", title: "고객 인터뷰", organizer: "최유나", department: "디자인팀", attendeeCount: 3, status: "예정", recurrence: "1회", equipmentRequested: ["화상회의"], note: "인터뷰 대상자 2명, 녹화 동의 완료." },
  { id: "b11", roomId: "r4", date: "2026-09-23", start: "13:00", end: "15:00", title: "전사 타운홀 리허설", organizer: "박서현", department: "HR팀", attendeeCount: 20, status: "예정", recurrence: "1회", equipmentRequested: ["빔프로젝터", "음향시스템", "화상회의"], note: "" },
  { id: "b12", roomId: "r1", date: "2026-09-24", start: "09:00", end: "10:00", title: "월간 OKR 체크인", organizer: "김도윤", department: "프로덕트팀", attendeeCount: 8, status: "예정", recurrence: "매월 반복", equipmentRequested: ["빔프로젝터", "화이트보드"], note: "" },
];

export interface NewBookingDraft {
  roomId: string;
  title: string;
  date: string;
  start: string;
  end: string;
  attendeeCount: number;
  recurrence: Recurrence;
  equipmentRequested: readonly Equipment[];
  notifyAttendees: boolean;
  note: string;
}

export function draftToBooking(draft: NewBookingDraft): Booking {
  return {
    id: `bk-new-${Date.now}`,
    roomId: draft.roomId,
    date: draft.date,
    start: draft.start,
    end: draft.end,
    title: draft.title.trim || "제목 없는 예약",
    organizer: CURRENT_USER.name,
    department: CURRENT_USER.department,
    attendeeCount: draft.attendeeCount,
    status: "예정",
    recurrence: draft.recurrence,
    equipmentRequested: draft.equipmentRequested,
    note: draft.note.trim,
  };
}

function toMinutes(t: string): number {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

// 같은 방/날짜 겹침 유효 예약 검색. excludeId는 자기중복 오탐 방지용 값임
export function findConflict(
  bookings: readonly Booking[],
  roomId: string,
  date: string,
  start: string,
  end: string,
  excludeId?: string,
): Booking | null {
  const s = toMinutes(start);
  const e = toMinutes(end);
  return (
    bookings.find(
      (b) =>
        b.id !== excludeId &&
        b.roomId === roomId &&
        b.date === date &&
        b.status !== "취소" &&
        toMinutes(b.start) < e &&
        s < toMinutes(b.end),
    ) ?? null
  );
}

// 타임라인 그리드 셀 계산. 첫 셀은 방 이름 라벨이라 시간 셀은 2부터 시작하도록 처리
export function hourToColumn(time: string): number {
  const hour = Number(time.split(":")[0]);
  return hour - HOUR_MARKS[0] + 2;
}
