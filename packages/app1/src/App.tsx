import React from "react";
import * as Remote from "app2/App";

export const App = () => {
  return (
    <div>
      Hello from app1
      <Remote.App greeting="Greeting from props" />
    </div>
  );
};
