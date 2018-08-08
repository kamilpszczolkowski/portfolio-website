import React, {Component} from 'react';

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skillName: 'HTML5',
            skillDesc: 'Hover over technology icon'
        }
    }

    changeSkillDesc = (item, text) => {
        this.setState({
            skillName: item,
            skillDesc: text
        });
    };


    render() {
        return (
            <section className='skills'>
                <h2>SKILLS</h2>
                <p id='skillsDesc'>
                    I’m constantly developing my skills as front-end designer. Below you can see technologies which I use
                    frequently.
                </p>
                <article className='skillsItems'>
                    <img src='images/html.png' alt='html'
                         onMouseOver={() => this.changeSkillDesc('HTML5', 'Markup language for site structuring')}
                        onMouseLeave={() => this.changeSkillDesc('','')}/>
                    <img src='images/css.png' alt='css'
                         onMouseOver={() => this.changeSkillDesc('CSS3', 'Style sheet language for describing the presentation of a site')}
                         onMouseLeave={() => this.changeSkillDesc('','')}/>
                    <img src='images/js.png' alt='js'
                         onMouseOver={() => this.changeSkillDesc('JavaScript', 'High-level programming language, core technology of the World Wide Web')}
                         onMouseLeave={() => this.changeSkillDesc('','')}/>
                    <img src='images/react.png' alt='reactjs'
                         onMouseOver={() => this.changeSkillDesc('React.js', 'JavaScript library for building user interfaces in web sites and mobile applications')}
                         onMouseLeave={() => this.changeSkillDesc('','')}/>
                    <img src='images/webpack.png' alt='webpack'
                         onMouseOver={() => this.changeSkillDesc('Webpack', 'Open-source JavaScript module bundler')}
                         onMouseLeave={() => this.changeSkillDesc('','')}/>
                    <img src='images/sass.png' alt='sass'
                         onMouseOver={() => this.changeSkillDesc('Sass', 'CSS extension language')}
                         onMouseLeave={() => this.changeSkillDesc('','')}/>
                    <img src='images/jQuery.png' alt='jquery'
                         onMouseOver={() => this.changeSkillDesc('jQuery', 'Fast, small and feature-rich JavaScript library')}
                         onMouseLeave={() => this.changeSkillDesc('','')}/>
                </article>
                <p id='specificSkill'>
                    <span>
                        {this.state.skillName}
                    </span>
                    {this.state.skillDesc}
                </p>
            </section>
        )
    }
}