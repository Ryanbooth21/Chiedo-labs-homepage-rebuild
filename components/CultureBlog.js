import { Container, Row, Col } from 'react-bootstrap'

class CultureBlog extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentBlogTitle: '',
      currentBlogLink: ''
    }
  }

  componentDidMount(){
    let currentTitle = this.props.posts[0].title.rendered
    let currentLink = this.props.posts[0].link
    this.setState({
      currentBlogTitle: currentTitle,
      currentBlogLink: currentLink
    })
  }
  render() {
    return (
        <>
        <Container id="CultureBlog" fluid >
        <Row>
          <Col md={6} lg={4}className="greybox" >
          <img id="featured-image-ricardo"  src='https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/img-ricardo-monicle.jpg'/></Col>
            <Col md={6} lg={5}className="startUp" style={{ padding: '3em' }}>
              <h3 style={{ fontSize: '2rem' }}>Start-up Culture, Corporate-Grade Service.</h3>
              <p style={{ fontSize: '1rem' }}>We create an atmosphere that fosters creativity and professionalism. In this way, we allow our team to hone your vision with our digital strategy and build realities that will take your business to the next level.</p>
              <button className="btn">Get a quote</button></Col>
            <Col md={12} lg={3} id="PostColumn" style={{ fontSize: '2.5rem', textAlign: 'center' }}>
              <h3><span className="redText">FEATURED</span> POST</h3>
              <a className="greybox" href={this.state.currentBlogLink}><div id="featuredPostLink" >{this.state.currentBlogTitle}</div></a>
            </Col>
        </Row>
      </Container>
      <style jsx>{` 
        #featuredPostLink{
          
        }
      `}</style>
      </>
    )
  }
}
export default CultureBlog