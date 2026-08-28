import * as React from "react";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import ErrorRounded from "@mui/icons-material/ErrorRounded";
import InfoRounded from "@mui/icons-material/InfoRounded";
import WarningRounded from "@mui/icons-material/WarningRounded";
import type { SvgIconProps } from "@mui/material/SvgIcon";

// tone 값을 MUI 아이콘으로 변환
const TONE_ICON = {
  success: CheckCircleRounded,
  warning: WarningRounded,
  danger: ErrorRounded,
  info: InfoRounded,
  brand: InfoRounded,
} as const;

// 종류별 표시 여부 확인. ToneIcon 참거짓으로 판단 불가. JSX는 항상 참임
export function hasToneIcon(tone?: string): boolean {
  return tone !== undefined && tone in TONE_ICON;
}

// 종류별로 표시, 미지정 시 제외
export function ToneIcon({ tone, ...rest }: { tone?: string } & SvgIconProps) {
  const Icon = TONE_ICON[tone as keyof typeof TONE_ICON];
  return Icon ? <Icon {...rest} /> : null;
}
