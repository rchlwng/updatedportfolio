import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import animation from './assets/me.gif';
import resume from './assets/resumerachelwang.pdf';

const About = () => (
  <div className="parent">
  <div className='about'>
      <h1 className="greeting">
          who is rachel wang?
      </h1>
    <Row id="aboutBody">
      <Col sm={5} id="image">
        <img src={animation} id="me" className="img-fluid float-left" alt="animation"></img>
      </Col>
      <Col sm={7} id="bio">
        <h4 className="text-left">
          a <span className="emphasis">creative human</span> (she / her) raised in charlottesville, virginia, currently living
           in los angeles, california. an interdisciplinary designer thriving at the intersection
            of art and technology.
        </h4>
        <Row className="aboutRow">
          <Col sm={8}>
            <h2 className="vertical">things that i enjoy</h2>
            <h5 className="myList font-weight-bold">(not an exhaustive list)</h5>
            <ul className="myList">
              <li>looking at art</li>
              <li><a href="#"
               target="_blank" rel="noopener noreferrer"><span className="link">creating art</span></a></li>
              <li>eyeliner</li>
              <li>caffeine</li> 
              <li><a href="https://open.spotify.com/user/1211390516?si=Jd7magNQRSaEJBnc7OmBQg"
               target="_blank" rel="noopener noreferrer"><span className="link">spotify playlists</span></a></li>
              <li><a href="https://stemtothefuture.org"
               target="_blank" rel="noopener noreferrer"><span className="link">teaching</span></a></li>
              <li>fashion and style</li>
              <li>logic puzzles</li>
              <li>running in the rain</li>
            </ul>
          </Col>
          <Col sm={4}>
           <a href={resume} target="_blank" rel="noopener noreferrer"><h2 id="resume" className="vertical"><span className="link">me, on paper</span></h2></a>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
</div>
);

export default About;