import { Container, Row, Col } from 'react-bootstrap'
import { mapContextToProps } from 'react-context-toolbox';

const Portfolio = (props) => {
    return (
        <>
        
        <Container fluid style={{ lineHeight: '32px', width: '100vw' }}>
        <Row className="justify-content-md-center" style={{ width: '100vw' }}>
            <Col lg={2.4}></Col>
            <Col lg={2.4}></Col>
            <Col lg={2.4}></Col>
            <Col lg={2.4}></Col>
            <Col lg={2.4}></Col>
        </Row>
        <Row className="justify-content-md-center" style={{ width: '100vw' }}>
            <Col lg={2.4}></Col>
            <Col lg={2.4}></Col>
            <Col lg={2.4}></Col>
            <Col lg={2.4}></Col>
            <Col lg={2.4}></Col>
        </Row>
      </Container>
      <style jsx>{` 
        
      `}</style>
      </>
    )
}
export default Portfolio