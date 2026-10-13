import * as React from "react";

// 기기 상태 막대, 홈 표시줄이 덮는 높이(px) 지정. MobileDeviceFrame 겹침 이미지와 같은 값이라 함께 바꿔야 함
export const DEVICE_SAFE = { top: 68, bottom: 37 } as const;

// px 값을 rem 문자열로 변환
export const remOf = (px: number) => `${px / 16}rem`;

export interface SafeArea { top: number; bottom: number }

export const SafeAreaContext = React.createContext<SafeArea>({ top: 0, bottom: 0 });
