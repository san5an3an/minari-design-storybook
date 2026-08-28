export interface Listing {
  id: string;
  // 한 행 소개 문구, 카드 하단에 표시
  title: string;
  // 동네, 구
  area: string;
  // 월세 (만원)
  rent: number;
  // 관리비 (만원)
  fee: number;
  // 보증금 (만원)
  deposit: number;
  // 전용면적(㎡)
  size: number;
  rooms: number;
  baths: number;
  // 주차 대수
  parking: number;
  floor: string;
  // 지하철역까지 도보 소요 시간(분)
  walk: number;
  rating: number;
  // 카드에 붙는 표
  tags: string[];
  // 편의시설, 상세 화면에서 칩으로 나열하기
  amenities: string[];
}

export const LISTINGS: readonly Listing[] = [
  {
    id: "L-2041",
    title: "볕이 깊게 드는 남향 투룸, 베란다 확장",
    area: "연남동 · 마포구",
    rent: 95, fee: 12, deposit: 3000,
    size: 52, rooms: 2, baths: 1, parking: 1, floor: "3/5층", walk: 6,
    rating: 4.7,
    tags: ["새 매물", "반려동물"],
    amenities: ["엘리베이터", "주차", "반려동물", "즉시 입주", "베란다"],
  },
  {
    id: "L-1877",
    title: "역까지 3분, 풀옵션 원룸",
    area: "합정동 · 마포구",
    rent: 72, fee: 8, deposit: 1000,
    size: 29, rooms: 1, baths: 1, parking: 0, floor: "6/12층", walk: 3,
    rating: 4.3,
    tags: ["풀옵션", "역세권"],
    amenities: ["엘리베이터", "풀옵션", "즉시 입주"],
  },
  {
    id: "L-3120",
    title: "조용한 골목 안쪽, 넓은 거실의 쓰리룸",
    area: "서교동 · 마포구",
    rent: 145, fee: 15, deposit: 5000,
    size: 84, rooms: 3, baths: 2, parking: 1, floor: "2/4층", walk: 9,
    rating: 4.9,
    tags: ["가격 내림"],
    amenities: ["주차", "베란다", "붙박이장", "반려동물"],
  },
  {
    id: "L-2765",
    title: "신축 오피스텔, 라운지와 헬스장",
    area: "상수동 · 마포구",
    rent: 118, fee: 18, deposit: 2000,
    size: 44, rooms: 1, baths: 1, parking: 1, floor: "14/20층", walk: 4,
    rating: 4.5,
    tags: ["신축", "역세권"],
    amenities: ["엘리베이터", "주차", "헬스장", "풀옵션", "무인택배"],
  },
  {
    id: "L-1502",
    title: "복층 구조, 천장 높은 작업실 겸용",
    area: "망원동 · 마포구",
    rent: 88, fee: 10, deposit: 2000,
    size: 46, rooms: 2, baths: 1, parking: 0, floor: "4/4층", walk: 11,
    rating: 4.1,
    tags: ["복층"],
    amenities: ["베란다", "붙박이장"],
  },
  {
    id: "L-3344",
    title: "한강 보이는 고층, 남서향 투룸",
    area: "당인동 · 마포구",
    rent: 168, fee: 20, deposit: 6000,
    size: 66, rooms: 2, baths: 2, parking: 1, floor: "18/22층", walk: 7,
    rating: 4.8,
    tags: ["새 매물", "조망"],
    amenities: ["엘리베이터", "주차", "헬스장", "무인택배", "베란다"],
  },
];

// 월세와 관리비를 한 곳에 정의
export function monthlyTotal(l: Listing): number {
  return l.rent + l.fee;
}

// 만원 단위를 읽기 쉬운 형태로 변환. 95는 95만으로 표시
export function won(man: number): string {
  return `${man.toLocaleString("ko-KR")}만`;
}
