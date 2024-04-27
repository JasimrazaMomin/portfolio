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
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={12} xl={12}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`‎ `}<span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
                        <p>About myself section</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}