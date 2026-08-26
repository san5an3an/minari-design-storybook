import type { ComponentType } from "react";
import type { Condition } from "../PropsTable";
import type { SystemDefinition } from "../../systems/types";
import type { Mode } from "../tokens";

export interface PageProps {
  system: SystemDefinition;
  // 현재 활성 모드
  active: Mode;
}

export interface PageModule {
  Page: ComponentType<PageProps>;
  // 값이 아닌 판단 결과 목록
  conditions?: readonly Condition[];
}
