import React from "react";

function PizzaForm( {formData, setFormData, submitPizza}) {


  function handleOnChangeForm(e){
    let key, value

    if (e.target.value === "Vegetarian"){
      key = "vegetarian"
      value = true
    } else if (e.target.value === "Not Vegetarian"){
      key = "vegetarian"
      value = false
    } else {
      key = e.target.name
      value = e.target.value
    }

    setFormData({...formData, [key]:value})
  }

  return (
    <form onSubmit={submitPizza}>
      <div className="form-row">
        <div className="col-5">
          <input onChange = {handleOnChangeForm}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value = {formData["topping"]}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange = {handleOnChangeForm} value={formData["size"]}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check" >
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange = {handleOnChangeForm}
              checked = {formData["vegetarian"]}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange = {handleOnChangeForm}
              checked = {!formData["vegetarian"]}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
