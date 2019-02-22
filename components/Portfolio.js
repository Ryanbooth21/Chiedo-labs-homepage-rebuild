import { Container, Row, Col } from 'react-bootstrap'
import { mapContextToProps } from 'react-context-toolbox';

const Portfolio = (props) => {
    return (
        <>
        
        <Container id="case-study-container" fluid style={{ lineHeight: '32px', width: '100vw' }}>
        <Row className="case-study-row justify-content-md-center" style={{ width: '100vw' }}>
            <Col lg={12}>
                <span id="" className="case-study"><h4></h4></span>
                <span id="bridgewater" className="case-study"><h4></h4></span>
                <span id="" className="case-study"><h4></h4></span>
                <span id="" className="case-study"><h4></h4></span>
                <span id="" className="case-study"><h4></h4></span>
            </Col>
        </Row>
        <Row className="case-study-row justify-content-md-center" style={{ width: '100vw' }}>
            <Col lg={12}></Col>
        </Row>
      </Container>
      <style jsx>{` 
        
      `}</style>
      </>
    )
}
export default Portfolio