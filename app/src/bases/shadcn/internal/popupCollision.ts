import * as React from "react";

// Base UI Positioner 의 collisionPadding 과 같은 형태 정의. 숫자 하나 또는 네 변 값을 사용함
export type PopupCollisionPadding =
  | number
  | Partial<Record<"top" | "right" | "bottom" | "left", number>>;

export interface PopupSafeArea {
  collisionPadding: PopupCollisionPadding;
  // false 이면 Select 의 alignItemWithTrigger 모드 해제. 그 모드는 좌우 5px 가 고정이라 collisionPadding 이 적용되지 않음
  alignItemWithTrigger?: boolean;
}

export const PopupSafeAreaContext = React.createContext<PopupSafeArea | undefined>(undefined);

export function usePopupSafeArea(): PopupSafeArea | undefined {
  return React.useContext(PopupSafeAreaContext);
}
