import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

const jsonAPI = 'http://localhost:3001/pizzas'


function App() {
  const [pieList, setPieList] = useState([])


  useEffect( () => {
    fetch(jsonAPI)
      .then( r => r.json() )
      .then( d => setPieList(d))

  }, [])


  return (
    <>
      <Header />
      <PizzaForm />
      <PizzaList pieList={pieList}/>
    </>
  );
}

export default App;
