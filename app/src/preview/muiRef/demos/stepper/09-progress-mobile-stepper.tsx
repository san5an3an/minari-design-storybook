/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/steppers/ProgressMobileStepper.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/mui_demo_ko.py` 의 사전).
 *       ⚠️ 사전에 있는 것만 바뀐다. API 값은 영어 그대로다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import { KeyboardArrowLeft } from '../_icons';
import { KeyboardArrowRight } from '../_icons';

export default function ProgressMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const nextButtonRef = React.useRef<HTMLButtonElement>(null);
  const backButtonRef = React.useRef<HTMLButtonElement>(null);
  const previousActiveStepRef = React.useRef(activeStep);

  // Manage focus when the active step changes.
  React.useEffect(() => {
    const previousActiveStep = previousActiveStepRef.current;

    if (activeStep === 0 && previousActiveStep === 1) {
      // If the user is going back to the first step, focus the "다음" button.
      nextButtonRef.current!.focus();
    } else if (activeStep === 5 && previousActiveStep === 4) {
      // If the user is going to the last step, focus the "뒤로" button.
      backButtonRef.current!.focus();
    }

    previousActiveStepRef.current = activeStep;
  }, [activeStep]);

  return (
    <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      slotProps={{
        progress: {
          'aria-label': 'stepper linear progress',
        },
      }}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === 5}
          ref={nextButtonRef}
        >
          다음
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          ref={backButtonRef}
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          뒤로
        </Button>
      }
    />
  );
}
