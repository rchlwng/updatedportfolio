import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bhomfs from './assets/work/bhomfs.png';
import emptycals from './assets/work/emptycals.png';
import eyeshadow from './assets/work/eyeshadow.png';
import ironman from './assets/work/iron man.png';
import lightheadedone from './assets/work/lightheaded 1.png';
import lightheadedtwo from './assets/work/lightheaded vegas.png';
import saint from './assets/work/saint.png';
import sttf from './assets/work/sttf.png';
import scope from './assets/work/scope.png';
import bodos from './assets/work/bodos.png';
import FadeInSection from './FadeInSection';

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emphasis: 'all',
        };
    }

    preloadImage(url) {
        const img = new Image();
        img.src = url;
    }

    renderSub() {
        const active = this.state.emphasis;
        const allEmphasised = active.localeCompare('all') === 0;
        this.preloadImage(bhomfs);
        this.preloadImage(emptycals);
        this.preloadImage(bodos);
        this.preloadImage(ironman);
        this.preloadImage(lightheadedone);
        this.preloadImage(lightheadedtwo);
        this.preloadImage(saint);
        this.preloadImage(sttf);
        this.preloadImage(scope);

        return <div className="parent">
        <div className='work'>
        <Row>
            <Col md={6}>
            <h1 className="greeting">designed experiences through branding, print, interaction, and more.</h1>
            <Row className="flex-nowrap pt-3">
                <Col md={2}>
                    <button className="worklink"
                    onClick={() => this.setState({emphasis: 'all'})}>
                        <span className={(active.localeCompare('all') === 0 ? 'emphasis' : '')}>all</span>
                    </button>
                </Col>
                <Col md={2}>
                    <button className="worklink"
                    onClick={() => this.setState({emphasis: 'visual'})}>
                        <span className={(active.localeCompare('visual') === 0 ? 'emphasis' : '')}>visual</span>
                    </button>
                </Col>
                <Col md={3}>
                    <button className="worklink"
                    onClick={() => this.setState({emphasis: 'branding'})}>
                        <span className={(active.localeCompare('branding') === 0 ? 'emphasis' : '')}>branding</span>
                    </button>
                </Col>
                <Col md={2}>
                    <button className="worklink"
                    onClick={() => this.setState({emphasis: 'web'})}>
                        <span className={(active.localeCompare('web') === 0 ? 'emphasis' : '')}>web</span>
                    </button>
                </Col>
            </Row>
            </Col>
        </Row>
        </div>
        <div>
        <Row className="w-75 mx-auto workRow">
            <Col sm={6} className={((active.localeCompare('web') === 0 || allEmphasised || active.localeCompare('branding') === 0) ? '' : 'hide')}>
                <FadeInSection>
                    <a href="https://scopeusc.com"
                        target="_blank" rel="noopener noreferrer">
                    <img id="scope" src={scope} className="piece img-fluid" alt="scope"></img></a>
                </FadeInSection>
            </Col>
            <Col sm={6} className={((active.localeCompare('branding') === 0 || allEmphasised) ? '' : 'hide')}>
                <FadeInSection>
                    <img id="bhomfs" src={bhomfs} className="piece img-fluid" alt="bhomfs"></img>
                </FadeInSection>
            </Col>
            <Col sm={6} className={((active.localeCompare('visual') === 0 || allEmphasised) ? '' : 'hide')}>
                <FadeInSection>
                    <img id="ironman" src={ironman} className="piece img-fluid" alt="bhomfs"></img>
                </FadeInSection>
            </Col>
            <Col sm={6} className={((active.localeCompare('visual') === 0 || allEmphasised) ? '' : 'hide')}>
                <FadeInSection>
                    <img id="bodos" src={bodos} className="piece img-fluid" alt="bhomfs"></img>
                </FadeInSection>
            </Col>
            <Col sm={6} className={((active.localeCompare('visual') === 0 || allEmphasised) ? '' : 'hide')}>
                <FadeInSection>
                    <img id="lightheadedtwo" src={lightheadedtwo} className="piece img-fluid" alt="bhomfs"></img>
                </FadeInSection>
            </Col>
            <Col sm={6} className={((active.localeCompare('web') === 0 || allEmphasised) ? '' : 'hide')}>
                <FadeInSection>
                    <a href="https://stemtothefuture.org"
                    target="_blank" rel="noopener noreferrer"><img id="sttf" src={sttf} className="piece img-fluid" alt="bhomfs"></img></a>
                </FadeInSection>
            </Col>
            <Col sm={6} className={((active.localeCompare('visual') === 0 || allEmphasised) ? '' : 'hide')}>
                <FadeInSection>
                    <img id="emptycals" src={emptycals} className="piece img-fluid" alt="bhomfs"></img>
                </FadeInSection>
            </Col>
            <Col sm={6} className={((active.localeCompare('visual') === 0 || allEmphasised) ? '' : 'hide')}>
                <FadeInSection>
                    <img id="saint" src={saint} className="piece img-fluid" alt="bhomfs"></img>
                </FadeInSection>
            </Col>
            <Col sm={6} className={((active.localeCompare('visual') === 0 || allEmphasised) ? '' : 'hide')}>
                <FadeInSection>
                    <img id="lightheadedone" src={lightheadedone} className="piece img-fluid" alt="bhomfs"></img>
                </FadeInSection>
            </Col>
        </Row>
        </div>
        </div>;
    }

    render() {
        return this.renderSub();
    }
}

export default Work;