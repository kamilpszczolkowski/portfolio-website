import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

export default class Header extends Component {

    skillsCLick = () => {
        this.props.scrollFunc(680);
    };

    contactClick = () => {
        this.props.scrollFunc(1300);
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
                                <Link to='/' onClick={this.contactClick}>EDUCATION</Link>
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
