import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionExpandDefault() {
  const id = React.useId();
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography component="span">처음부터 펼쳐진 상태</Typography>
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
          <Typography component="span">머리글</Typography>
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
