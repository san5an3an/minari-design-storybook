import React from 'react';
import { Col, Divider, Row } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles((props) => {
  const { css } = props;
  return {
    rowContainer: css`
      background-color: rgba(128, 128, 128, 0.08);
    `,
  };
});

const App: React.FC = () => {
  const { styles } = useStyles();
  return (
    <>
      <Divider titlePlacement="start">자식 요소 왼쪽 맞춤</Divider>
      <Row className={styles.rowContainer} justify="start">
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>
      <Divider titlePlacement="start">자식 요소 가운데 맞춤</Divider>
      <Row className={styles.rowContainer} justify="center">
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>
      <Divider titlePlacement="start">자식 요소 오른쪽 맞춤</Divider>
      <Row className={styles.rowContainer} justify="end">
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>
      <Divider titlePlacement="start">자식 요소 등폭 배치</Divider>
      <Row className={styles.rowContainer} justify="space-between">
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>
      <Divider titlePlacement="start">자식 요소 꽉 채움</Divider>
      <Row className={styles.rowContainer} justify="space-around">
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>
      <Divider titlePlacement="start">자식 요소 고르게 맞춤</Divider>
      <Row className={styles.rowContainer} justify="space-evenly">
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>
    </>
  );
};

export default App;