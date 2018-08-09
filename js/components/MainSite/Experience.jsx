import React, {Component} from 'react';
import EducationTree from './Experience/EducationTree.jsx';

export default class Experience extends Component {
    render(){
        return (
            <section className='experience'>
                <h2 className="main_section_title">EDUCATION AND EXPERIENCE</h2>
                <EducationTree/>
            </section>
        )
    }
}