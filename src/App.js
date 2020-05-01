import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Input from './Input';
import Weather from './Weather';



const API_KEY="f3cdc6d97bc5ed5f80a011b0bcc377f0";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      temp:"",
      city:"",
      country:"",
      humidity:"",
      description:"",
      error:""
    }
  }
  getWeather=async(e)=>{
    e.preventDefault();
    const city=e.target.elements.City.value;
    const country=e.target.elements.Country.value;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    .then(res=>{
     console.log(res.data);
      this.setState({
        temp:res.data.main.temp,
        city:res.data.name,
        country:res.data.sys.country,
        humidity:res.data.main.humidity,
        description:res.data.weather[0].description
      })
  }).catch(error=>{
        console.log(error);
        this.setState({
          error:"Please Enter a Value"
        })
      })
      }

  render(){
    return(
      <div className="App">
      
        
        <Input getWeather={this.getWeather}/>
        
        <Weather 
        temp={this.state.temp}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        />
      </div>
    )
  }
}
export default App;
