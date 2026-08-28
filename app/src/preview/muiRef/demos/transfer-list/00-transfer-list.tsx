/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/transfer-list/TransferList.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 화면에 보이는 영어 문구 → 한글 (`tools/mui_demo_ko.py` 의 사전).
 *       ⚠️ 사전에 있는 것만 바뀐다. API 값은 영어 그대로다.
 *    ② 그림 주소 `"/static/…"` → 그쪽 사이트 절대 주소.
 *
 * ⚠️ **아이콘은 안 바꿨다** — `@mui/icons-material` 을 그대로 부른다.
 *    MUI 베이스는 Lucide 전역 규칙의 **예외**다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import * as React from 'react';
import Grid from '@mui/material/Grid';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

function not(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => !b.includes(value));
}

function intersection(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.includes(value));
}

type CustomListProps = {
  items: readonly number[];
  checked: readonly number[];
  handleToggle: (value: number) => () => void;
};

const CustomList = React.forwardRef(function CustomList(
  props: CustomListProps,
  ref: React.Ref<HTMLDivElement & { focus: () => void }>,
) {
  const { items, checked, handleToggle } = props;

  return (
    <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
      <MenuList dense component="div" role="list" ref={ref}>
        {items.map((value: number) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <MenuItem
              component="div"
              key={value}
              role="listitem"
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.includes(value)}
                  tabIndex={-1}
                  disableRipple
                  slotProps={{
                    input: { 'aria-labelledby': labelId },
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </MenuItem>
          );
        })}
      </MenuList>
    </Paper>
  );
});

export default function TransferList() {
  const [checked, setChecked] = React.useState<readonly number[]>([]);
  const [left, setLeft] = React.useState<readonly number[]>([0, 1, 2, 3]);
  const [right, setRight] = React.useState<readonly number[]>([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const leftListRef = React.useRef<HTMLDivElement & { focus: () => void }>(null);
  const rightListRef = React.useRef<HTMLDivElement & { focus: () => void }>(null);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
    setChecked(not(checked, left));
    rightListRef.current?.focus();
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
    rightListRef.current?.focus();
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
    leftListRef.current?.focus();
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
    setChecked(not(checked, right));
    leftListRef.current?.focus();
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <CustomList
        ref={leftListRef}
        items={left}
        checked={checked}
        handleToggle={handleToggle}
      />
      <Stack>
        <Button
          sx={{ my: 0.5 }}
          variant="outlined"
          size="small"
          onClick={handleAllRight}
          disabled={left.length === 0}
          aria-label="move all right"
        >
          ≫
        </Button>
        <Button
          sx={{ my: 0.5 }}
          variant="outlined"
          size="small"
          onClick={handleCheckedRight}
          disabled={leftChecked.length === 0}
          aria-label="move selected right"
        >
          &gt;
        </Button>
        <Button
          sx={{ my: 0.5 }}
          variant="outlined"
          size="small"
          onClick={handleCheckedLeft}
          disabled={rightChecked.length === 0}
          aria-label="move selected left"
        >
          &lt;
        </Button>
        <Button
          sx={{ my: 0.5 }}
          variant="outlined"
          size="small"
          onClick={handleAllLeft}
          disabled={right.length === 0}
          aria-label="move all left"
        >
          ≪
        </Button>
      </Stack>
      <CustomList
        ref={rightListRef}
        items={right}
        checked={checked}
        handleToggle={handleToggle}
      />
    </Grid>
  );
}
