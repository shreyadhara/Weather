import React from 'react';
import './App.css';

class Weather extends React.Component{
    render(){
        // const style={
        //     textalign:screenLeft
        // }
        return(
            <div className="Wrapper">
                <p>
                {this.props.city && this.props.country &&<p className="Style" >Location:{this.props.country},{this.props.city}</p>}
               { this.props.temp &&<p className="Style">Temperature:{this.props.temp}</p>} 
               {this.props.humidity && <p className="Style">Humidity:{this.props.humidity}</p>}
               {this.props.description && <p className="Style">Description:{this.props.description}</p>}
               {this.props.error &&<p className="Style">{this.props.error}</p>}
               </p>
            </div>
        )
    }
}
export default Weather;