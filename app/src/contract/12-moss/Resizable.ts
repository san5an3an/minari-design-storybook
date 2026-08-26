export type ResizableOrientation = "horizontal" | "vertical";

export interface ResizableContract {
  // 가로 배치인지 세로 배치인지 여부. 기본값 horizontal
  orientation?: ResizableOrientation;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const ResizableParts = [
  "ResizablePanel", // 크기 조절 위치. 초기 크기 패널별로 지정
  "ResizableHandle", // 경계 이동 핸들
] as const;

export interface ResizableHandleContract {
  // 잡는 눈금 표시. 기본값 false
  withHandle?: boolean;
}
