export interface Meetup {
  id: string;
  title: string;
  category: string;
  dateLabel: string;
  location: string;
  host: string;
  seatsLeft: number;
  description: string;
  colorToken: string;
}

export const MEETUPS: Meetup[] = [
  {
    id: "m1",
    title: "주말 새벽 러닝 클럽",
    category: "운동",
    dateLabel: "9월 20일(토) 오전 6시",
    location: "한강공원 반포지구",
    host: "박러너",
    seatsLeft: 4,
    description: "5km 완주 목표. 페이스는 6분/km 내외로 천천히 함께 뜁니다. 러닝화만 챙겨오세요.",
    colorToken: "var(--semantic-bg-success-subtle, #dcfce7)",
  },
  {
    id: "m2",
    title: "독서모임, 9월 선정도서",
    category: "독서",
    dateLabel: "9월 24일(수) 오후 7시",
    location: "합정 스터디룸",
    host: "김서재",
    seatsLeft: 2,
    description: "이번 달은 단편집 한 권을 같이 읽고 이야기합니다. 완독하지 않아도 참여 가능해요.",
    colorToken: "var(--semantic-bg-brand-subtle, #ede9fe)",
  },
  {
    id: "m3",
    title: "사이드 프로젝트 데모데이",
    category: "개발",
    dateLabel: "9월 27일(토) 오후 2시",
    location: "역삼 코워킹스페이스",
    host: "이빌더",
    seatsLeft: 0,
    description: "각자 만든 사이드 프로젝트를 5분씩 발표하고 피드백을 나눕니다. 마감되었습니다.",
    colorToken: "var(--semantic-bg-info-subtle, #e0f2fe)",
  },
  {
    id: "m4",
    title: "드로잉 원데이 클래스",
    category: "취미",
    dateLabel: "10월 4일(토) 오전 10시",
    location: "성수 아틀리에",
    host: "최그림",
    seatsLeft: 6,
    description: "재료 전부 제공. 초보자도 부담 없이 참여할 수 있는 수채화 원데이 클래스입니다.",
    colorToken: "var(--semantic-bg-warning-subtle, #fef3c7)",
  },
];

export interface Rsvp {
  meetupId: string;
  status: "확정" | "대기";
}

export const MY_RSVPS: Rsvp[] = [
  { meetupId: "m1", status: "확정" },
  { meetupId: "m2", status: "대기" },
];

export interface Host {
  id: string;
  name: string;
  bio: string;
  tags: string[];
  meetupCount: number;
}

export const HOSTS: Host[] = [
  { id: "h1", name: "박러너", bio: "5년째 새벽 러닝 클럽을 운영하고 있어요.", tags: ["운동", "아웃도어"], meetupCount: 42 },
  { id: "h2", name: "김서재", bio: "매달 새 책을 고르는 독서모임 호스트.", tags: ["독서", "글쓰기"], meetupCount: 18 },
  { id: "h3", name: "이빌더", bio: "개발자 커뮤니티 데모데이를 기획합니다.", tags: ["개발", "네트워킹"], meetupCount: 9 },
  { id: "h4", name: "최그림", bio: "누구나 그릴 수 있다고 믿는 드로잉 강사.", tags: ["취미", "미술"], meetupCount: 27 },
];
