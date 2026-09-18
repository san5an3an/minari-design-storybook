// @ts-nocheck
import * as React from "react";
import { ActionButton, AlertDialog, Button, ButtonGroup, Content, Dialog, DialogContainer, Divider, Form, Heading, Item, Menu, MenuTrigger, Text, TextField, useDialogContainer } from "@adobe/react-spectrum";
import More from '@spectrum-icons/workflow/More';
import Delete from '@spectrum-icons/workflow/Delete';
import Edit from '@spectrum-icons/workflow/Edit';

function Example(props) {
  let [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <ActionButton onPress={() => setOpen(true)}>
        <Delete />
        <Text>Delete</Text>
      </ActionButton>
      <DialogContainer onDismiss={() => setOpen(false)} {...props}>
        {isOpen &&
          <AlertDialog
            title="Delete"
            variant="destructive"
            primaryActionLabel="Delete">
            Are you sure you want to delete this item?
          </AlertDialog>
        }
      </DialogContainer>
    </>
  );
}

function Example_2() {
  let [dialog, setDialog] = React.useState(null);

  return (
    <>
      <MenuTrigger>
        <ActionButton aria-label="Actions"><More /></ActionButton>
        <Menu onAction={setDialog}>
          <Item key="edit">Edit...</Item>
          <Item key="delete">Delete...</Item>
        </Menu>
      </MenuTrigger>
      <DialogContainer onDismiss={() => setDialog(null)}>
        {dialog === 'edit' &&
          <EditDialog />
        }
        {dialog === 'delete' &&
          <AlertDialog
            title="Delete"
            variant="destructive"
            primaryActionLabel="Delete">
            Are you sure you want to delete this item?
          </AlertDialog>
        }
      </DialogContainer>
    </>
  );
}

function EditDialog() {
  // This hook allows us to dismiss the dialog when the user
  // presses one of the buttons (below).
  let dialog = useDialogContainer();

  return (
    <Dialog>
      <Heading>Edit</Heading>
      <Divider />
      <Content>
        <Form labelPosition="side" width="100%">
          <TextField autoFocus label="First Name" defaultValue="John" />
          <TextField label="Last Name" defaultValue="Smith" />
        </Form>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={dialog.dismiss}>Cancel</Button>
        <Button variant="accent" onPress={dialog.dismiss}>Save</Button>
      </ButtonGroup>
    </Dialog>
  );
}

function Example_3(props) {
  let [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <ActionButton onPress={() => setOpen(true)}>
        <Edit />
        <Text>Edit</Text>
      </ActionButton>
      <DialogContainer type="fullscreen" onDismiss={() => setOpen(false)} {...props}>
        {isOpen &&
          <EditDialog />
        }
      </DialogContainer>
    </>
  );
}

function Example_4(props) {
  let [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <ActionButton onPress={() => setOpen(true)}>
        <Edit />
        <Text>Edit</Text>
      </ActionButton>
      <DialogContainer type="fullscreenTakeover" onDismiss={() => setOpen(false)} {...props}>
        {isOpen &&
          <EditDialog />
        }
      </DialogContainer>
    </>
  );
}

export const demos = {
  "example": Example,
  "dialog-triggered-by-a-menu-item": EditDialog,
  "full-screen": Example_3,
  "full-screen-takeover": Example_4,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
