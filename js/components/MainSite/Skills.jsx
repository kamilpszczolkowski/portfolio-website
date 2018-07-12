import React, {Component} from 'react';

export default class Skills extends Component {
    render(){
        return (
            <section className='skills'>
                <h2>SKILLS</h2>
                <article className='skillsItems'>
                    <img src='images/html.png' alt='html'/>
                    <img src='images/css.png' alt='css'/>
                    <img src='images/js.png' alt='js'/>
                    <img src='images/react.png' alt='reactjs'/>
                    <img src='images/webpack.png' alt='webpack'/>
                    <img src='images/sass.png' alt='sass'/>
                    <img src='images/jQuery.png' alt='jquery'/>
                </article>
            </section>
        )
    }
}