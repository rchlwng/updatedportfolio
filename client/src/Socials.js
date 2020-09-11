import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import instagram from './assets/instagram.png';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';

const Socials = () => (
    <Container className="socials">
      <Row className="flex-nowrap">
        <Col xs={4}>
            <a href='https://www.instagram.com/rachiebabyart/' target='_blank' rel='noopener noreferrer'>
            <img src={instagram} width="20" alt="instagram"></img>
            </a>
        </Col>
        <Col xs={4}>
            <a href='https://www.linkedin.com/in/rchlwang/' target='_blank' rel='noopener noreferrer'>
            <img src={linkedin} width="20" alt="linkedin"></img>
            </a>
        </Col>
        <Col xs={4}>
            <a href='https://github.com/rchlwng' target='_blank' rel='noopener noreferrer'>
            <img src={github} width="20" alt="github"></img>
            </a>
        </Col>
      </Row>
    </Container>
);

export default Socials;