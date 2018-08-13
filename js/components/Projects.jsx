import React, {Component} from 'react';

import SingleProject from './Projects/SingleProject.jsx';
import Template from './Template.jsx';

export default class Projects extends Component {
    render() {
        return (
            <Template activeSite="projects" scrollFunc={this.props.func}>
                <div className='container'>
                    <SingleProject
                        title="Testowy projekt"
                        technologies='HTML, CSS, JavaScript'
                        projectLink='https://kamilpszczolkowski.github.io/events_manager/#/'
                        gitHubLink='https://github.com/kamilpszczolkowski/events_manager'
                        picture1='../../images/projects/1/page1.png'
                        picture2='../../images/projects/1/page2.png'
                        picture3='../../images/projects/1/page3.png'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci
                        alias beatae cumque earum eveniet explicabo inventore ipsum itaque mollitia
                        nulla, odit officia placeat praesentium quam quibusdam quis velit voluptatibus!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci
                        alias beatae cumque earum eveniet explicabo inventore ipsum itaque mollitia
                        nulla, odit officia placeat praesentium quam quibusdam quis velit voluptatibus!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci
                        alias beatae cumque earum eveniet explicabo inventore ipsum itaque mollitia
                        nulla, odit officia placeat praesentium quam quibusdam quis velit voluptatibus!
                    </SingleProject>
                </div>
            </Template>
        )
    }
}