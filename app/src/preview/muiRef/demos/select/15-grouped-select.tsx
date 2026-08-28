import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GroupedSelect() {
  const nativeId = React.useId();
  const id = React.useId();
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor={`${nativeId}-select`}>묶기</InputLabel>
        <Select native defaultValue="" id={`${nativeId}-select`} label="묶기">
          <option aria-label="없음" value="" />
          <optgroup label="분류 1">
            <option value={1}>선택지 1</option>
            <option value={2}>선택지 2</option>
          </optgroup>
          <optgroup label="분류 2">
            <option value={3}>선택지 3</option>
            <option value={4}>선택지 4</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id={`${id}-label`}>묶기</InputLabel>
        <Select
          defaultValue=""
          id={`${id}-select`}
          label="묶기"
          SelectDisplayProps={{
            'aria-labelledby': `${id}-label`,
          }}
        >
          <MenuItem value="">
            <em>없음</em>
          </MenuItem>
          <ListSubheader>분류 1</ListSubheader>
          <MenuItem value={1}>선택지 1</MenuItem>
          <MenuItem value={2}>선택지 2</MenuItem>
          <ListSubheader>분류 2</ListSubheader>
          <MenuItem value={3}>선택지 3</MenuItem>
          <MenuItem value={4}>선택지 4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
