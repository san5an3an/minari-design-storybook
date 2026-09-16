import mdx from './FileUploader.mdx';
import { FileUploader, FileUploaderButton, FileUploaderDropContainer, FileUploaderItem, FileUploaderSkeleton } from '@carbon/react';


const filenameStatuses = ['edit', 'complete', 'uploading'];

const fileUploaderArgs = {
  accept: ['.jpg', '.png'],
  buttonKind: 'primary',
  buttonLabel: 'Add file',
  disabled: false,
  filenameStatus: 'edit',
  iconDescription: 'Delete file',
  labelDescription: 'Max file size is 1 MB. Only .jpg files are supported.',
  labelTitle: 'Upload files',
  maxFileSize: 1024 * 1024,
  multiple: true,
  name: '',
  size: 'md',
};

const fileUploaderArgTypes = {
  accept: { control: 'object' },
  buttonKind: {
    control: 'select',
    options: [
      'primary',
      'secondary',
      'danger',
      'ghost',
      'danger--primary',
      'tertiary',
    ],
  },
  buttonLabel: { control: 'text' },
  disabled: { control: 'boolean' },
  filenameStatus: {
    control: 'select',
    options: filenameStatuses,
  },
  iconDescription: { control: 'text' },
  labelDescription: { control: 'text' },
  labelTitle: { control: 'text' },
  maxFileSize: { control: { type: 'number', min: 0, step: 1 } },
  multiple: { control: 'boolean' },
  name: { control: 'text' },
  onAddFiles: { action: 'onAddFiles' },
  onChange: { action: 'onChange' },
  onClick: { action: 'onClick' },
  onDelete: { action: 'onDelete' },
  size: { control: 'select', options: ['sm', 'md', 'lg'] },
};

export default {
  title: 'Components/FileUploader',
  component: FileUploader,
  subcomponents: {
    FileUploaderButton,
    FileUploaderSkeleton,
    FileUploaderItem,
    FileUploaderDropContainer,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Default = (args) => {
  return (
    <div className="cds--file__container">
      <FileUploader {...args} />
    </div>
  );
};

Default.args = {
  ...fileUploaderArgs,
};
Default.argTypes = {
  ...fileUploaderArgTypes,
};

Default.parameters = {
  controls: { include: Object.keys(fileUploaderArgTypes) },
};
