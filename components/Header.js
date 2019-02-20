import React from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
const Header = () => (
       <>
            <div className="banner">
            <a href="https://labs.chiedo.com"><img src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/b-logo-white.png?ver=1.11" alt="Chiedo Labs Web Development Harrisonburg VA & Charlottesville VA web design" width="225" /></a>
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
            <h1 className="callText callMain">YOUR NEW WEB DEVELOPERS</h1>
            <p className="callText">We’re a team of web developers passionate about building stable, maintainable software for tech startups and enterprise customers.</p>
        </Container>
        <Container fluid id="ourTeam">
            <h3>Hire our team to:</h3>
            <p>Build and maintain: Web applications Web back-ends Web front-ends Custom websites</p>
        </Container>
    <style jsx>{`
        .banner {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: black;
            width: 100vw;
            height: 19vh;
        }
        
        .callMain{
            font-size: 5em;
        }
    `}</style>
    </>
        )

export default Header