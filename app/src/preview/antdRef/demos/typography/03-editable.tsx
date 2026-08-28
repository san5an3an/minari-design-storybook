// @ts-nocheck
import React, { useMemo, useState } from 'react';
import { CheckOutlined, HighlightOutlined } from '@ant-design/icons';
import { Radio, Typography } from 'antd';

const { Paragraph } = Typography;

const App: React.FC = () => {
  const [editableStr, setEditableStr] = useState('고칠 수 있는 글이에요.');
  const [editableStrWithSuffix, setEditableStrWithSuffix] = useState(
    '뒤에 덧붙임이 있는 아주아아아아아아주 긴 고칠 수 있는 글이에요.',
  );
  const [editableStrWithSuffixStartPart, editableStrWithSuffixSuffixPart] = useMemo(
    () => [editableStrWithSuffix.slice(0, -12), editableStrWithSuffix.slice(-12)],
    [editableStrWithSuffix],
  );
  const [customIconStr, setCustomIconStr] = useState('고치기 아이콘과 툴팁 글자를 직접 정해요.');
  const [clickTriggerStr, setClickTriggerStr] = useState(
    '글자나 아이콘으로 열어요 — 눌러서 고치기를 시작해요.',
  );
  const [chooseTrigger, setChooseTrigger] = useState<('icon' | 'text')[]>(['icon']);
  const [customEnterIconStr, setCustomEnterIconStr] = useState(
    '고치는 칸에 enter 아이콘을 직접 넣은 글이에요.',
  );
  const [noEnterIconStr, setNoEnterIconStr] = useState(
    '고치는 칸에 enter 아이콘이 없는 글이에요.',
  );
  const [hideTooltipStr, setHideTooltipStr] = useState('고치기 툴팁을 숨겨요.');
  const [lengthLimitedStr, setLengthLimitedStr] = useState(
    '길이가 제한된 고칠 수 있는 글이에요.',
  );

  const radioToState = (input: string): ('icon' | 'text')[] => {
    switch (input) {
      case 'text':
        return ['text'];
      case 'both':
        return ['icon', 'text'];
      case 'icon':
        return ['icon'];
      default:
        return ['icon'];
    }
  };

  const stateToRadio = useMemo<string>(() => {
    if (chooseTrigger.includes('text')) {
      return chooseTrigger.includes('icon') ? 'both' : 'text';
    }
    return 'icon';
  }, [chooseTrigger]);

  return (
    <>
      <Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph>
      <Paragraph
        editable={{
          onChange: setEditableStrWithSuffix,
          text: editableStrWithSuffix,
        }}
        ellipsis={{
          suffix: editableStrWithSuffixSuffixPart,
        }}
      >
        {editableStrWithSuffixStartPart}
      </Paragraph>
      <Paragraph
        editable={{
          icon: <HighlightOutlined />,
          tooltip: '눌러서 글을 고쳐요',
          onChange: setCustomIconStr,
        }}
      >
        {customIconStr}
      </Paragraph>
      고치기를 여는 방법:{' '}
      <Radio.Group
        onChange={(e) => setChooseTrigger(radioToState(e.target.value))}
        value={stateToRadio}
      >
        <Radio value="icon">icon</Radio>
        <Radio value="text">text</Radio>
        <Radio value="both">both</Radio>
      </Radio.Group>
      <Paragraph
        editable={{
          tooltip: '눌러서 글을 고쳐요',
          onChange: setClickTriggerStr,
          triggerType: chooseTrigger,
        }}
      >
        {clickTriggerStr}
      </Paragraph>
      <Paragraph
        editable={{
          icon: <HighlightOutlined />,
          tooltip: '눌러서 글을 고쳐요',
          onChange: setCustomEnterIconStr,
          enterIcon: <CheckOutlined />,
        }}
      >
        {customEnterIconStr}
      </Paragraph>
      <Paragraph
        editable={{
          icon: <HighlightOutlined />,
          tooltip: '눌러서 글을 고쳐요',
          onChange: setNoEnterIconStr,
          enterIcon: null,
        }}
      >
        {noEnterIconStr}
      </Paragraph>
      <Paragraph editable={{ tooltip: false, onChange: setHideTooltipStr }}>
        {hideTooltipStr}
      </Paragraph>
      <Paragraph
        editable={{
          onChange: setLengthLimitedStr,
          maxLength: 50,
          autoSize: { maxRows: 5, minRows: 3 },
        }}
      >
        {lengthLimitedStr}
      </Paragraph>
      <Typography.Title editable level={1} style={{ margin: 0 }}>
        h1. Ant Design
      </Typography.Title>
      <Typography.Title editable level={2} style={{ margin: 0 }}>
        h2. Ant Design
      </Typography.Title>
      <Typography.Title editable level={3} style={{ margin: 0 }}>
        h3. Ant Design
      </Typography.Title>
      <Typography.Title editable level={4} style={{ margin: 0 }}>
        h4. Ant Design
      </Typography.Title>
      <Typography.Title editable level={5} style={{ margin: 0 }}>
        h5. Ant Design
      </Typography.Title>
    </>
  );
};

export default App;