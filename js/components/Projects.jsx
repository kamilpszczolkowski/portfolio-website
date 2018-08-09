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
                        projectLink='https://www.google.pl/'
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