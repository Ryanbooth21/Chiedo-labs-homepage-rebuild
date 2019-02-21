import { Container, Row, Col } from 'react-bootstrap'

const FoundingMembers = (props) => {
    return (
        <div id="founders-container">
          <Container className="White-title founders-title" fluid>
            <h3>Our Founding Web Developers</h3>
          </Container>
          {console.log(props.media)}
          <Container id="foundersBlock" fluid style={{ lineHeight: '32px' }}>
              <div className="founder"><img height="300px" width="300px" src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-chiedo-new.jpg"/><div className="nameTag"><span>Chiedo</span><br/>Founder, Solutions Architect</div></div>
              <div className="founder"><img height="300px" width="300px" src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-ricardo-fearing.jpg"/><div className="nameTag"><span>Ricardo</span><br/>ReactJS / Front-End Master</div></div>
              <div className="founder"><img height="300px" width="300px" src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-eric-duvon.jpg"/><div className="nameTag"><span>Eric</span><br/>Ruby on Rails / Back-end Pro</div></div>
              <div className="founder"><img height="300px" width="300px" src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-don-townsend.jpg"/><div className="nameTag"><span>Don</span><br/>NodeJS / Full Stack Expert</div></div>
          </Container>
        <button className="btn btn-grey">Get a quote</button>
      <style jsx>{` 
        .btn-grey {
          display: inline-block;
          background-color: darkslategray;
          color: #ffffff;
          position: relative;
          bottom: 20px;
      }
      
      `}</style>
      </div>
    )
}
export default FoundingMembers