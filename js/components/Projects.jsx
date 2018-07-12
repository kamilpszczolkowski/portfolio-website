import React, {Component} from 'react';

import Template from './Template.jsx';

export default class Projects extends Component {
    render() {
        return (
            <Template activeSite="projects" scrollFunc={this.props.func}>
                <div className='container'>
                    <h2>Jestem stroną z projektami</h2>
                </div>
            </Template>
        )
    }
}