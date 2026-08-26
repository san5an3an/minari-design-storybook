import React from 'react';
import { Switch } from 'antd';

const onChange = (checked: boolean) => {
  console.log(`바뀜: ${checked}`);
};

const App: React.FC = () => <Switch defaultChecked onChange={onChange} />;

export default App;