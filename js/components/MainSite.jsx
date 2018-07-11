import React, {Component} from 'react';

import Template from './Template.jsx';

export default class MainSite extends Component {
    render() {
        return (
            <Template activeSite="home">
                <div className='container'>
                    <h2>Jestem główną stroną</h2>
                </div>
            </Template>
        )
    }
}