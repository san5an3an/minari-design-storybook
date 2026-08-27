import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function ComposedTextField() {
  const simpleId = React.useId();
  const helperId = React.useId();
  const disabledId = React.useId();
  const errorId = React.useId();
  const outlinedId = React.useId();
  const filledId = React.useId();
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1 } }}
      noValidate
      autoComplete="off"
    >
      <FormControl variant="standard">
        <InputLabel htmlFor={`${simpleId}-input`}>이름</InputLabel>
        <Input id={`${simpleId}-input`} defaultValue="Composed TextField" />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor={`${helperId}-input`}>이름</InputLabel>
        <Input
          id={`${helperId}-input`}
          defaultValue="Composed TextField"
          aria-describedby={`${helperId}-helper-text`}
        />
        <FormHelperText id={`${helperId}-helper-text`}>
          Some important helper text
        </FormHelperText>
      </FormControl>
      <FormControl disabled variant="standard">
        <InputLabel htmlFor={`${disabledId}-input`}>이름</InputLabel>
        <Input id={`${disabledId}-input`} defaultValue="Composed TextField" />
        <FormHelperText>못 쓰는 상태</FormHelperText>
      </FormControl>
      <FormControl error variant="standard">
        <InputLabel htmlFor={`${errorId}-input`}>이름</InputLabel>
        <Input
          id={`${errorId}-input`}
          defaultValue="Composed TextField"
          aria-describedby={`${errorId}-error-text`}
        />
        <FormHelperText id={`${errorId}-error-text`}>오류</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor={`${outlinedId}-input`}>이름</InputLabel>
        <OutlinedInput
          id={`${outlinedId}-input`}
          defaultValue="Composed TextField"
          label="이름"
        />
      </FormControl>
      <FormControl variant="filled">
        <InputLabel htmlFor={`${filledId}-input`}>이름</InputLabel>
        <FilledInput id={`${filledId}-input`} defaultValue="Composed TextField" />
      </FormControl>
    </Box>
  );
}
