import { Container, Row, Col } from 'react-bootstrap'

const MoreLinks = () => {
    return (
        <>
        <Container id="linksAndFounder" fluid style={{ lineHeight: '32px' }}>
        <Row>
            <Col  className="moreLinks" lg={3}>
            <ul>
            <span className="redText" style={{ fontSize: '2.5rem', }}>More Links</span>
                <li>Blog</li>
                <li>Join the Team</li>
                <li>Facebook</li>
                <li>Twitter</li>
            </ul>
            </Col>
            <Col lg={9} className="ourFounder">
            <h3>Meet Our Founder</h3><br/>
                <p>If you need new web developers or want to talk about 
                    your tech startup, let's connect on LinkedIn and meet 
                    for lunch or coffee!
                </p>
            <button className="btn">Connect on LinkedIn</button>
            </Col>
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