import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';

import MainSite from './components/MainSite.jsx';
import Projects from './components/Projects.jsx';
import Graphics from './components/Graphics.jsx';
import ProjectSpecific from './components/ProjectSpecific.jsx';

import styles from '../scss/style.scss';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Route exact path='/' component={MainSite}/>
                    <Route exact path='/projects' component={Projects}/>
                    <Route path='/projects/:id' component={ProjectSpecific}/>
                    <Route path='/graphics' component={Graphics}/>
                </div>
            </HashRouter>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
});