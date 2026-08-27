/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/accordion/AccordionExpandIcon.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/mui_demo_ko.py` 의 사전).
 *       ⚠️ 사전에 있는 것만 바뀐다. API 값은 영어 그대로다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ArrowDownward as ArrowDownwardIcon } from '../_icons';
import { ArrowDropDown as ArrowDropDownIcon } from '../_icons';

export default function AccordionExpandIcon() {
  const id = React.useId();
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            내용이 들어갈 자리를 대신하는 표본 글이에요. 길이가 어느 정도일 때 화면이 어떻게 보이는지 가늠하려고 넣어 뒀어요.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls={`${id}-panel2-content`}
          id={`${id}-panel2-header`}
        >
          <Typography component="span">Accordion 2</Typography>
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
