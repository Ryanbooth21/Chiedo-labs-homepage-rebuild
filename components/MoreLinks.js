import { Container, Row, Col } from 'react-bootstrap'

const MoreLinks = () => {
    return (
        <>
        <Container fluid style={{ lineHeight: '32px' }}>
        <Row>
            <Col lg={3}>More Links</Col>
            <Col lg={9}><h3>Meet Our Founder</h3><br/><p>If you need new web developers or want to talk about your tech startup, let's connect on LinkedIn and meet for lunch or coffee!</p></Col>
        </Row>
      </Container>
      <style jsx>{` 
        
      `}</style>
      </>
    )
}
export default MoreLinks