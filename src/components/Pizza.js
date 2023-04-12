import React from "react";

function Pizza({pie}) {
  const {id, topping, size, vegetarian} = pie
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{String(vegetarian)}</td>
      <td>
        <button type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
