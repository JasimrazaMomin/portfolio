import { Col, Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import Aos from 'aos';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import "aos/dist/aos.css";

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

    useEffect(()=> {
        Aos.init({offset: 100, duration: 1000});
    },[])

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div data-aos="slide-up" className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>I have a strong foundation in programming languages such as Python, Java, and C, with a focus on building efficient and scalable software solutions. My experience extends to relational algebra, relational databases, and database design, where I leverage my knowledge to create robust and optimized database structures.

I am well-versed in design principles and software development cycles, ensuring that my projects are not only functional but also adhere to industry best practices. My expertise in data structures and algorithms allows me to approach problem-solving with a strategic mindset, delivering high-quality and efficient solutions.

Additionally, my understanding of artificial neural networks (ANN) enables me to explore complex machine learning models, further enhancing my skills in data analysis and pattern recognition. I am also proficient in debugging and optimization, ensuring that my code is efficient and error-free.

With a background in discrete mathematics and a passion for learning, I am always eager to explore new technologies and expand my skill set. I am confident in my ability to contribute effectively to any software development team, bringing a blend of technical expertise, analytical thinking, and a commitment to excellence. My proficiency shines in the following skills:</p>
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