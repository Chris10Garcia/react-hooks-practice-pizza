import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";
import { jsonAPI } from "./jsonAPI";

//next time make this a component / variable that's exportable

function App() {
  const [pieList, setPieList] = useState([])


  useEffect( () => {
    fetch(jsonAPI)
      .then( r => r.json() )
      .then( d => setPieList(d))

  }, [])

  const [formData, setFormData] = useState({
    id : "",
    topping: "",
    size: "Small",
    vegetarian: false,
  })

  function editPizza(id){
    const pizzaData = pieList.find(pie => pie.id === id)
    setFormData({...pizzaData})
  }

  function submitPizza(e){
    e.preventDefault()
    fetch(jsonAPI + "/" + formData.id,{
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(formData)
      }
    )
    .then( r => r.json())
    .then( data => {
        const updatedPieList = pieList.map(pizza => pizza.id === data.id ? data : pizza)
        setPieList(updatedPieList)
    })
  }

  return (
    <>
      <Header />
      <PizzaForm formData={formData} setFormData={setFormData} submitPizza={submitPizza}/>
      <PizzaList pieList={pieList} editPizza={editPizza}/>
    </>
  );
}

export default App;
