import React from 'react'
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap'
const Header = () => (
       <>
            <div className="banner">
            <a href="https://labs.chiedo.com"><img  src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/b-logo-white.png?ver=1.11" alt="Chiedo Labs Web Development Harrisonburg VA & Charlottesville VA web design"  /></a>
            </div>
        <Navbar collapseOnSelect expand="md" id="nav">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link className="nav-link" href="#features">ABOUT US</Nav.Link>
                <Nav.Link className="nav-link" href="#features">PORTFOLIO</Nav.Link>
                <Nav.Link className="nav-link" href="#features">WHAT WE DO</Nav.Link>
                <Nav.Link className="nav-link" href="#features">WHO WE SERVE</Nav.Link>
                <Nav.Link className="nav-link" href="#features">CONTACT US</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Container fluid id="callToAction">
            <h1 className="callText callMain"><span id="yourNewDev">YOUR NEW<br/> WEB DEVELOPERS</span></h1>
            <p className="callText callBody">We’re a team of web developers passionate about building stable, maintainable<br/> 
            software for tech startups and enterprise customers.</p>
            <button className="btn">Get a quote</button>
        </Container>
        <Container className="greybox" fluid id="ourTeam">
            <h3 className="team White-title">Hire our team to:</h3>
            <p className="team buildAndMaintain">Build and maintain: <span>Web applications</span> <span>Web back-ends</span> <span>Web front-ends</span> <span>Custom websites</span></p>
        </Container>
        
    <style jsx>{`
        .banner {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: black;
            width: 100vw;
            height: 18vh;
        }
        
        .callMain{
            font-size: 80px;
            width: 100vw;
            text-align: center;
            font-weight: 900;
            text-transform: uppercase;
     
            text-shadow: 1px 1px black;
        }
        .btn {
            align-self: center;
        }
        .callBody {
            text-shadow: 0 1px 3px rgba(0,0,0,0.1);
            font-size: 23px;
            text-align: center;
        }
        
    `}</style>
    </>
        )

export default Header