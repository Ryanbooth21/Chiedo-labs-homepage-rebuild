import { Container, Row, Col } from 'react-bootstrap'
// import { codeImage } from '../.next/static/images/numbers.png';
const WhatWeDo = () => {
    return (
        <>

        <Container fluid style={{ lineHeight: '32px' }}>
        <Row>
          {/* <Col><img src={codeImage}/></Col> */}
          <Col></Col>
          <Col>
            <h3><span className="redText">WHAT</span> WE DO</h3>
            <p>We build and maintain:</p>
            <p>Web Front-Ends with HTML, CSS, and a library called React.</p>
            <p>Web Back-ends using NodeJS, Ruby on Rails, PHP, MySQL, AWS, and Heroku.</p>
            <p>Custom Websites from the ground up as opposed to using pre-existing templates.</p>
          
          </Col>
        </Row>
      </Container>
      <style jsx>{` 
        
      `}</style>
      </>
    )
}
export default WhatWeDo