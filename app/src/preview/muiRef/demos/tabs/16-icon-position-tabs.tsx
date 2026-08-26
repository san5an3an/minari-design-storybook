import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Phone as PhoneIcon } from '../_icons';
import { Favorite as FavoriteIcon } from '../_icons';
import { PersonPin as PersonPinIcon } from '../_icons';
import { PhoneMissed as PhoneMissedIcon } from '../_icons';

export default function IconPositionTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
    >
      <Tab icon={<PhoneIcon />} label="top" />
      <Tab icon={<PhoneMissedIcon />} iconPosition="start" label="start" />
      <Tab icon={<FavoriteIcon />} iconPosition="end" label="end" />
      <Tab icon={<PersonPinIcon />} iconPosition="bottom" label="bottom" />
    </Tabs>
  );
}
