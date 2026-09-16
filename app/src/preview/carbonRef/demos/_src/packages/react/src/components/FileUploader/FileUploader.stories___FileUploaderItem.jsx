import mdx from './FileUploader.mdx';
import { FileUploader, FileUploaderButton, FileUploaderDropContainer, FileUploaderItem, FileUploaderSkeleton } from '@carbon/react';


const filenameStatuses = ['edit', 'complete', 'uploading'];

const fileUploaderItemArgs = {
  disabled: false,
  errorBody: '1 MB max file size. Select a new file and try again.',
  errorSubject: 'File size exceeds limit',
  iconDescription: 'Delete file',
  invalid: false,
  name: 'THIS IS A VERY LONG FILENAME WHICH WILL BE TRUNCATED',
  size: 'md',
  status: 'edit',
  uuid: 'storybook-file',
};

const fileUploaderItemArgTypes = {
  disabled: {
    control: 'boolean',
    description: 'Specify whether file uploader item is disabled',
  },
  errorBody: {
    control: 'text',
    description: 'Error message body for an invalid file upload',
  },
  errorSubject: {
    control: 'text',
    description: 'Error message subject for an invalid file upload',
  },
  iconDescription: { control: 'text' },
  invalid: {
    control: 'boolean',
    description: 'Specify if the currently uploaded file is invalid',
  },
  name: { control: 'text', description: 'Name of the uploaded file' },
  onDelete: { action: 'onDelete' },
  size: { control: 'select', options: ['sm', 'md', 'lg'] },
  status: {
    control: 'inline-radio',
    options: filenameStatuses,
    description: 'Status of the file upload',
  },
  uuid: {
    control: 'text',
    description: 'Unique identifier for the file object',
  },
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

export const _FileUploaderItem = (args) => {
  return <FileUploaderItem {...args} />;
};

_FileUploaderItem.args = { ...fileUploaderItemArgs };
_FileUploaderItem.argTypes = { ...fileUploaderItemArgTypes };

// Remove all the props that don't apply to FileUploaderItem
_FileUploaderItem.parameters = {
  controls: {
    include: Object.keys(fileUploaderItemArgTypes),
  },
};
