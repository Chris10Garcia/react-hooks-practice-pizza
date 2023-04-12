import React from "react";
import Pizza from "./Pizza";

function PizzaList({pieList}) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pieList.map(pie => {
            return (<Pizza key={pie.id} pie={pie} />)
          })
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
