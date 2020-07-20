import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import instagram from './assets/instagram.png';
import linkedin from './assets/linkedin.png';
import dribbble from './assets/dribbble.png';

const Socials = () => (
    <Container className="socials">
      <Row className="flex-nowrap">
        <Col xs={4}>
            <a href='https://www.instagram.com/rachiebabyart/' rel='noopener'>
            <img src={instagram} width="20" alt="instagram"></img>
            </a>
        </Col>
        <Col xs={4}>
            <a href='https://www.linkedin.com/in/rchlwang/' rel='noopener'>
            <img src={linkedin} width="20" alt="linkedin"></img>
            </a>
        </Col>
        <Col xs={4}>
            <a href='https://dribbble.com/wngrch' rel='noopener'>
            <img src={dribbble} width="20" alt="dribbble"></img>
            </a>
        </Col>
      </Row>
    </Container>
);

export default Socials;