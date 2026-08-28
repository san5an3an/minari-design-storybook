import * as React from "react";
import MuiStepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export interface MuiStagesProps {
  items: ReadonlyArray<{ label: React.ReactNode }>;
  current: number;
  className?: string;
}

export function Stages({ items, current, className }: MuiStagesProps) {
  return (
    <MuiStepper className={className} activeStep={current} alternativeLabel>
      {items.map((it, i) => (
        // key는 위치 번호 사용. 이름 중복 시 두 단계가 한 셀로 병합될 수 있음
        <Step key={i}>
          <StepLabel>{it.label}</StepLabel>
        </Step>
      ))}
    </MuiStepper>
  );
}
