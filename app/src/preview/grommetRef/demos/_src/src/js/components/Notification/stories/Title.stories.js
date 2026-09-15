import React, { useState } from 'react';

import { Notification } from 'grommet';
import { Button } from 'grommet';
import { Box } from 'grommet';

const TitleNotification = () => {
  const [visible, setVisible] = useState(false);

  const onOpen = () => setVisible(true);
  const onClose = () => setVisible(undefined);

  return (
    <>
      <Box pad="large" justify="center">
        <Button label="Show Notification" onClick={onOpen} />
      </Box>
      {visible && (
        <Notification
          toast
          title="Status Title"
          onClose={onClose}
          time={4000}
        />
      )}
    </>
  );
};

export const ToastTitleOnly = () => <TitleNotification />;

ToastTitleOnly.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Visualizations/Notification/Toast Title Only',
};
