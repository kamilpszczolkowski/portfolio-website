import React, {Component} from 'react';

import Template from './Template.jsx';

export default class Graphics extends Component {
    render() {
        return (
            <Template activeSite="graphics" scrollFunc={this.props.func}>
                <div className='container'>
                    <h2>Jestem stroną z grafiką</h2>
                </div>
            </Template>
        )
    }
}