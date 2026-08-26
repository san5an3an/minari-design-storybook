import { Marker as ShadcnMarker, MarkerContent, MarkerIcon } from "@/components/ui/marker";
import type { MarkerImpl, MarkerProps } from "../../systems/props";

function MarkerRoot({ render, children, ...rest }: MarkerProps) {
  // render는 ReactNode 계약. 라이브러리는 ReactElement만 받아 타입 좁혀 전달
  return (
    <ShadcnMarker render={render as never} {...rest}>
      {children}
    </ShadcnMarker>
  );
}

export const Marker = Object.assign(MarkerRoot, {
  Icon: MarkerIcon,
  Content: MarkerContent,
}) as unknown as MarkerImpl;
