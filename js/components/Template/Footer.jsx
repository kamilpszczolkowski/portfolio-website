import React, {Component} from 'react';

export default class Footer extends Component {
    render(){
        return (
            <footer className={this.props.attached === true ? 'attached' : ''}>
                <div className='container'>
                    Footer
                </div>
            </footer>
        )
    }
}
