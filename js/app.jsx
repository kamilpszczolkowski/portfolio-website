import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import MainSite from './components/MainSite.jsx';

import styles from '../scss/style.scss';

class App extends Component {
    render() {
        return (
            <div>
                <MainSite/>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
});