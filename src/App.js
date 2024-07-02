import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const[catFact,setCatFact]=useState("")
  const fetchData=async()=>{
  const {data}=await axios.get("https://catfact.ninja/fact")
    setCatFact(data.fact)
    }
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div className="h-screen bg-sky-800 gap-10 flex flex-col justify-center items-center">
      <div className="">
      <button className="bg-gray-700 text-white px-2 py-1 "onClick={fetchData}>Click</button>
      </div>
      <div >
      <h1 className=" text-white">{catFact}</h1>
      </div>
    </div>
    
  );
}

export default App;
