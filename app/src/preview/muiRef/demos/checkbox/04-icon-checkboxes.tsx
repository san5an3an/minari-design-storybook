import Checkbox from '@mui/material/Checkbox';
import { FavoriteBorder } from '../_icons';
import { Favorite } from '../_icons';
import { BookmarkBorder as BookmarkBorderIcon } from '../_icons';
import { Bookmark as BookmarkIcon } from '../_icons';

const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

export default function IconCheckboxes() {
  return (
    <div>
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </div>
  );
}
