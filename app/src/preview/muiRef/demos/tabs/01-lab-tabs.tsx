import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="항목 하나" value="1" />
            <Tab label="항목 둘" value="2" />
            <Tab label="항목 셋" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">항목 하나</TabPanel>
        <TabPanel value="2">항목 둘</TabPanel>
        <TabPanel value="3">항목 셋</TabPanel>
      </TabContext>
    </Box>
  );
}
