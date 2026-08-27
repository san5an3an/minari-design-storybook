import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectVariants() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-outlined-label">나이</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="나이"
        >
          <MenuItem value="">
            <em>없음</em>
          </MenuItem>
          <MenuItem value={10}>열</MenuItem>
          <MenuItem value={20}>스물</MenuItem>
          <MenuItem value={30}>서른</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">나이</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>없음</em>
          </MenuItem>
          <MenuItem value={10}>열</MenuItem>
          <MenuItem value={20}>스물</MenuItem>
          <MenuItem value={30}>서른</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">나이</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>없음</em>
          </MenuItem>
          <MenuItem value={10}>열</MenuItem>
          <MenuItem value={20}>스물</MenuItem>
          <MenuItem value={30}>서른</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
