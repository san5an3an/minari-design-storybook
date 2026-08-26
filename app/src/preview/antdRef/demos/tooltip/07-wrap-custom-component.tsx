import React from 'react';
import { Tooltip } from 'antd';

const ComponentWithEvents = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => (
    <span ref={ref} {...props}>
      필요한 이벤트를 열어 둔 컴포넌트 안의 글이에요.
    </span>
  ),
);

const App: React.FC = () => (
  <Tooltip title="안내 글">
    <ComponentWithEvents />
  </Tooltip>
);

export default App;