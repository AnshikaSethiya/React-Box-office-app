import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from "./Pages/Home";
import Starred from "./Pages/Starred"

function App() {
  return(
   
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>

    <Route exact path="/Starred">
      <Starred />
    </Route>

    <Route>
      <div>Page Not Found!!</div>
    </Route>
    </Switch>

  );
}

export default App;
