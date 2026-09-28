// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/dialog/DialogTrigger.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ActionButton, Button, ButtonGroup, Checkbox, Content, Dialog, DialogTrigger, Divider, Flex, Form, Heading, Text, TextField } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <DialogTrigger type="popover">
      <ActionButton>Disk Status</ActionButton>
      <Dialog>
        <Heading>C://</Heading>
        <Divider />
        <Content>
          <Text>
            50% disk space remaining.
          </Text>
        </Content>
      </Dialog>
    </DialogTrigger>
    </>
  );
}

function Example2() {
  return (
    <>
    <DialogTrigger>
      <ActionButton>Checkout</ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Confirm checkout?</Heading>
          <Divider />
          <Content>
            <Text>
              You have 5 items in your cart. Proceed to checkout?
            </Text>
          </Content>
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
    <DialogTrigger type="modal">
      <ActionButton>Unlink</ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Unlinking email</Heading>
          <Divider />
          <Content>
            <Text>
              This will unlink your email from your profile "TestUser". Are you sure?
            </Text>
          </Content>
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

function Example4() {
  return (
    <>
    <DialogTrigger type="popover">
      <ActionButton>Info</ActionButton>
      <Dialog>
        <Heading>Version Info</Heading>
        <Divider />
        <Content>
          <Text>
            Version 1.0.0, Copyright 2020
          </Text>
        </Content>
      </Dialog>
    </DialogTrigger>
    </>
  );
}

function Example5() {
  return (
    <>
    <DialogTrigger type="tray">
      <ActionButton>Check Messages</ActionButton>
      <Dialog>
        <Heading>New Messages</Heading>
        <Divider />
        <Content>
          <Text>
            You have 5 new messages.
          </Text>
        </Content>
      </Dialog>
    </DialogTrigger>
    </>
  );
}

function Example6() {
  return (
    <>
    <DialogTrigger type="fullscreen">
      <ActionButton>See Details</ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Package details</Heading>
          <Divider />
          <Content>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique risus. In sit amet suscipit lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In condimentum imperdiet metus non condimentum. Duis eu velit et quam accumsan tempus at id velit. Duis elementum elementum purus, id tempus mauris posuere a. Nunc vestibulum sapien pellentesque lectus commodo ornare.
            </Text>
          </Content>
          <ButtonGroup>
            <Button variant="secondary" onPress={close}>Cancel</Button>
            <Button variant="accent" onPress={close} autoFocus>Buy</Button>
          </ButtonGroup>
        </Dialog>
      )}
    </DialogTrigger>
    </>
  );
}

function Example7() {
  return (
    <>
    <DialogTrigger type="fullscreenTakeover">
      <ActionButton>Register</ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Register a new account</Heading>
          <Divider />
          <Content>
            <Form>
              <TextField label="Name" />
              <TextField label="Email address" />
              <Checkbox>Make profile private</Checkbox>
            </Form>
          </Content>
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

function Example8() {
  return (
    <>
    <DialogTrigger isDismissable type="modal">
      <ActionButton>User Status</ActionButton>
      <Dialog>
        <Heading>Status: Bob</Heading>
        <Divider />
        <Content>
          <Text>
            Last Login: December 12, 1989
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
    <DialogTrigger type="popover" mobileType="tray">
      <ActionButton>Info</ActionButton>
      <Dialog>
        <Heading>Version Info</Heading>
        <Divider />
        <Content>
          <Text>
            Version 1.0.0, Copyright 2020
          </Text>
        </Content>
      </Dialog>
    </DialogTrigger>
    </>
  );
}

function Example() {
  let ref = React.useRef(null)

  return (
    <Flex gap="size-1000">
      <DialogTrigger type="popover" targetRef={ref}>
        <ActionButton>Trigger</ActionButton>
        <Dialog>
          <Heading>The Heading</Heading>
          <Divider />
          <Content>
            <Text>
              This is a popover anchored to the span.
            </Text>
          </Content>
        </Dialog>
      </DialogTrigger>
      <span
        ref={ref}
        style={{width: '100px'}}>
        Popover appears over here
      </span>
    </Flex>
  );
}

function Example11() {
  return (
    <>
    <DialogTrigger type="popover" placement="right top">
      <ActionButton>Trigger</ActionButton>
      <Dialog>
        <Heading>The Heading</Heading>
        <Divider />
        <Content>
          <Text>
            This is a popover placed to the right of its
            trigger and offset so the arrow is at the top of the dialog.
          </Text>
        </Content>
      </Dialog>
    </DialogTrigger>
    </>
  );
}

function Example12() {
  return (
    <>
    <DialogTrigger type="popover" placement="top" offset={50}>
      <ActionButton>Trigger</ActionButton>
      <Dialog>
        <Heading>Offset</Heading>
        <Divider />
        <Content>
          <Text>
            Offset by an additional 50px.
          </Text>
        </Content>
      </Dialog>
    </DialogTrigger>
    </>
  );
}

function Example13() {
  return (
    <>
    <DialogTrigger type="popover" placement="top" crossOffset={100}>
      <ActionButton>Trigger</ActionButton>
      <Dialog>
        <Heading>Cross offset</Heading>
        <Divider />
        <Content>
          <Text>
            Offset by an additional 100px.
          </Text>
        </Content>
      </Dialog>
    </DialogTrigger>
    </>
  );
}

function Example14() {
  return (
    <>
    <Flex gap="size-100" wrap>
      <DialogTrigger type="popover" placement="bottom">
        <ActionButton>Default DialogTrigger</ActionButton>
        <Dialog>
          <Heading>The Heading</Heading>
          <Divider />
          <Content>
            <Text>
              This is a popover that will flip if it can't fully render below the button.
            </Text>
          </Content>
        </Dialog>
      </DialogTrigger>
    
      <DialogTrigger type="popover" placement="bottom" shouldFlip={false}>
        <ActionButton>DialogTrigger with shouldFlip=false</ActionButton>
        <Dialog>
          <Heading>The Heading</Heading>
          <Divider />
          <Content>
            <Text>
              This is a popover that won't flip if it can't fully render below the button.
            </Text>
          </Content>
        </Dialog>
      </DialogTrigger>
    </Flex>
    </>
  );
}

function Example15() {
  return (
    <>
    <DialogTrigger type="popover" placement="top" containerPadding={50}>
      <ActionButton>Trigger</ActionButton>
      <Dialog>
        <Heading>The Heading</Heading>
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

function Example_2() {
  let [state, setState] = React.useState(false);

  return (
    <Flex alignItems="center" gap="size-100">
      <DialogTrigger type="popover" placement="top" onOpenChange={(isOpen) => setState(isOpen)}>
        <ActionButton>Whispers</ActionButton>
        <Dialog>
          <Heading>Whispers and DMs</Heading>
          <Divider />
          <Content>
            <Text>
              You have 0 new messages.
            </Text>
          </Content>
        </Dialog>
      </DialogTrigger>
      <Text>Current open state: {state.toString()}</Text>
    </Flex>
  );
}

export const demos = {
  "example-1": Example1,
  "content-1": Example2,
  "dialog-types-1": Example3,
  "dialog-types-2": Example4,
  "dialog-types-3": Example5,
  "dialog-types-4": Example6,
  "dialog-types-5": Example7,
  "dialog-types-6": Example8,
  "dialog-types-7": Example9,
  "dialog-placement-1": Example,
  "dialog-placement-2": Example11,
  "dialog-placement-3": Example12,
  "dialog-placement-4": Example13,
  "dialog-placement-5": Example14,
  "dialog-placement-6": Example15,
  "events-1": Example_2,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
