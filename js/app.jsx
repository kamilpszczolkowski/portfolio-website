import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from '../scss/style.scss';

class App extends Component {
    render(){
        return <h1>My site</h1>
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
});