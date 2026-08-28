import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            일반 설정
          </Typography>
          <Typography component="span" sx={{ color: 'text.secondary' }}>
            저는 아코디언이에요
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            내용이 들어갈 자리를 대신하는 짧은 표본 글이에요. 짧은 문단이 그릇 안에서 어떻게 놓이는지 봐 주세요.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            사용자
          </Typography>
          <Typography component="span" sx={{ color: 'text.secondary' }}>
            지금은 소유자가 아니에요
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            내용이 들어갈 자리를 대신하는 짧은 표본 글이에요. 조금 더 긴 한 문장이 들어갈 때의 모습이에요.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            고급 설정
          </Typography>
          <Typography component="span" sx={{ color: 'text.secondary' }}>
            이 웹 서버 전체에서 거르기를 껐어요
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            내용이 들어갈 자리를 대신하는 짧은 표본 글이에요. 한두 줄이 넘지 않을 때의 모습을 보려고 넣었어요.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            개인 정보
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            내용이 들어갈 자리를 대신하는 짧은 표본 글이에요. 한두 줄이 넘지 않을 때의 모습을 보려고 넣었어요.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
