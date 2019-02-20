import { Container, Row, Col } from 'react-bootstrap'

const CultureBlog = () => {
    return (
        <>
        <Container fluid style={{ lineHeight: '15vh' }}>
        <Row>
          <Col className="greybox" lg={3}></Col>
          <Col className="greybox" lg={6}><h3>Start-up Culture, Corporate-Grade Service.</h3><br/><p>We create an atmosphere that fosters creativity and professionalism. In this way, we allow our team to hone your vision with our digital strategy and build realities that will take your business to the next level.</p><button className="btn">Get a quote</button></Col>
          <Col lg={3}><span className="redText">Featured</span> Post</Col>
        </Row>
      </Container>
      <style jsx>{` 
        
      `}</style>
      </>
    )
}
export default CultureBlog