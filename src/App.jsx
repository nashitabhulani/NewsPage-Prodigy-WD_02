import { useState } from "react"
import { Navbar } from "./Components/Navbar"
import { NewsBoard } from "./Components/NewsBoard"
import "./App.css"; 

export const App = () => {
  const [category,setCategory]= useState("general");
  return (
    <div>
    <Navbar setCategory={setCategory} />
    <div className="container">
      <NewsBoard category={category} />
      
    </div>
  </div>
  );
};

export default App