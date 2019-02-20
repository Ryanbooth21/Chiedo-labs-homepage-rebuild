import { Container, Row, Col } from 'react-bootstrap'

const CultureBlog = () => {
    return (
        <>
        <Container fluid style={{ lineHeight: '15vh' }}>
        <Row>
          <Col className="greybox" lg={3}></Col>
            <Col className="startUp" lg={6} style={{ padding: '3em' }}>
              <h3 style={{ fontSize: '2rem' }}>Start-up Culture, Corporate-Grade Service.</h3><br/>
              <p style={{ fontSize: '1rem' }}>We create an atmosphere that fosters creativity and professionalism. In this way, we allow our team to hone your vision with our digital strategy and build realities that will take your business to the next level.</p>
              <button className="btn">Get a quote</button></Col>
            <Col lg={3} style={{ fontSize: '2.5rem', textAlign: 'center' }}>
              <span className="redText">Featured</span> Post
            </Col>
        </Row>
      </Container>
      <style jsx>{` 
        
      `}</style>
      </>
    )
}
export default CultureBlog