import { Container, Row, Col } from 'react-bootstrap'

const MoreLinks = () => {
    return (
        <>
        <Container fluid style={{ lineHeight: '32px' }}>
        <Row>
            <Col lg={3}><span className="redText">More Links</span></Col>
            <Col lg={9}><h3>Meet Our Founder</h3><br/><p>If you need new web developers or want to talk about your tech startup, let's connect on LinkedIn and meet for lunch or coffee!</p><button className="btn">Connect on LinkedIn</button></Col>
        </Row>
      </Container>
      <style jsx>{` 
        .button {
            width: 200px;
        }
      `}</style>
      </>
    )
}
export default MoreLinks