import "./App.css";
import Services from "./services/Services";
import { useState } from "react";

function App() {

  let [city, setCity] = useState('Lahore')
  let [search, setSearch] = useState(false)
  return (
    <div className="app">
     <h1 style={{color:'white', backgroundColor:'blue'}}  >MY Weather App</h1>
      <br/>
      <input type="text" placeholder={city} onChange={(e)=>setCity(e.target.value)} />
      <button onClick={()=>setSearch(!search)} >Search</button>


      <Services city={city} search={search} />

    </div>
  );
}

export default App;
