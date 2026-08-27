import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo() {
  const id = React.useId();
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor={`${id}-select`}>
          나이
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: `${id}-select`,
          }}
        >
          <option value={10}>열</option>
          <option value={20}>스물</option>
          <option value={30}>서른</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
