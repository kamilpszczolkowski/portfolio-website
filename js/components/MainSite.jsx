import React, {Component} from 'react';

import Template from './Template.jsx';
import Home from './MainSite/Home.jsx';
import Contact from './MainSite/Contact.jsx';
import Skills from './MainSite/Skills.jsx';
import Experience from './MainSite/Experience.jsx';

export default class MainSite extends Component {

    render() {
        return (
            <Template activeSite="home" scrollFunc={this.props.func}>
                <div className='background'></div>
                <div className='container'>
                    <Home/>
                    <Skills/>
                    <Experience/>
                    <Contact/>
                </div>
            </Template>
        )
    }
}