import React, {Component} from 'react';

import Template from './Template.jsx';
import Home from './MainSite/Home.jsx';
import Contact from './MainSite/Contact.jsx';
import Skills from './MainSite/Skills.jsx';

export default class MainSite extends Component {
    render() {
        return (
            <Template activeSite="home">
                <div className='container'>
                    <Home/>
                    <Skills/>
                    <Contact/>
                </div>
            </Template>
        )
    }
}