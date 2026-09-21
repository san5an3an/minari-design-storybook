// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/dialog/Dialog.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import { ActionButton, Button, ButtonGroup, Checkbox, Content, Dialog, DialogTrigger, Divider, Flex, Footer, Form, Header, Heading, Image, Link, Text, TextField } from "@adobe/react-spectrum";
import Book from '@spectrum-icons/workflow/Book';

function Example1() {
  return (
    <>
    <DialogTrigger>
      <ActionButton>Check connectivity</ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Internet Speed Test</Heading>
          <Header>Connection status: Connected</Header>
          <Divider />
          <Content>
            <Text>
              Start speed test?
            </Text>
          </Content>
          <ButtonGroup>
            <Button variant="secondary" onPress={close}>Cancel</Button>
            <Button variant="accent" onPress={close}>Confirm</Button>
          </ButtonGroup>
        </Dialog>
      )}
    </DialogTrigger>
    </>
  );
}

function Example2() {
  return (
    <>
    <DialogTrigger>
      <ActionButton>Publish</ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Publish 3 pages</Heading>
          <Divider />
          <Content>Confirm publish?</Content>
          <ButtonGroup>
            <Button variant="secondary" onPress={close}>Cancel</Button>
            <Button variant="accent" onPress={close} autoFocus>Confirm</Button>
          </ButtonGroup>
        </Dialog>
      )}
    </DialogTrigger>
    </>
  );
}

function Example3() {
  return (
    <>
    <DialogTrigger isDismissable>
      <ActionButton>Status</ActionButton>
      <Dialog>
        <Heading>Status</Heading>
        <Divider />
        <Content>Printer Status: Connected</Content>
      </Dialog>
    </DialogTrigger>
    </>
  );
}

function Example4() {
  return (
    <>
    <DialogTrigger>
      <ActionButton>Register</ActionButton>
      {(close) => (
        <Dialog>
          <Heading>
            <Flex alignItems="center" gap="size-100">
              <Book size="S" />
              <Text>
                Register for newsletter
              </Text>
            </Flex>
          </Heading>
          <Header>
            <Link>
              <a href="//example.com" target="_blank">What is this?</a>
            </Link>
          </Header>
          <Divider />
          <Content>
            <Form>
              <TextField label="First Name" autoFocus />
              <TextField label="Last Name" />
              <TextField label="Street Address" />
              <TextField label="City" />
            </Form>
          </Content>
          <Footer>
            <Checkbox>
              I want to receive updates for exclusive offers in my area.
            </Checkbox>
          </Footer>
          <ButtonGroup>
            <Button variant="secondary" onPress={close}>Cancel</Button>
            <Button variant="accent" onPress={close}>Register</Button>
          </ButtonGroup>
        </Dialog>
      )}
    </DialogTrigger>
    </>
  );
}

function Example5() {
  return (
    <>
    <DialogTrigger>
      <ActionButton>Upload</ActionButton>
      {(close) => (
        <Dialog>
          <Image slot="hero" alt="" src="https://i.imgur.com/Z7AzH2c.png" objectFit="cover" />
          <Heading>Upload file</Heading>
          <Divider />
          <Content>Are you sure you want to upload this file?</Content>
          <ButtonGroup>
            <Button variant="secondary" onPress={close}>Cancel</Button>
            <Button variant="accent" onPress={close} autoFocus>Confirm</Button>
          </ButtonGroup>
        </Dialog>
      )}
    </DialogTrigger>
    </>
  );
}

function Example() {
  let alertSave = (close) => {
    close();
    alert('Profile saved!');
  }

  let alertCancel = (close) => {
    close();
    alert('Profile not saved!');
  }

  return (
    <DialogTrigger>
      <ActionButton>Set Profile</ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Profile</Heading>
          <Divider />
          <ButtonGroup>
            <Button variant="secondary" onPress={() => alertCancel(close)}>Cancel</Button>
            <Button autoFocus variant="accent" onPress={() => alertSave(close)}>Save</Button>
          </ButtonGroup>
          <Content>
            <Form>
              <TextField label="Name" />
              <Checkbox>Make private</Checkbox>
            </Form>
          </Content>
        </Dialog>
      )}
    </DialogTrigger>
  );
}

