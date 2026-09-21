// @ts-nocheck
import { ModalWrapper } from '@carbon/react';


export default {
  title: 'Deprecated/ModalWrapper',
  component: ModalWrapper,
  argTypes: {
    triggerButtonKind: {
      options: [
        'primary',
        'secondary',
        'danger',
        'ghost',
        'danger--primary',
        'danger--ghost',
        'danger--tertiary',
        'tertiary',
      ],
    },
  },
};

export const Default = (args) => {
  return (
    <ModalWrapper
      buttonTriggerText="Launch modal"
      modalHeading="Modal heading"
      modalLabel="Label"
      handleSubmit={() => {}}
      {...args}>
      <p>Modal content here</p>
    </ModalWrapper>
  );
};
