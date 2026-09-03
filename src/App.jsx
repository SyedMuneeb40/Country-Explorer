import { useEffect, useState } from 'react'
import SearchPg from './component/SearchPg'
import CountryCard from './component/CountryCard'
import './App.css'

function App() {

  const [country , setCountry] = useState(null);
  const [error , setError] = useState("");

  let fetchCountry = async (name) => {
    try{
    let response = await fetch(`https://api.restcountries.com/countries/v5?q=`+name,
      { headers : { "Authorization" : "Bearer rc_live_35733c5db1f64ee2b491c5388951e153"}}
    )

    if (!response.ok) {
      throw new Error("API Error");
    }

    let data = await response.json();
    setCountry(data);
    }catch(err){
      setError(err)
      setCountry(null);
    }
  };

  useEffect(()=>{
    fetchCountry("Pakistan")
  },[]);

  return (
    <div className="appDiv">
      
      <SearchPg Fetch = {fetchCountry}/>
      {error && <h1>Link is Broken Try Later</h1>}
      {!error && <CountryCard Country={country} />}
    </div>
  )
}

export default App
