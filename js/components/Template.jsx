import React, {Component} from 'react';

import Header from './Template/Header.jsx';
import Footer from './Template/Footer.jsx';

export default class Template extends Component {
    constructor(props){
        super(props);
        this.state = {
            footerAttached: true
        }
    }

    checkIfFooterAttached = () => {  //Chceck if the site is longer than viewport - if not, footer is attached to the end of the page
        let headerElement = document.getElementsByTagName('header')[0];
        let mainElement = document.getElementsByTagName('main')[0];
        let footer = document.getElementsByTagName('footer')[0];
        let allHeight = headerElement.offsetHeight + mainElement.offsetHeight + footer.offsetHeight;
        return allHeight <= window.innerHeight;
    };

    componentDidMount() {
        this.setState({
            footerAttached: this.checkIfFooterAttached()
        });
        window.addEventListener("resize", () => { //Function needs to be called on resize too
            let newCheck = this.checkIfFooterAttached();
            if (newCheck !== this.state.footerAttached){
                this.setState({
                    footerAttached: newCheck
                })
            }
        });
    }

    render() {
        return (
            <div>
                <Header activeSite={this.props.activeSite}  scrollFunc={this.props.scrollFunc}/>
                <main>
                    {this.props.children}
                </main>
                <Footer attached={this.state.footerAttached}/>
            </div>
        )
    }
}
