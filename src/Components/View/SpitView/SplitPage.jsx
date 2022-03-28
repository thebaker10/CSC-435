import React from 'react';
import "./SplitView.css"

export default class SplitPage extends React.Component {

     render() {	
return (
    <div className='splitView'>
        {this.props.children}
    </div>


);
    }	
}