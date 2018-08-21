import React, {Component} from 'react';

export default class EducationTree extends Component {
    constructor(props){
        super(props);
        this.state = {
            showTree: false,
            showBullet1: false,
            showBullet2: false,
            showBullet3: false,
            showBullet4: false
        }
    }

    componentDidMount(){
        let self = this;
        window.addEventListener("scroll", function(){
            let doc = document.documentElement;
            let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
            let skillsSectionPos = document.getElementById("education_tree").offsetTop;
            if((skillsSectionPos - (top + window.innerHeight/3) < 100) && self.state.showTree === false ){
                self.setState({
                    showTree: true
                }, function(){
                    let bullet1Show = setTimeout(function(){
                        self.setState({
                            showBullet1: true
                        })
                    }, 1000);
                    let bullet2Show = setTimeout(function(){
                        self.setState({
                            showBullet2: true
                        })
                    }, 1150);
                    let bullet3Show = setTimeout(function(){
                        self.setState({
                            showBullet3: true
                        })
                    }, 1300);
                    let bullet4Show = setTimeout(function(){
                        self.setState({
                            showBullet4: true
                        })
                    }, 1450);
                });
            }
        });
    }

    render() {
        return (
            <article id="education_tree">
                <div className={this.state.showTree? "vertical_line show" : "vertical_line"}></div>
                <div className={this.state.showBullet1 ?
                    "education_dot dot_education show" : "education_dot dot_education"}></div>
                <div className={this.state.showBullet2 ?
                    "education_dot dot_internship show" : "education_dot dot_internship"}></div>
                <div className={this.state.showBullet3 ?
                    "education_dot dot_work show" : "education_dot dot_work"}></div>
                <div className={this.state.showBullet4 ?
                    "education_dot dot_course show" : "education_dot dot_course"}></div>
                <div className={this.state.showTree ? "education_triangle show" : "education_triangle"}></div>
                <span className={this.state.showBullet1 ?
                    "education_date dot_education show" : "education_date dot_education"}>2010.11 / 2015.11</span>
                <span className={this.state.showBullet2 ?
                    "education_date dot_internship show" : "education_date dot_internship"}>2016.02 - 2016.05</span>
                <span className={this.state.showBullet3 ?
                "education_date dot_work show" : "education_date dot_work"}>2016.05 - 2018.05</span>
                <span className={this.state.showBullet4 ?
                    "education_date dot_course show" : "education_date dot_course"}>2018.05 - 2018.06</span>
                <div className={this.state.showBullet1 ?
                    "education_desc dot_education show" : "education_desc dot_education"}>
                    <span className="education_place">Silesian University of Technology</span>
                    <span className="education_title">Automatic Controls and Robotics</span>
                    <span className="education_details">Master's degree</span>
                </div>
                <div className={this.state.showBullet2 ?
                    "education_desc dot_internship show" : "education_desc dot_internship"}>
                    <span className="education_place">General Motors Manufacturing Poland</span>
                    <span className="education_title">Junior Engineer Internship</span>
                    <span className="education_details">Industrial controllers programming, designing and developing
                        visualizations for HMI panels. Programming self
                        driving vehicles (AGV) with maintenance.</span>
                </div>
                <div className={this.state.showBullet3 ?
                    "education_desc dot_work show" : "education_desc dot_work"}>
                    <span className="education_place">SimTec s.p. z o.o.</span>
                    <span className="education_title">Control Systems Programmer</span>
                    <span className="education_details">Industrial controllers programming (PLC), designing and
                        developing visualizations for industry operators. Usage of programming technologies:
                        C/C++, VBA, MySQL, LAD/STL.</span>
                </div>
                <div className={this.state.showBullet4 ?
                    "education_desc dot_course show" : "education_desc dot_course"}>
                    <span className="education_place">CodersLab</span>
                    <span className="education_title">JavaScript Developer: React</span>
                    <span className="education_details">Programming course with certificate – confirmation of acquired
                        IT skills: HTML, CSS, JavaScript, JQuery, ECMAScript 6, REACT, Gulp, Sass, RWD, Git..</span>
                </div>
            </article>
        )
    }
}