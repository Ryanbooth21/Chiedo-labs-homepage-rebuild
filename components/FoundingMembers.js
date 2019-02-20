import { Container, Row, Col } from 'react-bootstrap'

const FoundingMembers = () => {
    return (
        <>

        <Container className="foundersBlock" fluid style={{ lineHeight: '32px' }}>
          <h3>Our Founding Web Developers</h3>
          <button className="btn-grey">Get a quote</button>
        </Container>
      <style jsx>{` 
        .btn-grey {
          display: inline-block;
          padding: 1.2em 1.4em;
          margin-top: .8em;
          height: 65px;
          max-width: 180px;
          box-shadow: 3px 3px rgba(125,125,125,0.2);
          background-color: darkslategray;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: #ffffff;
          text-transform: uppercase;
      }
      `}</style>
      </>
    )
}
export default FoundingMembers