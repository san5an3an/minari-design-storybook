import Box from '@mui/material/Box';

export default function BoxBasic() {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      이 Box 는 HTML section 요소로 그려져요.
    </Box>
  );
}
