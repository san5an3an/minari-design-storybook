// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/form/Form.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Button, ButtonGroup, Checkbox, Content, Form, Heading, InlineAlert, Radio, RadioGroup, TextField } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <Form maxWidth="size-3600">
      <TextField label="Email" />
      <TextField label="Password" />
      <Checkbox>Remember me</Checkbox>
    </Form>
    </>
  );
}

function Example2() {
  return (
    <>
    <Form maxWidth="size-3600" isRequired necessityIndicator="label">
      <TextField label="Name" />
      <TextField label="Email" />
      <TextField label="Address" isRequired={false} />
    </Form>
    </>
  );
}

function Example3() {
  return (
    <>
    <h3 id="label-3">Personal Information</h3>
    <Form maxWidth="size-3600" aria-labelledby="label-3">
      <TextField label="First Name" />
      <TextField label="Last Name" />
      <RadioGroup label="Favorite pet">
        <Radio value="dogs">Dogs</Radio>
        <Radio value="cats">Cats</Radio>
        <Radio value="dragons">Dragons</Radio>
      </RadioGroup>
    </Form>
    </>
  );
}

function Example4() {
  return (
    <>
    <Form validationErrors={{username: 'Sorry, this username is taken.'}} maxWidth="size-3000">
      <TextField label="Username" name="username" />
    </Form>
    </>
  );
}

function Example5() {
  return (
    <>
    <Form validationBehavior="native" maxWidth="size-3000">
      <TextField label="Email" name="email" type="email" isRequired />
      <ButtonGroup>
        <Button type="submit" variant="primary">Submit</Button>
        <Button type="reset" variant="secondary">Reset</Button>
      </ButtonGroup>
    </Form>
    </>
  );
}

function Example() {
  let [isInvalid, setInvalid] = React.useState(false);

  return (
    <Form
      validationBehavior="native"
      /*- begin highlight -*/
      onInvalid={e => {
        e.preventDefault();
        setInvalid(true);
      }}
      /*- end highlight -*/
      onSubmit={e => {
        e.preventDefault();
        setInvalid(false);
      }}
      onReset={() => setInvalid(false)}
      maxWidth="size-3600">
      {isInvalid &&
        /*- begin highlight -*/
        <InlineAlert variant="negative" autoFocus>
        {/*- end highlight -*/}
          <Heading>Unable to submit</Heading>
          <Content>
            Please fix the validation errors below, and re-submit the form.
          </Content>
        </InlineAlert>
      }
      <TextField label="First Name" isRequired />
      <TextField label="Last Name" isRequired />
      <ButtonGroup>
        <Button type="submit" variant="primary">Submit</Button>
        <Button type="reset" variant="secondary">Reset</Button>
      </ButtonGroup>
    </Form>
  );
}

function Example7() {
  return (
    <>
    <Form
      labelPosition="top"
      labelAlign="start"
      aria-label="Top position, start alignment example"
      maxWidth="size-3600">
      <TextField label="Name" />
      <RadioGroup label="Favorite pet">
        <Radio value="dogs">Dogs</Radio>
        <Radio value="cats">Cats</Radio>
      </RadioGroup>
    </Form>
    </>
  );
}

function Example8() {
  return (
    <>
    <Form
      labelPosition="side"
      labelAlign="start"
      aria-label="Side position, start alignment example"
      maxWidth="size-3600">
      <TextField label="Name" />
      <RadioGroup label="Favorite pet">
        <Radio value="dogs">Dogs</Radio>
        <Radio value="cats">Cats</Radio>
      </RadioGroup>
    </Form>
    </>
  );
}

function Example9() {
  return (
    <>
    <Form
      labelPosition="side"
      labelAlign="end"
      aria-label="Side position, end alignment example"
      maxWidth="size-3600">
      <TextField label="Name" />
      <RadioGroup label="Favorite pet">
        <Radio value="dogs">Dogs</Radio>
        <Radio value="cats">Cats</Radio>
      </RadioGroup>
    </Form>
    </>
  );
}

