import React, {Component} from 'react';

export default class SingleProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picturePath: null
        }
    }

    showPic = pictureUrl => {
        this.setState({
            picturePath: pictureUrl
        })
    };

    hidepic = () => {
        this.setState({
            picturePath: null
        })
    };

    showGalleryFunc = () => {
        if (this.state.picturePath !== null) {
            return (
                <section className='pictureGallery' onClick={() => this.hidepic()}>
                    <img src={this.state.picturePath} alt='imageFullScreen'/>
                </section>
            )
        }
    };

    render() {
        const {
            title,
            children,
            technologies,
            gitHubLink,
            projectLink,
            picture1,
            picture2,
            picture3
        } = this.props;

        return (
            <article>
                <h2 className='main_section_title'>{title}</h2>
                <section className='project_data'>
                    <div className='project_description'>
                        {children}
                        <p className='project_technologies'>Used technologies:</p>
                        <p>{technologies}</p>
                    </div>
                    <div className='project_buttons'>
                        <a href={projectLink} target='_blank'>
                            <div className="projectButtons">
                                Open project
                            </div>
                        </a>
                        <a href={gitHubLink} target='_blank'>
                            <div className="projectButtons">
                                GitHub page
                            </div>
                        </a>
                    </div>
                    <div className='project_photos'>
                        {picture1 !== undefined &&
                        <img src={picture1} alt='Image1' onClick={() => this.showPic(picture1)}/>}
                        {picture2 !== undefined &&
                        <img src={picture2} alt='Image2' onClick={() => this.showPic(picture2)}/>}
                        {picture3 !== undefined &&
                        <img src={picture3} alt='Image3' onClick={() => this.showPic(picture3)}/>}
                    </div>
                </section>
                {this.showGalleryFunc()}
            </article>
        )
    }
}