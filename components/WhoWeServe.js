import { Container, Row, Col } from 'react-bootstrap'

const WhoWeServe = () => {
    return (
        <>

        <Container className="lighterGreyBox"  fluid >
        <Row id="WhoWeServe">
          <Col sm={12} md={6} id="WhoWeServeText"><h3><span className="redText">WHO</span> WE SERVE</h3><br/><p><span className="redText">Enterprise customers</span> hire us to build and maintain the web apps critical to their operations. 
          <br/><span className="redText">Tech startups</span> partner with us to build and maintain the web front-ends and back-ends at the core of their business.</p>
          <button className="btn">Get a quote</button>
          </Col>
          <Col sm={0} md={6} id="featured-image-misc2">
          </Col>
        </Row>
      </Container>
      <style jsx>{` 
        
      `}</style>
      </>
    )
}
export default WhoWeServe