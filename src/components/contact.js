import { useState,useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Aos from 'aos';
import "aos/dist/aos.css";

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const updateForm = (category,value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        }
        )
    }

    useEffect(()=> {
        Aos.init({duration: 700});
    },[])

    const handleSubmit = async(e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch('http://localhost:3080/contact', {
            method: "POST",
            headers: {
                'Content-Type' : 'Application/json;charset=utf-8'
            },
            body: JSON.stringify(formDetails)
        });
        setButtonText('Send');
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({success:true, message: 'Message Sent'});
        } else {
            setStatus({success:false, message: 'Something went wrong'});
        }
    }

    return (
        <section className="contact" id="connect">
            <Container >
                <Row className="align-items-center">
                    <Col>
                    <div data-aos="flip-up">
                        <h2>Send Me A Message</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails['firstName']} placeholder="First Name" onChange={(e) => updateForm('firstName',e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails['lastName']} placeholder="Last Name" onChange={(e) => updateForm('lastName',e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails['email']} placeholder="Email" onChange={(e) => updateForm('email',e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails['phone']} placeholder="Phone Number (Optional)" onChange={(e) => updateForm('phone',e.target.value)}/>
                                </Col>
                                <Col sm={12} className="px-1">
                                    <textarea row={6} value={formDetails['message']} placeholder="Type your message here" onChange={(e) => updateForm('message',e.target.value)}/>
                                </Col>
                                {
                                    status.message &&
                                    <Col sm={12} className="px-2">
                                        <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                    </Col>
                                }
                                <Col sm={12}>
                                <button className="btn btn-primary" type="submit"><span>{buttonText}</span></button>
                                </Col>
                            </Row>
                        </form>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}