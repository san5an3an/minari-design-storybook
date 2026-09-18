// @ts-nocheck
import * as React from "react";
import { Button, FileTrigger } from "@adobe/react-spectrum";

function Example(){
  let [file, setFile] = React.useState(null);

  return (
    <>
      <FileTrigger
        onSelect={(e) => {
          let files = Array.from(e);
          let filenames = files.map((file) => file.name);
          setFile(filenames);
        }}>
        <Button variant="accent">Select a file</Button>
      </FileTrigger>
      {file && file}
    </>
  )
}

function Example2() {
  return (
    <>
    <FileTrigger acceptedFileTypes={['image/png']}>
      <Button variant="primary">Select files</Button>
    </FileTrigger>
    </>
  );
}

function Example3() {
  return (
    <>
    <FileTrigger allowsMultiple>
      <Button variant="primary">Upload your files</Button>
    </FileTrigger>
    </>
  );
}

function Example_2 () {
  let [files, setFiles] = React.useState([]);

  return (
    <>
      <FileTrigger
        acceptDirectory
        onSelect={(e) => {
          if (e) {
            let fileList = [...e].map(file => file.webkitRelativePath !== "" ? file.webkitRelativePath : file.name);
            setFiles(fileList);
          }
        }} >
        <Button variant="accent">Upload</Button>
      </FileTrigger>
      {files && <ul>
        {files.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>}
    </>
  );
}

function Example5() {
  return (
    <>
    <FileTrigger defaultCamera="environment">
      <Button variant="accent">Open Camera</Button>
    </FileTrigger>
    </>
  );
}

export const demos = {
  "example": Example,
  "accepted-file-types": Example2,
  "multiple-files": Example3,
  "directory-selection": Example_2,
  "media-capture": Example5,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
