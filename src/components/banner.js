import { Col, Container, Row } from "react-bootstrap";
import { useState,useEffect } from "react";

export const Banner = () => {
    const toDisplay = ["Hi, it's me, Jasimraza Momin", "A Passionate Programmer", "Someone Excited For The Future"];
    const [index,setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text,setText] = useState('');
    const [delta, setDelta] = useState(40);
    const timepassed = 2000;

    useEffect(()=> {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    },[text])

    const tick = () => {
        let i = index % toDisplay.length;
        let fullText = toDisplay[i];
        let updateText = isDeleting ? fullText.substring(0,text.length-1) :fullText.substring(0,text.length+1);
        setText(updateText)
        if (isDeleting) {
            setDelta(30)
        }
        if (!isDeleting && updateText===fullText) {
            setIsDeleting(true);
            setDelta(timepassed);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setIndex(index +1);
            setDelta(40);
        }
    }

    return (
        <section className="banner" id="home">
            <Container >
                <Row className="align-items-center">
                    <Col>
                        <span className="tagline">Welcome To My Website!</span>
                        <h1>{`‎ `}<span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
                        <p>Hey there! I'm Jasimraza Momin (you can just call me Jaz), a passionate and creative computer science enthusiast currently pursuing a Bachelor of Applied Science in Honours Co-Op Computer Science at McMaster University in Hamilton, Canada. My journey in the world of technology has been incredibly rewarding, filled with exciting projects and valuable learning experiences.

With a strong foundation in languages like Python, Java, and C, I love diving into the world of programming to solve complex problems and create innovative solutions. I also have a knack for web development, working with HTML, CSS/SCSS, and JavaScript to craft visually stunning and user-friendly interfaces.

I'm no stranger to frameworks and tools either, having hands-on experience with Node.js, Express.js, React.js, and a plethora of development tools like Git, VSCode, and MySQL Workbench. My knowledge extends to debugging, optimization, and artificial neural networks, making me a versatile and resourceful developer.

When I'm not coding, you'll find me actively involved in various organizations, such as the Residence Engagement Committee and McMaster Medical Engineering Design Team. In these roles, I've honed my skills in leadership, teamwork, and communication, contributing to the success of our projects and events.

I believe in continuous learning and growth, always eager to explore new technologies and expand my horizons. Let's connect and explore the endless possibilities of technology together!</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}