import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage() {
  const id = React.useId();
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          내용이 들어갈 자리를 대신하는 표본 글이에요. 길이가 어느 정도일 때 화면이 어떻게 보이는지 가늠하려고 넣어 뒀어요.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel2-content`}
          id={`${id}-panel2-header`}
        >
          <Typography component="span">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          내용이 들어갈 자리를 대신하는 표본 글이에요. 길이가 어느 정도일 때 화면이 어떻게 보이는지 가늠하려고 넣어 뒀어요.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel3-content`}
          id={`${id}-panel3-header`}
        >
          <Typography component="span">Accordion 동작</Typography>
        </AccordionSummary>
        <AccordionDetails>
          내용이 들어갈 자리를 대신하는 표본 글이에요. 길이가 어느 정도일 때 화면이 어떻게 보이는지 가늠하려고 넣어 뒀어요.
        </AccordionDetails>
        <AccordionActions>
          <Button>취소</Button>
          <Button>동의</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
