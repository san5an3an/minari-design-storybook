export interface Order {
  id: string;
  orderNo: string;
  customer: string;
  designName: string;
  status: "접수" | "인쇄중" | "배송중" | "완료";
  amount: number;
  dateLabel: string;
  quantity: number;
  material: string;
  shippingAddress: string;
  // 주문 상세 결제 위치 값을 id 홀짝으로 고정 지정
  paymentMethod: "카드" | "계좌이체";
}

export const ORDERS: Order[] = [
  { id: "o1", orderNo: "PS-1042", customer: "김도윤", designName: "레트로 선셋", status: "인쇄중", amount: 24000, dateLabel: "9월 18일", quantity: 2, material: "면 100%", shippingAddress: "서울시 마포구 합정동", paymentMethod: "카드" },
  { id: "o2", orderNo: "PS-1041", customer: "이서연", designName: "고양이 라인아트", status: "배송중", amount: 18000, dateLabel: "9월 17일", quantity: 1, material: "폴리 혼방", shippingAddress: "서울시 강남구 역삼동", paymentMethod: "계좌이체" },
  { id: "o3", orderNo: "PS-1040", customer: "박지훈", designName: "미니멀 로고", status: "완료", amount: 36000, dateLabel: "9월 15일", quantity: 3, material: "면 100%", shippingAddress: "부산시 해운대구 우동", paymentMethod: "카드" },
  { id: "o4", orderNo: "PS-1039", customer: "최민서", designName: "빈티지 로고", status: "완료", amount: 12000, dateLabel: "9월 14일", quantity: 1, material: "면 100%", shippingAddress: "대구시 수성구 범어동", paymentMethod: "계좌이체" },
  { id: "o5", orderNo: "PS-1038", customer: "정하은", designName: "산 그래픽", status: "접수", amount: 48000, dateLabel: "9월 18일", quantity: 4, material: "린넨", shippingAddress: "인천시 연수구 송도동", paymentMethod: "카드" },
  { id: "o6", orderNo: "PS-1037", customer: "한소율", designName: "레트로 선셋", status: "완료", amount: 24000, dateLabel: "9월 10일", quantity: 2, material: "면 100%", shippingAddress: "서울시 마포구 서교동", paymentMethod: "계좌이체" },
  { id: "o7", orderNo: "PS-1036", customer: "오지호", designName: "고양이 라인아트", status: "배송중", amount: 18000, dateLabel: "9월 16일", quantity: 1, material: "폴리 혼방", shippingAddress: "서울시 송파구 잠실동", paymentMethod: "카드" },
  { id: "o8", orderNo: "PS-1035", customer: "윤아름", designName: "타이포그래피 A", status: "완료", amount: 30000, dateLabel: "9월 8일", quantity: 2, material: "면 100%", shippingAddress: "광주시 서구 치평동", paymentMethod: "계좌이체" },
  { id: "o9", orderNo: "PS-1034", customer: "장서윤", designName: "산 그래픽", status: "인쇄중", amount: 24000, dateLabel: "9월 17일", quantity: 2, material: "린넨", shippingAddress: "서울시 종로구 익선동", paymentMethod: "카드" },
  { id: "o10", orderNo: "PS-1033", customer: "임도현", designName: "미니멀 로고", status: "접수", amount: 12000, dateLabel: "9월 18일", quantity: 1, material: "면 100%", shippingAddress: "경기도 성남시 분당구", paymentMethod: "계좌이체" },
  { id: "o11", orderNo: "PS-1032", customer: "김도윤", designName: "타이포그래피 A", status: "완료", amount: 15000, dateLabel: "9월 5일", quantity: 1, material: "면 100%", shippingAddress: "서울시 마포구 합정동", paymentMethod: "카드" },
  { id: "o12", orderNo: "PS-1031", customer: "박지훈", designName: "빈티지 로고", status: "완료", amount: 24000, dateLabel: "9월 3일", quantity: 2, material: "면 100%", shippingAddress: "부산시 해운대구 우동", paymentMethod: "계좌이체" },
];

export interface Design {
  id: string;
  name: string;
  category: string;
  price: number;
  uses: number;
  image: string;
  // 평점 고정값
  rating: number;
}

// 도안 갤러리. 이미지 필수 규칙 적용 위치. 히어로가 없는 화면은 여기로 채우기
export const DESIGNS: Design[] = [
  { id: "d1", name: "레트로 선셋", category: "일러스트", price: 12000, uses: 24, rating: 4, image: "https://images.unsplash.com/photo-1614851099511-773084f6911d?auto=format&fit=crop&w=400&q=60" },
  { id: "d2", name: "고양이 라인아트", category: "일러스트", price: 18000, uses: 31, rating: 5, image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=60" },
  { id: "d3", name: "미니멀 로고", category: "타이포", price: 12000, uses: 18, rating: 4, image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=400&q=60" },
  { id: "d4", name: "빈티지 로고", category: "타이포", price: 12000, uses: 12, rating: 3, image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=60" },
  { id: "d5", name: "산 그래픽", category: "일러스트", price: 12000, uses: 15, rating: 4, image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=60" },
  { id: "d6", name: "타이포그래피 A", category: "타이포", price: 15000, uses: 9, rating: 3, image: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&fit=crop&w=400&q=60" },
  { id: "d7", name: "기하학 패턴", category: "패턴", price: 14000, uses: 7, rating: 4, image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=400&q=60" },
  { id: "d8", name: "보태니컬 라인", category: "일러스트", price: 16000, uses: 21, rating: 5, image: "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?auto=format&fit=crop&w=400&q=60" },
];
