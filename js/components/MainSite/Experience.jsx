import React, {Component} from 'react';
import EducationTree from './Experience/EducationTree.jsx';

export default class Experience extends Component {
    render() {
        return (
            <section className='experience'>
                <h2 className="main_section_title">EDUCATION AND EXPERIENCE</h2>
                <EducationTree/>
                <p className="moduleDesc">
                    My CV can be downloaded by clicking on link below. You can also visit my LinkedIn profile.
                </p>
                <div className="buttonsCV">
                    <a href="files/kamil_pszczolkowski_cv.pdf" target='_blank'>
                        <div className="downloadButton">
                            Curriculum Vitae
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/kamil-pszcz%C3%B3%C5%82kowski-9b9894166/" target='_blank'>
                        <div className="downloadButton">
                            Linked In
                        </div>
                    </a>
                </div>
                <p className="moduleDesc">
                    Source codes of my projects are published on GitHub.
                </p>
                <a href="https://github.com/kamilpszczolkowski" target='_blank'>
                    <div className="downloadButtonBig">
                        GitHub profile
                    </div>
                </a>
            </section>
        )
    }
}