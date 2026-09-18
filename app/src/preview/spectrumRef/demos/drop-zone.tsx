// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/dropzone/DropZone.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Button, Content, DropZone, FileTrigger, Flex, Heading, IllustratedMessage } from "@adobe/react-spectrum";
import Upload from '@spectrum-icons/illustrations/Upload';
import File from '@spectrum-icons/illustrations/File';

function Example() {
  let [isFilled, setIsFilled] = React.useState(false);

  return (
    <>
      <Draggable />
      <DropZone
        maxWidth="size-3000"
        isFilled={isFilled}
        onDrop={() => setIsFilled(true)}>
        <IllustratedMessage>
          <Upload />
          <Heading>
            {isFilled ? 'You dropped something!' : 'Drag and drop your file'}
          </Heading>
        </IllustratedMessage>
      </DropZone>
    </>
  )
}

function Example_2() {
  let [isFilled, setIsFilled] = React.useState(false);

  return (
    <>
      <Draggable />
      <DropZone
        maxWidth="size-3000"
        isFilled={isFilled}
        onDrop={() => setIsFilled(true)}>
        <IllustratedMessage>
          <Upload />
          <Heading>
            {isFilled ? 'You dropped something!' : 'Drag and drop here'}
          </Heading>
          <Content>
            <FileTrigger
              onSelect={()=> setIsFilled(true)}>
              <Button variant="primary">Browse</Button>
            </FileTrigger>
          </Content>
        </IllustratedMessage>
      </DropZone>
    </>
  )
}

function Example_3() {
  let [filledSrc, setFilledSrc] = React.useState(null);

  return (
    <>
      <Draggable />
      <DropZone
        maxWidth="size-3000"
        isFilled={!!filledSrc}
        onDrop={async (e) => {
          e.items.find(async (item) => {
            if (item.kind === 'file') {
              setFilledSrc(item.name);

            } else if (item.kind === 'text' && item.types.has('text/plain')) {
              setFilledSrc(await item.getText('text/plain'));
            }
          });
        }}>
        {filledSrc
          ? (
            <Flex direction="column" alignItems="center" justifyContent="center" gap="size-100">
              <File />
              {filledSrc}
            </Flex>
          )
          : (
            <IllustratedMessage>
              <Upload />
              <Heading>
                Drag and drop here
              </Heading>
            </IllustratedMessage>
          )}
      </DropZone>
    </>
  );
}

function Example_4() {
  let [filledSrc, setFilledSrc] = React.useState(null);

  return (
    <>
      <DraggableImage />
      <DropZone
        isFilled={!!filledSrc}
        maxWidth="size-3000"
        height="size-2400"
        getDropOperation={(types) =>  (types.has('image/png') || types.has('image/jpeg')) ? 'copy' : 'cancel'}
        onDrop={async (e) => {
          e.items.find(async (item) => {
            if (item.kind === 'file') {
              if (item.type === 'image/jpeg' || item.type === 'image/png') {
                setFilledSrc(URL.createObjectURL(await item.getFile()));
              }
            } else if (item.kind === 'text') {
              setFilledSrc(await item.getText('image/jpeg'));
            }
          });
        }}>
        {filledSrc
          ? <img className="images" alt="" src={filledSrc} />
          : (
            <IllustratedMessage>
              <Upload />
              <Heading>
                Drag and drop photos
              </Heading>
            </IllustratedMessage>
          )}
      </DropZone>
    </>
  );
}

function Example_5() {
  let [isFilled, setIsFilled] = React.useState(false);

  return (
    <>
      <Draggable />
      <DropZone
        isFilled={isFilled}
        maxWidth="size-3000"
        replaceMessage="This is a custom message"
        onDrop={() => setIsFilled(true)}>
        <IllustratedMessage>
          <Upload />
          <Heading>
            {isFilled ? 'You dropped something!' : 'Drag and drop here'}
          </Heading>
        </IllustratedMessage>
      </DropZone>
    </>
  );
}

function Example_6() {
  let [filledSrc, setFilledSrc] = React.useState(null);

  return (
    <>
      <Draggable />
      <DraggableImage />
      <DropZone
        maxWidth="size-3000"
        isFilled={!!filledSrc}
        getDropOperation={(types) => types.has('image/jpeg') ? 'copy' : 'cancel'}
        onDrop={async (e) => {
          e.items.find(async (item) => {
            if (item.kind === 'file') {
              if (item.type === 'image/jpeg') {
                let file = await item.getFile();
                setFilledSrc({
                  type: file.type,
                  name: file.name
                })
              }
            } else if (item.kind === 'text') {
              let file = await item.getText('image/jpeg');
              setFilledSrc({
                type: 'image/jpeg',
                name: file
              })
            }
          });
        }}>
        <IllustratedMessage>
          <Upload />
          <Heading>
            {filledSrc ? `${filledSrc.type} ${filledSrc.name}` : 'Drag and drop here'}
          </Heading>
          <Content>
            <FileTrigger
              acceptedFileTypes={['image/jpeg']}
              onSelect={(e) => {
                let file = (Array.from(e)).find((file) => file.type === "image/jpeg")
                if (file) {
                  setFilledSrc({
                    type: file.type,
                    name: file.name
                  })
                }
              }}>
              <Button variant="primary">Browse</Button>
            </FileTrigger>
          </Content>
        </IllustratedMessage>
      </DropZone>
    </>
  );
}

export const demos = {
  "example-1": Example,
  "content-1": Example_2,
  "events-1": Example_3,
  "visual-options-1": Example_4,
  "visual-options-3": Example_5,
  "visual-options-4": Example_6,
};
export const skipped: Record<string, { code: string; detail: string }> = {
  "example-2": { code: "not-an-example", detail: "공식 문서가 이 코드 조각을 그리지 않고 코드로만 보여 줘요(render=false)." },
  "visual-options-2": { code: "not-an-example", detail: "공식 문서가 이 코드 조각을 그리지 않고 코드로만 보여 줘요(render=false)." },
};
