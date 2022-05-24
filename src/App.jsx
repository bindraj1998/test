import './App.css';
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Restorents from './components/Restorents';
import info from "./data/useinfo.json"
import offers from './data/offers.json'
 import restaurents from "./data/restaurants.json"
import { useState } from 'react';

const filters={
  1:"Cost High to Lost",
 2:"Cost Lost to High",
 3:" Ratings",
 4:"Delivery Time",
 5:"Relevance" 
}


function App() {

  const [filterby ,setFilterby]=useState("")
const [data ,setdata]=useState(restaurents)
const updateFilter=(newFilter)=>{
  console.log(newFilter)
  switch(newFilter){
      case"1":{
          setFilterby(1);
          data.sort((a, b)=>b.costfortwo-a.costfortwo);
          setdata([...data]);
           break
        }
        case"2":{
          setFilterby(2);
          
          data.sort((a, b)=>a.costfortwo-b.costfortwo);
          setdata([...data]);
           break
        }
        default:{setdata(restaurents)
        break
        }
  }
}
  return (
    <div>
      <Navbar {...info.location}/>
      <Offers offers={offers}/>
      <Filters  filters={filters} updateFilter={updateFilter} currentfilterdby={filterby}/>
      <Restorents restaurents={data}/>
      {/* restorents me {} ke ander restorent likhe ager low to igh high to low nhi kar ha hai*/}
    </div>
  );
}

export default App;
