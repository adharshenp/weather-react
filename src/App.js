import { useState } from 'react';
import './App.css';
import './bootstrap.min.css';

const api = {
  key: '2f3f65a6339ab1863eac5ae8f52d8e1e',
  baseUrl: 'http://api.openweathermap.org/data/2.5/'
}
function App() {
   
  const [find,setFind]= useState("")
  const [answr,setAnswr]=useState({})
  const refresh =()=>{
    window.location.reload()
  }
  const weathersearch =()=>{
    
    
    
     fetch(`${api.baseUrl}weather?q=${find}&&units=metric&appid=${api.key}`).then((res)=>res.json()).then((result)=>{
       console.log(result);
    
       setAnswr(result)
      
     })

  }

  return (
    <div className="App ">
      <header className="App-header">
        <h1 className='d-flex justify-content-center mt-5 fw-bold'>Weather updates ⛅🌦️</h1>
      </header>

      {/*input box  */}
      <div className='d-flex container w-50  mt-5'>
      
         <form className=' form-control bg-dark' >
          <input type="text" className='form-control text-center fw-bold d-flex ' placeholder='Enter City/Town' onChange={(e)=>setFind(e.target.value)}
         
          /> 
        
        
          <div className='d-flex justify-content-center mt-3'><button className='  btn btn-warning ' onClick={(e)=>weathersearch(e.preventDefault())}>Search</button>

          <button className='d-flex  btn btn-danger ms-3 ' onClick={refresh}>Refresh</button>
          
          </div>

               {/* Location */}

               {typeof answr.main !=="undefined" ? (
<div>

<p className='d-flex justify-content-center mt-3 fs-3'>{answr.name},{answr.sys.country}</p>

{/* temp */}

<p className='d-flex justify-content-center mt-3 fs-1'>{answr.main.temp}℃</p>

{/* cndtn */}
<p className='d-flex justify-content-center  fs-4'>{answr.weather[0].main}</p>

<p className='d-flex justify-content-center  fs-4'>({answr.weather[0].description})</p>

<p className='d-flex justify-content-center  fs-4'>{answr.wind.speed} km/h💨</p>


<p className='d-flex justify-content-center  fs-4'>{answr.main.humidity}%💧</p>



</div>
               ) : (

             ""
               
              )}

              
                      
          
         </form>

        
        
      </div>
      
        

      </div>
    
  );
}

export default App;
