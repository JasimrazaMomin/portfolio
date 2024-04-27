import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
//   https://devicon.dev to get icons that i used
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 10
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Description</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className='item'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" height={75} width={75} alt="python" />
                                    <h5>Python</h5>
                                </div>
                                <div className='item'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" height={75} width={75} alt="java"/>
                                    <h5>Java</h5>
                                </div>
                                <div className='item'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" height={75} width={75} alt="git"/>
                                    <h5>Git</h5>
                                </div>
                                <div className='item'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" height={75} width={75} alt="javascript"/>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className='item'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" height={75} width={75} alt="c"/>
                                    <h5>C</h5>
                                </div>
                                <div className='item'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" height={75} width={75} alt="mysql"/>
                                    <h5>MySQL</h5>
                                </div>
                                <div className='item'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" height={75} width={75} alt="node.js"/>
                                    <h5>Node.js</h5>
                                </div>
                                <div className='item'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" height={75} width={75} alt="react"/>
                                    <h5>React</h5>
                                </div>
                                <div className='item'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" height={75} width={75} alt="firebase"/>
                                    <h5>Firebase</h5>
                                </div>
                                <div className='item'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" height={75} width={75} alt="html"/>
                                    <h5>HTML</h5>
                                </div>
                                <div className='item'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" height={75} width={75} alt="css"/>
                                    <h5>CSS</h5>
                                </div>
                                <div className='item'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/haskell/haskell-original.svg" height={75} width={75} alt="haskell"/>
                                    <h5>Haskell</h5>
                                </div>
                                <div className='item'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg" height={75} width={75} alt="latex"/>
                                    <h5>Latex</h5>
                                </div>
                                <div className='item'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elm/elm-original.svg" height={75} width={75} alt="elm"/>
                                    <h5>Elm</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}