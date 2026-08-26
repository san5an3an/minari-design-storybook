import React from 'react';
import { Card } from 'antd';

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
};

const App: React.FC = () => (
  <Card title="카드 제목">
    <Card.Grid style={gridStyle}>내용</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
      내용
    </Card.Grid>
    <Card.Grid style={gridStyle}>내용</Card.Grid>
    <Card.Grid style={gridStyle}>내용</Card.Grid>
    <Card.Grid style={gridStyle}>내용</Card.Grid>
    <Card.Grid style={gridStyle}>내용</Card.Grid>
    <Card.Grid style={gridStyle}>내용</Card.Grid>
  </Card>
);

export default App;