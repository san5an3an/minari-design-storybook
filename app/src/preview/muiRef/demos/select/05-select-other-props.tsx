import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectOtherProps() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
        <InputLabel id="demo-simple-select-disabled-label">나이</InputLabel>
        <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={age}
          label="나이"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>없음</em>
          </MenuItem>
          <MenuItem value={10}>열</MenuItem>
          <MenuItem value={20}>스물</MenuItem>
          <MenuItem value={30}>서른</MenuItem>
        </Select>
        <FormHelperText>못 쓰는 상태</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} error>
        <InputLabel id="demo-simple-select-error-label">나이</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={age}
          label="나이"
          onChange={handleChange}
          renderValue={(value) => `⚠️  - ${value}`}
        >
          <MenuItem value="">
            <em>없음</em>
          </MenuItem>
          <MenuItem value={10}>열</MenuItem>
          <MenuItem value={20}>스물</MenuItem>
          <MenuItem value={30}>서른</MenuItem>
        </Select>
        <FormHelperText>오류</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-readonly-label">나이</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={age}
          label="나이"
          onChange={handleChange}
          inputProps={{ readOnly: true }}
        >
          <MenuItem value="">
            <em>없음</em>
          </MenuItem>
          <MenuItem value={10}>열</MenuItem>
          <MenuItem value={20}>스물</MenuItem>
          <MenuItem value={30}>서른</MenuItem>
        </Select>
        <FormHelperText>읽기 전용</FormHelperText>
      </FormControl>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">나이</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          label="Age *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>없음</em>
          </MenuItem>
          <MenuItem value={10}>열</MenuItem>
          <MenuItem value={20}>스물</MenuItem>
          <MenuItem value={30}>서른</MenuItem>
        </Select>
        <FormHelperText>필수</FormHelperText>
      </FormControl>
    </div>
  );
}
