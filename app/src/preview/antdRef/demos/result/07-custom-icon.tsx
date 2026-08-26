import React from 'react';
import { SmileOutlined } from '../_icons';
import { Button, Result } from 'antd';

const App: React.FC = () => (
  <Result
    icon={<SmileOutlined />}
    title="좋아요, 할 일을 다 했어요!"
    extra={<Button type="primary">다음</Button>}
  />
);

export default App;