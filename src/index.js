import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Weclome to JSX</h1>, document.getElementById("root"));

// ReactDOM.render(
//   React.createElement("h1", null, "Welcome to JSX"),
//   document.getElementById("root")
// );

var h1 = document.createElement("h1");
h1.innerHTML = "Welcome to JSX 2";
document.getElementById("root").appendChild(h1);
