/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/text-fields/InputSuffixShrink.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **한 가지만** 바꾼 것이다 —
 *    아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import Box from '@mui/material/Box';
import { filledInputClasses } from '@mui/material/FilledInput';
import { inputBaseClasses } from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export default function InputSuffixShrink() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-suffix-shrink"
        label="Outlined"
        variant="outlined"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  opacity: 0,
                  pointerEvents: 'none',
                  [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                    opacity: 1,
                  },
                }}
              >
                lbs
              </InputAdornment>
            ),
          },
        }}
      />
      <TextField
        id="filled-suffix-shrink"
        label="Filled"
        variant="filled"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  alignSelf: 'flex-end',
                  opacity: 0,
                  pointerEvents: 'none',
                  [`.${filledInputClasses.root} &`]: {
                    marginBottom: '7.5px',
                  },
                  [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                    opacity: 1,
                  },
                }}
              >
                days
              </InputAdornment>
            ),
          },
        }}
      />
      <TextField
        id="standard-suffix-shrink"
        label="Standard"
        variant="standard"
        slotProps={{
          htmlInput: {
            sx: { textAlign: 'right' },
          },
          input: {
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  alignSelf: 'flex-end',
                  margin: 0,
                  marginBottom: '5px',
                  opacity: 0,
                  pointerEvents: 'none',
                  [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                    opacity: 1,
                  },
                }}
              >
                @gmail.com
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
}
