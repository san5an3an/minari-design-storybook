// @ts-nocheck
import { preview_Text as Text } from '@carbon/react';
import mdx from './Text.mdx';


export default {
  title: 'Preview/preview_Text',
  component: Text,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Default = () => {
  return (
    <>
      <p>
        <Text>Hello world</Text>
      </p>
      <p>
        <Text>لكن لا بد أن أوضح لك أن كل</Text>
      </p>
    </>
  );
};
