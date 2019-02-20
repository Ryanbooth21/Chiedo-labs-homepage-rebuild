import { Container, Row, Col } from 'react-bootstrap'

const FoundingMembers = () => {
    return (
        <div id="founders-container">
        <Container className="White-title founders-title" fluid><h3 c>Our Founding Web Developers</h3></Container>
            
        <Container id="foundersBlock" fluid style={{ lineHeight: '32px' }}>
         
          
            <div className="founder"><img height="300px" width="300px" src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-chiedo-new.jpg"/></div>
            <div className="founder"><img height="300px" width="300px" src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-ricardo-fearing.jpg"/></div>
            <div className="founder"><img height="300px" width="300px" src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-eric-duvon.jpg"/></div>
            <div className="founder"><img height="300px" width="300px" src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-don-townsend.jpg"/></div>
          
         
        </Container>
        <button className="btn-grey">Get a quote</button>
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
      </div>
    )
}
export default FoundingMembers