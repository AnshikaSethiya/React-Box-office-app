import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from "./Pages/Home";
import Starred from "./Pages/Starred"
import Show from './Pages/Show';
import { ThemeProvider } from 'styled-components'

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};


function App() {
  return(
    <ThemeProvider theme={theme}>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>

    <Route exact path="/Starred">
      <Starred />
    </Route>

    <Route exact path="/show/:id">
      <Show/>
    </Route>

    <Route>
      <div>Page Not Found!!</div>
    </Route>
    </Switch>
    </ThemeProvider>

  );
}

export default App;
