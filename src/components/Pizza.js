import React from "react";

function Pizza({pie, editPizza}) {
  const {id, topping, size, vegetarian} = pie


  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{String(vegetarian)}</td>
      <td>
        <button onClick = {() => editPizza(id)} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
