import { Container, Row, Col } from 'react-bootstrap'
import { mapContextToProps } from 'react-context-toolbox';


const Portfolio = (props) => {
    
   {
       var photoArray = [];props.media.slice(0)
   }
   {
       var editedArray = photoArray.concat(props.media[0],props.media[30],props.media[31],props.media[32],props.media[33],props.media[38],props.media[39],props.media[40],props.media[41],props.media[42])
   }

    return (
        <>
        {console.log(editedArray)}
        <Container id="case-study-container justify-content-center" fluid style={{ lineHeight: '32px', width: '100vw' }}>
        <Row className="case-study-row" style={{ width: '100vw' }}>
            <Col lg={2}>
                <div style={{ backgroundImage: `url(${editedArray[0].source_url})`}} className="case-study-div">
                    <h4 className="case-study-title">{editedArray[0].alt_text}</h4>
                    
                </div>
            </Col>
            <Col lg={2}>
                <div style={{ backgroundImage: `url(${editedArray[1].source_url})`}} className="case-study-div">
                    <h4 className="case-study-title">{editedArray[1].alt_text}</h4>
                    
                </div>
            </Col>
            <Col lg={2}>
                <div style={{ backgroundImage: `url(${editedArray[2].source_url})`}} className="case-study-div">
                    <h4 style={{ backgroundImage: `url(${editedArray[2].source_url})`}} className="case-study-title">{editedArray[2].alt_text}</h4>
                    
                </div>
            </Col>
            <Col lg={2}>
                <div style={{ backgroundImage: `url(${editedArray[3].source_url})`}} className="case-study-div">
                    <h4 className="case-study-title">{editedArray[3].alt_text}</h4>
                    
                </div>
            </Col>
            <Col lg={2}>
                <div style={{ backgroundImage: `url(${editedArray[4].source_url})`}} className="case-study-div">
                    <h4 className="case-study-title">{editedArray[4].alt_text}</h4>
                    
                </div>
            </Col>
        </Row>
        <Row className="case-study-row " style={{ width: '100vw' }}>
            <Col lg={2}>
                <div style={{ backgroundImage: `url(${editedArray[5].source_url})`}} className="case-study-div">
                    <h4 className="case-study-title">Husel</h4>
                   
                </div>
            </Col>
            <Col lg={2}>
                <div style={{ backgroundImage: `url(${editedArray[6].source_url})`}} className="case-study-div">
                    <h4 className="case-study-title">{editedArray[6].alt_text}</h4>
                    
                </div>
            </Col>
            <Col lg={2}>
                <div style={{ backgroundImage: `url(${editedArray[7].source_url})`}} className="case-study-div">
                    <h4 className="case-study-title">{editedArray[7].alt_text}</h4>
                   
                </div>
            </Col>
            <Col lg={2}>
                <div style={{ backgroundImage: `url(${editedArray[8].source_url})`}} className="case-study-div">
                    <h4 className="case-study-title">{editedArray[8].alt_text}</h4>
                    
                </div>
            </Col>
            <Col lg={2}>
                <div style={{ backgroundImage: `url(${editedArray[9].source_url})`}} className="case-study-div">
                    <h4 className="case-study-title">{editedArray[9].alt_text}</h4>
                    
                </div>
            </Col>
        </Row>
      </Container>
      <style jsx>{` 
        
      `}</style>
      </>
    )
}
export default Portfolio