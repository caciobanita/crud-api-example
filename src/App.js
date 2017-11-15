import React from "react";
import AppRedux from "./reduxExample/App";
import AppMobX from "./mobxExample/App";

const App = () => (
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <div>
      <h1>Example with Redux</h1>
      <AppRedux />
    </div>
    <div>
      <h1>Example with MobX</h1>
      <AppMobX />
    </div>
  </div>
);

export default App;
