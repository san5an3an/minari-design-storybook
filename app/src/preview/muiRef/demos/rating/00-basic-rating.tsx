import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      <Typography component="legend">제어함</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">제어 안 함</Typography>
      <Rating
        name="simple-uncontrolled"
        onChange={(event, newValue) => {
          console.log(newValue);
        }}
        defaultValue={2}
      />
      <Typography component="legend">읽기 전용</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">못 쓰는 상태</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">아직 별점이 없어요</Typography>
      <Rating name="no-value" value={null} />
    </Box>
  );
}
