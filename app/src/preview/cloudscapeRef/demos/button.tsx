// @ts-nocheck
import Button from "@cloudscape-design/components/button";
import SpaceBetween from "@cloudscape-design/components/space-between";

export default function Demo_delete_one_click() {
  return (
    <SpaceBetween direction="horizontal" size="xs">
    <Button variant="link" onClick={() => {}}>
      Cancel
    </Button>
    <Button variant="primary" disabled={false}>
      Save changes
    </Button>
    </SpaceBetween>
  );
}
