import React, {Component} from 'react';

import Header from './Template/Header.jsx';
import Footer from './Template/Footer.jsx';

export default class Template extends Component {
    render() {
        return (
            <div>
                <Header/>
                <main>
                    <div>
                        {this.props.children}
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}
