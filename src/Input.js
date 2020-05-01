import React from 'react';

class Input extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="Country" placeholder="Country.."/>
                <input type="text" name="City" placeholder="City.."/>
                <button>GetWeather</button>
            </form>
        )
    }
}
export default Input;