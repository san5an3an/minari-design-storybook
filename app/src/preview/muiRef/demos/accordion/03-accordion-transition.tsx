import * as React from 'react';
import Accordion, {
  AccordionSlots,
  accordionClasses,
} from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ExpandMore as ExpandMoreIcon } from '../_icons';
import Fade from '@mui/material/Fade';

export default function AccordionTransition() {
  const id = React.useId();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade as AccordionSlots['transition'] }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={[
          expanded
            ? {
                [`& .${accordionClasses.region}`]: {
                  height: 'auto',
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  display: 'block',
                },
              }
            : {
                [`& .${accordionClasses.region}`]: {
                  height: 0,
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  display: 'none',
                },
              },
        ]}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography component="span">Fade 로 만든 전환</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            내용이 들어갈 자리를 대신하는 표본 글이에요. 길이가 어느 정도일 때 화면이 어떻게 보이는지 가늠하려고 넣어 뒀어요.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel2-content`}
          id={`${id}-panel2-header`}
        >
          <Typography component="span">Collapse 를 쓰는 기본 전환</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            내용이 들어갈 자리를 대신하는 표본 글이에요. 길이가 어느 정도일 때 화면이 어떻게 보이는지 가늠하려고 넣어 뒀어요.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
