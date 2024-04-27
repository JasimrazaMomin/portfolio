import { Col, Container, Row } from "react-bootstrap";
import { Tabs, Tab } from 'react-bootstrap';
import pm from '../images/passwordmanager.png';
import chat from '../images/chatapp.png';
import circle from '../images/circle.jpeg';
import bannerbg from '../images/bannerbg.jpg';

export const Projects = () => {

    const projects = [
        {
            title: "Chat App",
            description: "JS, Firebase, React",
            imageurl: chat
        },
        {
            title: "Password Manager",
            description: "JS, MySQL, React, Express.js",
            imageurl: pm
        },
        {
            title: "File Sorter",
            description: "Working on",
            imageurl: circle
        },
        {
            title: "Inventory Manager",
            description: "Working on",
            imageurl: bannerbg
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Description</p>
                        <Tabs defaultActiveKey="first" id="projects-tab" className="nav-pills mb-4" justify>
                            {projects.map((project, index) => (
                                <Tab key={index} eventKey={`tab${index}`} title={`Tab ${index + 1}`}>
                                    <div className="proj-imgbx">
                                        <img src={project.imageurl} alt={project.title} />
                                        <div className="proj-txtx">
                                            <h1>{project.title}</h1>
                                            <span>{project.description}</span>
                                        </div>
                                    </div>
                                </Tab>
                            ))}
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};