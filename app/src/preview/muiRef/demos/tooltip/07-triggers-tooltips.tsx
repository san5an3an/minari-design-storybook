import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';

export default function TriggersTooltips() {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid>
          <Tooltip describeChild disableFocusListener title="더하기">
            <Button>올리거나 눌러 보세요</Button>
          </Tooltip>
        </Grid>
        <Grid>
          <Tooltip describeChild disableHoverListener title="더하기">
            <Button>초점을 주거나 눌러 보세요</Button>
          </Tooltip>
        </Grid>
        <Grid>
          <Tooltip
            describeChild
            disableFocusListener
            disableTouchListener
            title="더하기"
          >
            <Button>올리기</Button>
          </Tooltip>
        </Grid>
        <Grid>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Tooltip
                describeChild
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="더하기"
                slotProps={{
                  popper: {
                    disablePortal: true,
                  },
                }}
              >
                <Button onClick={handleTooltipOpen}>누르기</Button>
              </Tooltip>
            </div>
          </ClickAwayListener>
        </Grid>
      </Grid>
    </div>
  );
}
