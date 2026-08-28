import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function BasicTooltip() {
  return (
    <Tooltip title="지우기">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}
