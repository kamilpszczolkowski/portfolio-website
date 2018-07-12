import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';

import MainSite from './components/MainSite.jsx';
import Projects from './components/Projects.jsx';
import Graphics from './components/Graphics.jsx';
import ProjectSpecific from './components/ProjectSpecific.jsx';

import styles from '../scss/style.scss';

class App extends Component {

    mainSiteScroll = whereToScroll => {
        this.lateScroll = setTimeout(() => {
            window.scrollTo({
                "behavior": "smooth",
                "left": 0,
                "top": whereToScroll
            })
        }, 300);
    };

    componentWillUnmount() {
        clearTimeout(this.lateScroll)
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Route exact path='/' render={(props) => <MainSite {...props} func={this.mainSiteScroll}/>}/>
                    <Route exact path='/projects'
                           render={(props) => <Projects {...props} func={this.mainSiteScroll}/>}/>
                    <Route path='/projects/:id'
                           render={(props) => <ProjectSpecific {...props} func={this.mainSiteScroll}/>}/>
                    <Route path='/graphics' render={(props) => <Graphics {...props} func={this.mainSiteScroll}/>}/>
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