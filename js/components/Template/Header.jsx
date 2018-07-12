import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

export default class Header extends Component {

    skillsCLick = () => {
        window.scrollTo({
            "behavior": "smooth",
            "left": 0,
            "top": 680
        })
    };

    contactClick = () => {
        window.scrollTo({
            "behavior": "smooth",
            "left": 0,
            "top": 1200
        })
    };

    render() {
        return (
            <header>
                <div className='container'>
                    <nav>
                        <ul>
                            <li className={this.props.activeSite === 'home' ? 'active' : ''}>
                                <Link to='/'>HOME</Link>
                            </li>
                            <li>
                                <Link to='/' onClick={this.skillsCLick}>SKILLS</Link>
                            </li>
                            <li>
                                <Link to='/' onClick={this.contactClick}>CONTACT</Link>
                            </li>
                            <li className={this.props.activeSite === 'projects' ? 'active' : ''}>
                                <Link to='/projects'>PROJECTS</Link>
                            </li>
                            <li className={this.props.activeSite === 'graphics' ? 'active' : ''}>
                                <Link to='/graphics'>GRAPHICS</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
