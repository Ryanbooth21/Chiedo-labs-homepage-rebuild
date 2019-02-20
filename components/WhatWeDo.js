import { Container, Row, Col } from 'react-bootstrap'
// import { codeImage } from '../.next/static/images/numbers.png';
const WhatWeDo = () => {
    return (
        <>
        <Container fluid style={{ lineHeight: '32px' }}>
        <Row>
          <Col sm={0} md={6}></Col>
          <Col sm={12} md={6} id="WhatWeDo">
            <h3><span className="redText">WHAT</span> WE DO</h3><br/>
            <p>We build and maintain:</p>
            <p><u>Web Front-Ends</u> with HTML, CSS, and a library called React.</p>
            <p><u>Web Back-ends</u> using NodeJS, Ruby on Rails, PHP, MySQL, AWS, and Heroku.</p>
            <p><u>Custom Websites</u> from the ground up as opposed to using pre-existing templates.</p>
            <button className="btn">Get a quote</button>
          </Col>
        </Row>
      </Container>
      <style jsx>{` 
        
      `}</style>
      </>
    )
}
export default WhatWeDo