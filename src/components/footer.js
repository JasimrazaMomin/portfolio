import { Col, Container, Row } from "react-bootstrap"
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import insta from '../images/insta.svg';


export const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col className="text-center text-sm-end">
                        <div className="socials">
                            <a href="https://www.linkedin.com/in/jasimraza-momin"><img src={linkedin} alt ="linkedin"/></a>
                            <a href="https://github.com/JasimrazaMomin"><img src={github} alt ="github"/></a>
                            <a href="https://www.instagram.com/jasimraza_momin/"><img src={insta} alt ="instagram"/></a>
                        </div>
                        <p>&copy; 2024 Jasimraza Momin. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}