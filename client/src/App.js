import React from 'react';
import './App.scss';
import Navigation from './Navigation';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import Socials from './Socials';
import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import animation from './assets/tattoo.gif';

class App extends React.Component {
    render() {
      const Home = () => (
        <div className="parent">
          <div className='home'>
            <Row>
              <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} className="my-auto">
                <Container>
                <h1 className="greeting">hello.
                  <br /> 
                  i'm <span className="emphasis">rachel</span>, a designer, developer, and human based in los angeles, california.
                </h1>
                </Container>
              </Col>
              <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} className="my-auto">
                <img src={animation} id="tattoo" className="img-fluid" alt="animation"></img>
              </Col>
            </Row>
          </div>
          <Socials />
        </div>
      );

      const Main = () => (
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/work' component={Work}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/contact' component={Contact}></Route>
        </Switch>
      );

      return(
            <div className="App">
                <Navigation />
              <div className="mainBody">
                  <Main />
              </div>
            </div>
      );
    }
}

export default App;
