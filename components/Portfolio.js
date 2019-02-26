
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
        <div id="case-study-container " fluid >
                <div style={{ backgroundImage: `url(${editedArray[0].source_url})`}} className="case-study-div">
                    <h4 className="case-study-title">BARTRACK</h4>
                    
                </div>
                <div style={{ backgroundImage: `url(${editedArray[1].source_url})`}} className="case-study-div">
                    <h4 className="case-study-title">EHRC</h4>
                    
                </div>
                <div style={{ backgroundImage: `url(${editedArray[2].source_url})`}} className="case-study-div">
                    <h4 className="case-study-title">BRIDGEWATER COLLEGE</h4>
                    
                </div>
                <div style={{ backgroundImage: `url(${editedArray[3].source_url})`}} className="case-study-div">
                    <h4 className="case-study-title">FLYING BUTRESS</h4>
                    
                </div>
                <div style={{ backgroundImage: `url(${editedArray[4].source_url})`}} className="case-study-div">
                    <h4 className="case-study-title">ALBERMALE COUNTRY</h4>
                    
                </div>
                <div style={{ backgroundImage: `url(${editedArray[5].source_url})`}} className="case-study-div">
                    <h4 className="case-study-title">HUSEL</h4>
                   
                </div>
                <div style={{ backgroundImage: `url(${editedArray[6].source_url})`}} className="case-study-div">
                    <h4 className="case-study-title">HOLTZMAN</h4>
                    
                </div>
                <div style={{ backgroundImage: `url(${editedArray[7].source_url})`}} className="case-study-div">
                    <h4 className="case-study-title">HARRISONBURG DOWNTOWN RENAISSANCE</h4>
                   
                </div>
                <div style={{ backgroundImage: `url(${editedArray[8].source_url})`}} className="case-study-div">
                    <h4 className="case-study-title">CHRISTIAN LIGHT PUBLICATIONS</h4>
                    
                </div>
                <div style={{ backgroundImage: `url(${editedArray[9].source_url})`}} className="case-study-div">
                    <h4 className="case-study-title">NIEDER CHIRO</h4>
                    
                </div>
      </div>
      <style jsx>{` 
        
      `}</style>
      </>
    )
}
export default Portfolio