import React, {Component} from 'react';

import SingleProject from './Projects/SingleProject.jsx';
import Template from './Template.jsx';

export default class Projects extends Component {
    render() {
        return (
            <Template activeSite="projects" scrollFunc={this.props.func}>
                <div className='container'>
                    <SingleProject
                        title="Events Manager"
                        technologies='JavaScript React, Sass, Google Firebase, Google Maps/Places API'
                        projectLink='https://kamilpszczolkowski.github.io/events_manager/#/'
                        gitHubLink='https://github.com/kamilpszczolkowski/events_manager'
                        picture1='../../images/projects/1/page1.png'
                        picture2='../../images/projects/1/page2.png'
                        picture3='../../images/projects/1/page3.png'
                    >
                        <p>
                            Application allowing users to browse through events in database and to manage them. Every
                            event has specific data stored, which includes:
                        </p>
                        <ul className='projectList'>
                            <li>name of event</li>
                            <li>place - name and location on the map</li>
                            <li>start and end date</li>
                            <li>full and short description</li>
                            <li>type of event</li>
                        </ul>
                        <p>
                            Users can browse through event by two ways:
                        </p>
                        <ul className='projectList'>
                            <li>
                                list of events, which can be sorted by name and date of events, filtered by the
                                search filed.
                            </li>
                            <li>
                                by the map - every event has marker on it. When user clicks on it, the popup with
                                event data is shown. It can also be clicked to redirect to the event full
                                description site.
                            </li>
                        </ul>
                        <p>
                            When user is on the specific event site, there is option to edit event - all data can be
                            rewritten. The second option is to delete event.
                        </p>
                        <p>
                            Usage of Realtime Firebase database allowed to store data in JSON format on the server.
                            Google
                            Map/Places api's allowed to mark places of the events on the map.
                        </p>
                    </SingleProject>
                    <SingleProject
                        title="Conway's Game of Life"
                        technologies='HTML, CSS, JavaScript'
                        projectLink='https://kamilpszczolkowski.github.io/Game-of-Life/'
                        gitHubLink='https://github.com/kamilpszczolkowski/Game-of-Life'
                        picture1='../../images/projects/2/screen.png'
                    >
                        <p>
                            Execution of Conway's Game of Life in JavaScript environment. is a cellular automation
                            created by John Horton Conway. It's a zero-player game - the effect of the game is
                            determined only by game initial state. On the beginning user sets, which cells are alive
                            and starts the animation. In iterations number of alive neighbours is calculated for every
                            cell and, basing on it - the cell dies or lives in next iteration.
                        </p>
                        <p>
                            Steps of algorithm:
                        </p>
                        <ul className="projectList">
                            <li>
                                user specifies the size of the board (number of gliders in X and Y dimensions),
                            </li>
                            <li>
                                the board is drawn by clicking the button "DRAW BOARD",
                            </li>
                            <li>
                                user clicks on cells which should be alive at the beginning (alive cells
                                becomes black after clicking),
                            </li>
                            <li>
                                user starts animation by clicking "START" button,
                            </li>
                            <li>
                                animation may be paused by using "PAUSE" button, user can change the state of game
                                and start it again.
                            </li>
                        </ul>
                        <p>
                            Purpouse of this application was to practice object oriented programming. For more
                            information
                            about the project head to the GitHub link.
                        </p>
                    </SingleProject>
                    <SingleProject
                        title="Mobile Calculator"
                        technologies='JavaScript, React-Native'
                        projectLink='https://snack.expo.io/@biigm/calc-mobile'
                        gitHubLink='https://github.com/kamilpszczolkowski/mobile-calc-reactNative'
                        picture1='../../images/projects/3/2.jpg'
                        picture2='../../images/projects/3/3.jpg'
                        dontClickOnPic={true}
                    >
                        <p>
                            Basic calculator application for mobile devices. Application can do simple calculations on
                            decimal numbers.

                        </p>
                        <p>
                            User can input numbers with defined keyboard. Numbers can have decimals and can be
                            separated by mathematics operations: +, -, /, X. User can change the sign of the first
                            number by pressing the +/- button.
                        </p>
                        <p>
                            Input data can be cleared (C), last symbol can be deleted also (DEL). To calculate the
                            equation user has to press button with symbol =. The result will appear instead of the
                            calculated equation - user can do more calculations with it.
                        </p>
                        <p>
                            Calculator validates the correct order of equations and desn't alow to input data in wrong order.
                        </p>
                    </SingleProject>
                    <SingleProject
                        title="NASA API jQuery"
                        technologies='JavaScript, jQuery, AJAX'
                        projectLink='https://kamilpszczolkowski.github.io/nasa-api-jquery/'
                        gitHubLink='https://github.com/kamilpszczolkowski/nasa-api-jquery'
                        picture1='../../images/projects/4/1.jpg'
                        picture2='../../images/projects/4/2.jpg'
                    >
                        <p>
                            Small application showcaisng NASA photos from NASA API with JQuery library.
                        </p>
                        <p>
                            Site welcomes user with "NASA API CHALLENGE" title and loads one random picture from
                            nasa featured section as background. If user doesn't scroll site, after 10 seconds page
                            will scroll down automatically to the gallery featuring photos from Mars.
                        </p>
                        <p>
                            Data is transferred by using jQuery AJAX functions. Few animations and features (like auto
                            scrolling) comes also from jQuery library.
                        </p>
                    </SingleProject>
                </div>
            </Template>
        )
    }
}