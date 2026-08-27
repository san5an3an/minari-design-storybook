/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/text-fields/InputAdornments.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/mui_demo_ko.py` 의 사전).
 *       ⚠️ 사전에 있는 것만 바뀐다. API 값은 영어 그대로다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Visibility } from '../_icons';
import { VisibilityOff } from '../_icons';
import { InfoOutlined } from '../_icons';

export default function InputAdornments() {
  const outlinedStartId = React.useId();
  const outlinedWeightId = React.useId();
  const outlinedPasswordId = React.useId();
  const outlinedAmountId = React.useId();
  const filledStartId = React.useId();
  const filledWeightId = React.useId();
  const filledPasswordId = React.useId();
  const filledAmountId = React.useId();
  const standardStartId = React.useId();
  const standardWeightId = React.useId();
  const standardPasswordId = React.useId();
  const standardAmountId = React.useId();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  // An endAdornment coexists with the Select's chevron without overlapping it.
  const infoEndAdornment = (
    <InputAdornment position="end">
      <InfoOutlined />
    </InputAdornment>
  );
  const infoStartAdornment = (
    <InputAdornment position="start">
      <InfoOutlined />
    </InputAdornment>
  );

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <TextField
          label="With normal TextField"
          id={`${outlinedStartId}-input`}
          sx={{ m: 1, width: '25ch' }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">kg</InputAdornment>,
            },
          }}
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id={`${outlinedWeightId}-input`}
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby={`${outlinedWeightId}-helper-text`}
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id={`${outlinedWeightId}-helper-text`}>
            Weight
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor={`${outlinedPasswordId}-input`}>비밀번호</InputLabel>
          <OutlinedInput
            id={`${outlinedPasswordId}-input`}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="비밀번호"
          />
        </FormControl>
        <div>
          <FormControl sx={{ m: 1, width: '25ch' }}>
            <InputLabel htmlFor={`${outlinedAmountId}-input`}>금액</InputLabel>
            <OutlinedInput
              id={`${outlinedAmountId}-input`}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              label="금액"
            />
          </FormControl>
          <TextField
            select
            label="Select"
            defaultValue={20}
            sx={{ m: 1, width: '25ch' }}
            slotProps={{ select: { endAdornment: infoEndAdornment } }}
          >
            <MenuItem value={10}>열</MenuItem>
            <MenuItem value={20}>스물</MenuItem>
            <MenuItem value={30}>서른</MenuItem>
          </TextField>
          <TextField
            select
            label="Native"
            defaultValue={20}
            sx={{ m: 1, width: '25ch' }}
            slotProps={{
              select: { native: true, startAdornment: infoStartAdornment },
            }}
          >
            <option value={10}>열</option>
            <option value={20}>스물</option>
            <option value={30}>서른</option>
          </TextField>
        </div>
      </div>
      <div>
        <TextField
          label="With normal TextField"
          id={`${filledStartId}-input`}
          sx={{ m: 1, width: '25ch' }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">kg</InputAdornment>,
            },
          }}
          variant="filled"
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <FilledInput
            id={`${filledWeightId}-input`}
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby={`${filledWeightId}-helper-text`}
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id={`${filledWeightId}-helper-text`}>
            Weight
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor={`${filledPasswordId}-input`}>비밀번호</InputLabel>
          <FilledInput
            id={`${filledPasswordId}-input`}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
            <InputLabel htmlFor={`${filledAmountId}-input`}>금액</InputLabel>
            <FilledInput
              id={`${filledAmountId}-input`}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </FormControl>
          <TextField
            select
            label="Select"
            defaultValue={20}
            variant="filled"
            sx={{ m: 1, width: '25ch' }}
            slotProps={{ select: { endAdornment: infoEndAdornment } }}
          >
            <MenuItem value={10}>열</MenuItem>
            <MenuItem value={20}>스물</MenuItem>
            <MenuItem value={30}>서른</MenuItem>
          </TextField>
          <TextField
            select
            label="Native"
            defaultValue={20}
            variant="filled"
            sx={{ m: 1, width: '25ch' }}
            slotProps={{
              select: { native: true, startAdornment: infoStartAdornment },
            }}
          >
            <option value={10}>열</option>
            <option value={20}>스물</option>
            <option value={30}>서른</option>
          </TextField>
        </div>
      </div>
      <div>
        <TextField
          label="With normal TextField"
          id={`${standardStartId}-input`}
          sx={{ m: 1, width: '25ch' }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">kg</InputAdornment>,
            },
          }}
          variant="standard"
        />
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
          <Input
            id={`${standardWeightId}-input`}
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby={`${standardWeightId}-helper-text`}
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id={`${standardWeightId}-helper-text`}>
            Weight
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor={`${standardPasswordId}-input`}>비밀번호</InputLabel>
          <Input
            id={`${standardPasswordId}-input`}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor={`${standardAmountId}-input`}>금액</InputLabel>
            <Input
              id={`${standardAmountId}-input`}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </FormControl>
          <TextField
            select
            label="Select"
            defaultValue={20}
            variant="standard"
            sx={{ m: 1, width: '25ch' }}
            slotProps={{ select: { endAdornment: infoEndAdornment } }}
          >
            <MenuItem value={10}>열</MenuItem>
            <MenuItem value={20}>스물</MenuItem>
            <MenuItem value={30}>서른</MenuItem>
          </TextField>
          <TextField
            select
            label="Native"
            defaultValue={20}
            variant="standard"
            sx={{ m: 1, width: '25ch' }}
            slotProps={{
              select: { native: true, startAdornment: infoStartAdornment },
            }}
          >
            <option value={10}>열</option>
            <option value={20}>스물</option>
            <option value={30}>서른</option>
          </TextField>
        </div>
      </div>
    </Box>
  );
}