function Example10() {
  return (
    <>
    <Form
      isQuiet
      aria-label="Quiet example"
      maxWidth="size-3600">
      <TextField label="Name" />
      <TextField label="Address" />
    </Form>
    </>
  );
}

function Example11() {
  return (
    <>
    <Form
      isEmphasized
      aria-label="Emphasized example"
      maxWidth="size-3600">
      <TextField label="Name"/>
      <RadioGroup label="Favorite pet" defaultValue="dogs">
        <Radio value="dogs">Dogs</Radio>
        <Radio value="cats">Cats</Radio>
      </RadioGroup>
    </Form>
    </>
  );
}

function Example12() {
  return (
    <>
    <Form
      isDisabled
      aria-label="Disabled example"
      maxWidth="size-3600">
      <TextField label="Name" />
      <RadioGroup label="Favorite pet">
        <Radio value="dogs">Dogs</Radio>
        <Radio value="cats">Cats</Radio>
      </RadioGroup>
    </Form>
    </>
  );
}

function Example13() {
  return (
    <>
    <Form
      necessityIndicator="label"
      aria-label="Optional with label example"
      maxWidth="size-3600">
      <TextField label="Name" />
      <RadioGroup label="Favorite pet">
        <Radio value="dogs">Dogs</Radio>
        <Radio value="cats">Cats</Radio>
      </RadioGroup>
    </Form>
    </>
  );
}

function Example14() {
  return (
    <>
    <Form
      isRequired
      necessityIndicator="label"
      aria-label="Required with label example"
      maxWidth="size-3600">
      <TextField label="Name" />
      <RadioGroup label="Favorite pet">
        <Radio value="dogs">Dogs</Radio>
        <Radio value="cats">Cats</Radio>
      </RadioGroup>
    </Form>
    </>
  );
}

function Example15() {
  return (
    <>
    <Form
      isRequired
      necessityIndicator="icon"
      aria-label="Required with asterisk example"
      maxWidth="size-3600">
      <TextField label="Name" />
      <RadioGroup label="Favorite pet">
        <Radio value="dogs">Dogs</Radio>
        <Radio value="cats">Cats</Radio>
      </RadioGroup>
    </Form>
    </>
  );
}

function Example16() {
  return (
    <>
    <Form
      isReadOnly
      aria-label="isReadOnly example"
      maxWidth="size-3600">
      <TextField label="Name" value="John Smith" />
      <RadioGroup label="Favorite pet">
        <Radio value="dogs">Dogs</Radio>
        <Radio value="cats">Cats</Radio>
      </RadioGroup>
    </Form>
    </>
  );
}

function Example17() {
  return (
    <>
    <Form
      validationState="invalid"
      aria-label="Invalid validationState example"
      maxWidth="size-3600"
      marginBottom="size-300">
      <TextField label="Name" />
      <RadioGroup label="Favorite pet">
        <Radio value="dogs">Dogs</Radio>
        <Radio value="cats">Cats</Radio>
      </RadioGroup>
    </Form>
    </>
  );
}

function Example18() {
  return (
    <>
    <Form
      validationState="valid"
      aria-label="Valid validationState example"
      maxWidth="size-3600">
      <TextField label="Name" />
      <RadioGroup label="Favorite pet">
        <Radio value="dogs">Dogs</Radio>
        <Radio value="cats">Cats</Radio>
      </RadioGroup>
    </Form>
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "content-1": Example2,
  "labeling-1": Example3,
  "validation-1": Example4,
  "validation-2": Example5,
  "validation-3": Example,
  "visual-options-1": Example7,
  "visual-options-2": Example8,
  "visual-options-3": Example9,
  "visual-options-4": Example10,
  "visual-options-5": Example11,
  "visual-options-6": Example12,
  "visual-options-7": Example13,
  "visual-options-8": Example14,
  "visual-options-9": Example15,
  "visual-options-10": Example16,
  "visual-options-11": Example17,
  "visual-options-12": Example18,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
