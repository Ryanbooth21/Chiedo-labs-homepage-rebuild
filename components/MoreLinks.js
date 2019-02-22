import { Container, Row, Col } from 'react-bootstrap'

const MoreLinks = () => {
    return (
        <>
        <Container id="linksAndFounder" fluid style={{ lineHeight: '32px' }}>
        <Row>
            <Col className="greybox centered"  lg={7} xl={4} xl={{ order: 12 }} lg={{ order: 12 }} >
                <img id='featured-image-chiedo' src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/chiedo-sitting-small.png"/>
            </Col>
            <Col xl={5} lg={5} className="ourFounder" xl={{ order: 12 }} lg={{ order: 12 }} >
            <h3>Meet Our Founder</h3><br/>
                <p>If you need new web developers or want to talk about 
                    your tech startup, let's connect on LinkedIn and meet 
                    for lunch or coffee!
                </p>
            <button className="btn">Connect on LinkedIn</button>
            </Col>
            <Col  className="moreLinks" xl={3} lg={12} xl={{ order: 1 }} lg={{ order: 1 }}>
            <ul>
            <span className="redText" style={{ fontSize: '2.5rem', }}>MORE LINKS</span>
                <li>Blog</li>
                <li>Join the Team</li>
                <li>Facebook</li>
                <li>Twitter</li>
            </ul>
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