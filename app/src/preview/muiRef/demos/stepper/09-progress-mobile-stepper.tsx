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
      nextButtonRef.current!.focus();
    } else if (activeStep === 5 && previousActiveStep === 4) {
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
