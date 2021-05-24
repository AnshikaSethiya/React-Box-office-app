import { Switch, Route } from 'react-router-dom'
import Home from "./Pages/Home";
import Starred from "./Pages/Starred"

function App() {
  return(
  <div>
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>

    <Route exact path="/Starred">
      <Starred />
    </Route>
    </Switch>
  </div>
  );
}

export default App;
