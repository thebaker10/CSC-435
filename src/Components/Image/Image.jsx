import React from 'react';
import "./Image.css"

export default class Image extends React.Component {

    render() {
        return (
            <div className='imageWrapper'><img className='image' src={this.props.src} alt="" /></div>
            

        );
    }
}