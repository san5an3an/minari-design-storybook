// @ts-nocheck
import { Link, View } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <Link href="https://www.imdb.com/title/tt6348138/" target="_blank">The missing link.</Link>
    </>
  );
}

function Example2() {
  return (
    <>
    <Link href="https://adobe.com" target="_blank">Adobe.com</Link>
    </>
  );
}

function Example3() {
  return (
    <>
    <Link onPress={() => alert('Pressed link')}>Adobe</Link>
    </>
  );
}

function Example4() {
  return (
    <>
    <Link onPress={e => alert(`clicked "${e.target.textContent}" Link`)}>
      I forgot my password
    </Link>
    </>
  );
}

function Example5() {
  return (
    <>
    <p>Would you like to <Link variant="primary">learn more</Link> about this fine component?</p>
    </>
  );
}

function Example6() {
  return (
    <>
    <p>Would you like to <Link variant="secondary">learn more</Link> about this fine component?</p>
    </>
  );
}

function Example7() {
  return (
    <>
    <View backgroundColor="positive" padding="size-300">
      <Link variant="overBackground">Learn more here!</Link>
    </View>
    </>
  );
}

function Example8() {
  return (
    <>
    <p>Would you like to <Link isQuiet>learn more</Link> about this fine component?</p>
    </>
  );
}

export const demos = {
  "example": Example1,
  "content": Example2,
  "javascript-handled-links": Example3,
  "accessibility": Example4,
  "primary": Example5,
  "secondary": Example6,
  "over-background": Example7,
  "quiet": Example8,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
