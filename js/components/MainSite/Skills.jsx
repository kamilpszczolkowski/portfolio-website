import React, {Component} from 'react';

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skillDesc: 'Hover over technology icon'
        }
    }

    changeSkillDesc = text => {
        this.setState({
            skillDesc: text
        });
    };


    render() {
        return (
            <section className='skills'>
                <h2>SKILLS</h2>
                <p id='skillsDesc'>
                    I’m constantly developing my skills as front-end designer. Below I listed technologies which I use
                    frequently.
                </p>
                <article className='skillsItems'>
                    <img src='images/html.png' alt='html'
                         onMouseOver={() => this.changeSkillDesc('HTML5 - site structure with newest features of HTML5 standard')}
                        onMouseLeave={() => this.changeSkillDesc('')}/>
                    <img src='images/css.png' alt='css'
                         onMouseOver={() => this.changeSkillDesc('CSS3 - usage of cascading styles sheets allowing for a better' +
                             'site appearance control with newest features of CSS3 standard')}
                         onMouseLeave={() => this.changeSkillDesc('')}/>
                    <img src='images/js.png' alt='js'
                         onMouseOver={() => this.changeSkillDesc('JavaScript - programming')}
                         onMouseLeave={() => this.changeSkillDesc('')}/>
                    <img src='images/react.png' alt='reactjs'/>
                    <img src='images/webpack.png' alt='webpack'/>
                    <img src='images/sass.png' alt='sass'/>
                    <img src='images/jQuery.png' alt='jquery'/>
                </article>
                <p id='specificSkill'>
                    {this.state.skillDesc}
                </p>
            </section>
        )
    }
}