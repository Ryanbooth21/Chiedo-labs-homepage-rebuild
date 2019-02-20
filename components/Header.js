import React from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
const Header = () => (
       <>
            <div className="banner">
            <a href="https://labs.chiedo.com"><img height="80px" width="auto" src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/b-logo-white.png?ver=1.11" alt="Chiedo Labs Web Development Harrisonburg VA & Charlottesville VA web design"  /></a>
            </div>

        
        <Navbar  id="nav">
            <Nav className="mr-auto">
            <Nav.Link href="#">ABOUT US</Nav.Link>
            <Nav.Link href="#">PORTFOLIO</Nav.Link>
            <Nav.Link href="#">WHAT WE DO</Nav.Link>
            <Nav.Link href="#">WHO WE SERVE</Nav.Link>
            <Nav.Link href="#">CONTACT US</Nav.Link>
            </Nav>
        </Navbar>
        <Container fluid id="callToAction">
            <h1 className="callText callMain"><span id="yourNewDev">YOUR NEW<br/> WEB DEVELOPERS</span></h1>
            <p className="callText callBody">We’re a team of web developers passionate about building stable, maintainable<br/> software for tech startups and enterprise customers.</p>
            <button className="btn">Get a quote</button>
        </Container>
        <Container className="greybox" fluid id="ourTeam">
            <h3 className="team White-title">Hire our team to:</h3>
            <p className="team buildAndMaintain">Build and maintain: <span className="build-list">Web applications</span> <span className="build-list">Web back-ends</span> <span className="build-list">Web front-ends</span> <span className="build-list">Custom websites</span></p>
        </Container>
        
    <style jsx>{`
        .banner {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: black;
            width: 100vw;
            height: 21.2vh;
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