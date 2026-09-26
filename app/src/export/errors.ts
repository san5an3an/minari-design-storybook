export class RequestError extends Error {
  // 라벨을 필드로 등록. instanceof만 쓰면 번들 분리 시 클래스 오판 가능해서임
  readonly blame = "request" as const;
  constructor(message: string) {
    super(message);
    this.name = "RequestError";
  }
}

// 같은 입력이 원래 성공해야 하는데 배선, 파일, 생성물 문제로 실패하는 경우
export class WiringError extends Error {
  readonly blame = "wiring" as const;
  constructor(message: string) {
    super(message);
    this.name = "WiringError";
  }
}

// 원인 주체 표시, 미상 시 unknown 값으로 내부 문제 처리
export function blameOf(e: unknown): "request" | "wiring" | "unknown" {
  if (e instanceof RequestError) return "request";
  if (e instanceof WiringError) return "wiring";
  // 번들 분리로 클래스 식별 나뉘는 경우까지 필드로 재확인
  if (typeof e === "object" && e !== null) {
    const b = (e as { blame?: unknown }).blame;
    if (b === "request" || b === "wiring") return b;
  }
  return "unknown";
}
