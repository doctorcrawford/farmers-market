import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./Header";
import MarketControl from "./MarketControl";
import ProduceControl from "./ProduceControl";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <>
      <Container>
        <Header />
        <hr></hr>
        <Row>
          <Col><MarketControl /></Col>
          <Col><ProduceControl /></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;