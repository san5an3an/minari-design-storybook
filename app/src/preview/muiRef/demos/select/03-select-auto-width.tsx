import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">나이</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="나이"
        >
          <MenuItem value="">
            <em>없음</em>
          </MenuItem>
          <MenuItem value={20}>스물</MenuItem>
          <MenuItem value={21}>스물하나</MenuItem>
          <MenuItem value={22}>스물하고 반</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
