import React, {Component} from 'react';

export default class SingleProject extends Component {
    render() {
        return (
            <article>
                <h2 className='main_section_title'>{this.props.title}</h2>
                <section className='project_data'>
                    <div className='project_description'>
                        {this.props.children}
                        <p className='project_technologies'>Used technologies:</p>
                        <p>{this.props.technologies}</p>
                    </div>
                    <div className='project_buttons'>
                        <a href={this.props.projectLink}>
                            <div className="project_direct_link">
                               <span>Click to open the project</span>
                            </div>
                    </a>
                    </div>
                </section>
            </article>
        )
    }
}