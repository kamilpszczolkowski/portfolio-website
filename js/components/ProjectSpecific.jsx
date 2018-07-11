import React, {Component} from 'react';

import Template from './Template.jsx';

export default class ProjectSpecific extends Component {
    render() {
        return (
            <Template activeSite="projects">
                <h2>Jestem konkretnym projektem o id: {this.props.match.params.id}</h2>
            </Template>
        )
    }
}