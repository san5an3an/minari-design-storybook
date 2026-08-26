export type AspectratioRatio = "square" | "video" | "portrait";

export interface AspectratioContract {
  // 영역의 가로세로 비, 기본값 video
  ratio?: AspectratioRatio;
}
