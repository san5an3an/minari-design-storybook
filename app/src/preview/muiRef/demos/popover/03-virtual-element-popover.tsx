import * as React from 'react';
import Popover, { PopoverProps } from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function VirtualElementPopover() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<PopoverProps['anchorEl']>(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleMouseUp = () => {
    const selection = window.getSelection();

    // Skip if selection has a length of 0
    if (!selection || selection.anchorOffset === selection.focusOffset) {
      return;
    }

    const getBoundingClientRect = () => {
      return selection.getRangeAt(0).getBoundingClientRect();
    };

    setOpen(true);

    setAnchorEl({ getBoundingClientRect, nodeType: 1 });
  };

  const id = open ? 'virtual-element-popover' : undefined;

  return (
    <div>
      <Typography aria-describedby={id} onMouseUp={handleMouseUp}>
        내용이 들어갈 자리를 대신하는 표본 글이에요. 글이 어느 정도 길 때 줄이 어떻게 나뉘고 여백이 어떻게 잡히는지 가늠하려고 넣어 뒀어요. 여기 적힌 내용 자체에는 뜻이 없으니 길이와 짜임만 봐 주세요. 앞의 것보다 조금 짧은 판이에요.
      </Typography>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        onClose={handleClose}
        disableAutoFocus
      >
        <Paper>
          <Typography sx={{ p: 2 }}>Popover 의 내용이에요.</Typography>
        </Paper>
      </Popover>
    </div>
  );
}
