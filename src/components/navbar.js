import { Navbar, Nav, Container } from "react-bootstrap";
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import insta from '../images/insta.svg';
import { useState,useEffect } from 'react';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    },[])

    const updateActiveLink = (link) => {
        setActiveLink(link);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : "notscrolled"}>
            <Container>
                <Navbar.Brand href="#home">Jaz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('projects')}>Projects And Exp.</Nav.Link>
                </Nav>
                <span className="navbar-socials">
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/jasimraza-momin" target="_blank"><img src={linkedin} alt ="linkedin"/></a>
                        <a href="https://github.com/JasimrazaMomin" target="_blank"><img src={github} alt ="github"/></a>
                        <a href="https://www.instagram.com/jasimraza_momin/" target="_blank"><img src={insta} alt ="instagram"/></a>
                    </div>
                    <a href="#connect">
                    <button className="contact-me" onClick={() => console.log('works')}><span>Let's Chat</span></button>
                    </a>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}