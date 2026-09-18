// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/dialog/AlertDialog.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import { ActionButton, AlertDialog, DialogTrigger } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <DialogTrigger>
      <ActionButton>Save</ActionButton>
      <AlertDialog
        title="Low Disk Space"
        variant="warning"
        primaryActionLabel="Confirm">
        You are running low on disk space.
        Delete unnecessary files to free up space.
      </AlertDialog>
    </DialogTrigger>
    </>
  );
}

function Example2() {
  return (
    <>
    <DialogTrigger>
      <ActionButton>Exit</ActionButton>
      <AlertDialog
        variant="information"
        title="Register profile"
        primaryActionLabel="Register"
        secondaryActionLabel="Remind me later"
        cancelLabel="Cancel">
        You have not saved your profile information
        for this account. Would you like to register now?
      </AlertDialog>
    </DialogTrigger>
    </>
  );
}

function Example3() {
  return (
    <>
    <DialogTrigger>
      <ActionButton>Save</ActionButton>
      <AlertDialog
        variant="confirmation"
        title="Save file"
        primaryActionLabel="Save"
        cancelLabel="Cancel"
        autoFocusButton="primary">
        A file with the same name already exists. Overwrite?
      </AlertDialog>
    </DialogTrigger>
    </>
  );
}

function Example() {
  let onPrimaryAction = () => alert('Primary button pressed.');
  let onSecondaryAction = () => alert('Secondary button pressed.');
  let alertCancel = () => alert('Cancel button pressed.');

  return (
    <DialogTrigger>
      <ActionButton>
        Publish
      </ActionButton>
      <AlertDialog
        variant="confirmation"
        title="Confirm Publish"
        primaryActionLabel="Publish"
        secondaryActionLabel="Save as draft"
        cancelLabel="Cancel"
        onCancel={alertCancel}
        onPrimaryAction={onPrimaryAction}
        onSecondaryAction={onSecondaryAction}>
        Are you sure you want to publish this document?
      </AlertDialog>
    </DialogTrigger>
  );
}

function Example5() {
  return (
    <>
    <DialogTrigger>
      <ActionButton>Exit</ActionButton>
      <AlertDialog
        variant="confirmation"
        title="Exit instance?"
        primaryActionLabel="Confirm"
        cancelLabel="Cancel">
        Exit dungeon instance and return to main hub?
      </AlertDialog>
    </DialogTrigger>
    </>
  );
}

function Example6() {
  return (
    <>
    <DialogTrigger>
      <ActionButton>New file</ActionButton>
      <AlertDialog
        variant="information"
        title="Connect your account"
        primaryActionLabel="Continue"
        cancelLabel="Cancel">
        Please connect an existing account to sync any new files.
      </AlertDialog>
    </DialogTrigger>
    </>
  );
}

function Example7() {
  return (
    <>
    <DialogTrigger>
      <ActionButton>Delete</ActionButton>
      <AlertDialog
        variant="destructive"
        title="Delete file"
        primaryActionLabel="Delete"
        cancelLabel="Cancel">
        This will permanently delete the selected file. Continue?
      </AlertDialog>
    </DialogTrigger>
    </>
  );
}

function Example8() {
  return (
    <>
    <DialogTrigger>
      <ActionButton>Login</ActionButton>
      <AlertDialog
        variant="error"
        title="Unable to connect"
        primaryActionLabel="Retry"
        cancelLabel="Cancel">
        Something went wrong while connecting to the server.
        Please try again in a couple minutes.
      </AlertDialog>
    </DialogTrigger>
    </>
  );
}

function Example9() {
  return (
    <>
    <DialogTrigger>
      <ActionButton>Enter</ActionButton>
      <AlertDialog
        variant="warning"
        title="Raid instance"
        primaryActionLabel="Confirm"
        cancelLabel="Cancel">
        The following encounter meant for parties of 4 or more. Enter anyways?
      </AlertDialog>
    </DialogTrigger>
    </>
  );
}

function Example10() {
  return (
    <>
    <DialogTrigger>
      <ActionButton>Upgrade</ActionButton>
      <AlertDialog
        isPrimaryActionDisabled
        variant="confirmation"
        title="Upgrade subscription"
        primaryActionLabel="Upgrade"
        cancelLabel="Cancel">
        Upgrade subscription for an additional $14.99 a month?
      </AlertDialog>
    </DialogTrigger>
    </>
  );
}

function Example11() {
  return (
    <>
    <DialogTrigger>
      <ActionButton>Upgrade</ActionButton>
      <AlertDialog
        isSecondaryActionDisabled
        variant="confirmation"
        title="Upgrade subscription"
        primaryActionLabel="Upgrade"
        secondaryActionLabel="Apply Coupon"
        cancelLabel="Cancel">
        Upgrade subscription for an additional $14.99 a month?
      </AlertDialog>
    </DialogTrigger>
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "content-1": Example2,
  "content-2": Example3,
  "events-1": Example,
  "visual-options-1": Example5,
  "visual-options-2": Example6,
  "visual-options-3": Example7,
  "visual-options-4": Example8,
  "visual-options-5": Example9,
  "visual-options-6": Example10,
  "visual-options-7": Example11,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
