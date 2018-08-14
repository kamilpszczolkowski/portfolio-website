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
                            <ul className='projectList'>
                                <li>name of event</li>
                                <li>place - name and location on the map</li>
                                <li>start and end date</li>
                                <li>full and short description</li>
                                <li>type of event</li>
                            </ul>
                        </p>
                        <p>
                            Users can browse through event by two ways:
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
                        </p>
                        <p>
                            When user is on the specific event site, there is option to edit event - all data can be
                            rewritten. The second option is to delete event.
                        </p>
                        <p>
                            Usage of Realtime Firebase database allowed to store data in JSON format on the server. Google
                            Map/Places api's allowed to mark places of the events on the map.
                        </p>
                    </SingleProject>
                </div>
            </Template>
        )
    }
}