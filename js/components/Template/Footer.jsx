import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className={this.props.attached === true ? 'attached' : ''}>
                <div className='container'>
                    <div className='footer-left'>
                        <span>Kamil Pszczółkowski - portfolio</span>
                        <br/>
                        <span>Front-End developper</span>
                    </div>
                    <div className='footer-right'>
                        <a href='https://www.linkedin.com/in/kamil-pszcz%C3%B3%C5%82kowski-9b9894166/'>
                            <div className='linked-in'></div>
                        </a>
                        <a href="mailto:pszczolkowski.kamil@gmail.com">
                            <div className='gmail'></div>
                        </a>
                        <a href="https://github.com/kamilpszczolkowski">
                            <div className='github'></div>
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}
