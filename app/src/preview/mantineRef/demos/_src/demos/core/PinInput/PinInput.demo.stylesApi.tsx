// @ts-nocheck
import { PinInput } from '@mantine/core';

import { PinInputStylesApi } from '../../../../_pkg/styles-api';

const code = `
import { PinInput } from '@mantine/core';

function Demo() {
  return (
    <PinInput{{props}} />
  );
}
`;

function Demo(props: any) {
  return <PinInput {...props} />;
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: PinInputStylesApi,
  component: Demo,
  code,
  centered: true,
};
