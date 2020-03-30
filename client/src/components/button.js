import React, { Component} from 'react';
import './../App.css';


class Button extends Component {

    render (){
        return (
        <button id={ this.props.id } class={'button ' + this.props.class } name={ this.props.name }>
            { this.props.innerhtml }
        </button>
    )
    }
    
}
export default Button;