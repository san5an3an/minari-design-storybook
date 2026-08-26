/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/text-fields/ComposedTextField.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **한 가지만** 바꾼 것이다 —
 *    아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
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
        <InputLabel htmlFor={`${simpleId}-input`}>Name</InputLabel>
        <Input id={`${simpleId}-input`} defaultValue="Composed TextField" />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor={`${helperId}-input`}>Name</InputLabel>
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
        <InputLabel htmlFor={`${disabledId}-input`}>Name</InputLabel>
        <Input id={`${disabledId}-input`} defaultValue="Composed TextField" />
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl error variant="standard">
        <InputLabel htmlFor={`${errorId}-input`}>Name</InputLabel>
        <Input
          id={`${errorId}-input`}
          defaultValue="Composed TextField"
          aria-describedby={`${errorId}-error-text`}
        />
        <FormHelperText id={`${errorId}-error-text`}>Error</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor={`${outlinedId}-input`}>Name</InputLabel>
        <OutlinedInput
          id={`${outlinedId}-input`}
          defaultValue="Composed TextField"
          label="Name"
        />
      </FormControl>
      <FormControl variant="filled">
        <InputLabel htmlFor={`${filledId}-input`}>Name</InputLabel>
        <FilledInput id={`${filledId}-input`} defaultValue="Composed TextField" />
      </FormControl>
    </Box>
  );
}
