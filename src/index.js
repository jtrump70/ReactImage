import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ImageZoom from 'react-medium-image-zoom';

import ReactImageMagnify from 'react-image-magnify';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouse: true,
            touch: false
        };
        document.getElementById('body').addEventListener('touchstart', this.updatePage);
    }

    updatePage() {
        this.setState({
            mouse: false,
            touch: true
        });
        document.getElementById('body').removeEventListener('touchstart', () => { });
    }

    render() {
        return (
            <span>
                Touch detected: {this.state.touch ? 'true' : 'false'}<br />
                Mouse detected: {this.state.mouse ? 'true' : 'false'}
                <hr />
                <h1>Module: react-medium-image-zoom</h1>
                <ImageZoom
                    image={{
                        src: 'https://frontendmasters.com/assets/html5css3.png'
                    }}
                />
                <hr />
                <h2>Module: react-image-magnify</h2>
                <ReactImageMagnify {...{
                    smallImage: {
                        src: 'https://spectrum.imgix.net/communities/102b08e1-f26e-4cda-b252-03258776bc14/react.png.0.1901592707012414',
                        width: 240,
                        height: 240
                    },
                    largeImage: {
                        src: 'https://spectrum.imgix.net/communities/102b08e1-f26e-4cda-b252-03258776bc14/react.png.0.1901592707012414',
                        width: 480,
                        height: 480
                    }
                }} />
                <hr />
                <h3>A combination based on touch or mouse</h3>
                {this.state.mouse &&
                    <ReactImageMagnify {...{
                        smallImage: {
                            src: 'https://pbs.twimg.com/profile_images/827354992377860096/sUe4dG_L_400x400.jpg',
                            width: 240,
                            height: 240
                        },
                        largeImage: {
                            src: 'https://pbs.twimg.com/profile_images/827354992377860096/sUe4dG_L_400x400.jpg',
                            width: 480,
                            height: 480
                        }
                    }} />
                }
                {this.state.touch &&
                    <ImageZoom
                        image={{
                            src: 'https://pbs.twimg.com/profile_images/827354992377860096/sUe4dG_L_400x400.jpg'
                        }}
                    />
                }
            </span>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);