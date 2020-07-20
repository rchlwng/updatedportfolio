import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import instagram from './assets/instagram.png';
import linkedin from './assets/linkedin.png';
import dribbble from './assets/dribbble.png';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }

  render() {
    return <div className='contact w-100'>
            <Row className="text-left">
              <Col sm={4}>
                <Container className="mb-5">
                <h3 className="contactTitle">reach out</h3>
                <a href="mailto:wangrach@usc.edu" target="_blank" rel="noopener noreferrer"><p><span className="link">wangrach@usc.edu</span></p></a>
                </Container>
                <Container className="mt-5">
                <h3 className="contactTitle">follow me</h3>
                <Container className="w-25 float-left p-0">
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
                </Container>
              </Col>
              <Col sm={8} className="commission">
                <Container>
                <h3 className="contactTitle">commission request?</h3>
                <div>
                  <form id="mailform" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <input placeholder="your name" type="text" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                        <input placeholder="your email" type="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                        <textarea placeholder="commission details" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    <button className="mt-3" type="submit"><span className="link">send</span></button>
                    </form>
                </div>
                </Container>
              </Col>
            </Row>
          </div>;
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }
  
  onEmailChange(event) {
    this.setState({email: event.target.value})
  }
  
  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

}

export default Contact;