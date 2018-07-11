import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className={this.props.attached === true ? 'attached' : ''}>
                <div className='container'>
                    <div className='footer-left'>
                        <span>Kamil Pszczółkowski - portfolio</span>
                        <br />
                        <span>Front-End developper</span>
                    </div>
                    <div className='footer-right'>
                        <div className='linked-in'></div>
                        <div className='gmail'></div>
                        <div className='github'></div>
                    </div>
                </div>
            </footer>
        )
    }
}