function Example_2() {
  let alertDismiss = (close) => {
    close();
    alert('Dialog dismissed.');
  }
  return (
    <DialogTrigger isDismissable>
      <ActionButton>Info</ActionButton>
      {(close) => (
        <Dialog onDismiss={() => alertDismiss(close)}>
          <Heading>Version Info</Heading>
          <Divider />
          <Content>
            <Text>
              Version 1.0.0, Copyright 2020
            </Text>
          </Content>
        </Dialog>
        )}
    </DialogTrigger>
  );
}

function Example8() {
  return (
    <>
    <DialogTrigger isDismissable type="modal">
      <ActionButton>Trigger Modal</ActionButton>
      <Dialog>
        <Heading>Modal</Heading>
        <Divider />
        <Content>
          <Text>
            This is a modal.
          </Text>
        </Content>
      </Dialog>
    </DialogTrigger>
    </>
  );
}

function Example9() {
  return (
    <>
    <DialogTrigger type="popover">
      <ActionButton>Trigger Popover</ActionButton>
      <Dialog>
        <Heading>Popover</Heading>
        <Divider />
        <Content>
          <Text>
            This is a popover.
          </Text>
        </Content>
      </Dialog>
    </DialogTrigger>
    </>
  );
}

function Example10() {
  return (
    <>
    <DialogTrigger type="tray">
      <ActionButton>Trigger Tray</ActionButton>
      <Dialog>
        <Heading>Tray</Heading>
        <Divider />
        <Content>
          <Text>
            This is a tray.
          </Text>
        </Content>
      </Dialog>
    </DialogTrigger>
    </>
  );
}

function Example11() {
  return (
    <>
    <DialogTrigger>
      <ActionButton>Small</ActionButton>
      {(close) => (
        <Dialog size="S">
          <Heading>Profile</Heading>
          <Divider />
          <ButtonGroup>
            <Button variant="secondary" onPress={close}>Cancel</Button>
            <Button autoFocus variant="accent" onPress={close}>Save</Button>
          </ButtonGroup>
          <Content>
            <Form>
              <TextField label="Name" />
              <Checkbox>Make private</Checkbox>
            </Form>
          </Content>
        </Dialog>
      )}
    </DialogTrigger>
    </>
  );
}

function Example12() {
  return (
    <>
    <DialogTrigger>
      <ActionButton>Medium</ActionButton>
      {(close) => (
        <Dialog size="M">
          <Heading>Profile</Heading>
          <Divider />
          <ButtonGroup>
            <Button variant="secondary" onPress={close}>Cancel</Button>
            <Button autoFocus variant="accent" onPress={close}>Save</Button>
          </ButtonGroup>
          <Content>
            <Form>
              <TextField label="Name" />
              <Checkbox>Make private</Checkbox>
            </Form>
          </Content>
        </Dialog>
      )}
    </DialogTrigger>
    </>
  );
}

function Example13() {
  return (
    <>
    <DialogTrigger>
      <ActionButton>Large</ActionButton>
      {(close) => (
        <Dialog size="L">
          <Heading>Profile</Heading>
          <Divider />
          <ButtonGroup>
            <Button variant="secondary" onPress={close}>Cancel</Button>
            <Button autoFocus variant="accent" onPress={close}>Save</Button>
          </ButtonGroup>
          <Content>
            <Form>
              <TextField label="Name" />
              <Checkbox>Make private</Checkbox>
            </Form>
          </Content>
        </Dialog>
      )}
    </DialogTrigger>
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "content-1": Example2,
  "content-2": Example3,
  "content-3": Example4,
  "content-4": Example5,
  "events-1": Example,
  "events-2": Example_2,
  "visual-options-1": Example8,
  "visual-options-2": Example9,
  "visual-options-3": Example10,
  "visual-options-4": Example11,
  "visual-options-5": Example12,
  "visual-options-6": Example13,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
