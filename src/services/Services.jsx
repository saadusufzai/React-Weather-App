import { useEffect, useState } from "react";

const Services = ({city, search}) => {

    let [data, setData] = useState()
 
  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fb1064e9ddd60a320fd55dd15aecb9ab`
    )
    .then((response)=> response.json() )
    .then((data)=> {
        setData(data)
    }) 
  },[search]);

  console.log(data)

  if(data){
  var { temp,  feels_like } = data.main
  var { description, icon } = data.weather[0]; // array method
}
  var iconLink = `http://openweathermap.org/img/w/${icon}.png`   

  return (
    <div className='box' >
      <h1>Weather Data</h1>
      <h2>City : {city} </h2>
      <ul>
        <li>Temp: {temp}</li>
        <li>Feels Like: {feels_like}</li>
        <img src={iconLink} />
        <li>{description}</li>
      </ul>
    </div>
    );
};

export default Services;
