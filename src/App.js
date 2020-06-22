import React from 'react';

import './App.css';
import ListPost from './components/ListPost/ListPost';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <ListPost />
      <Switch>
        <Route path= "Listpost/:id=1"> </Route>
        <Route path= "Listpost/:id=2"> </Route>
        <Route path= "Listpost/:id=3"> </Route>
        <Route path= "Listpost/:id=4"> </Route>
        <Route path= "Listpost/:id=5"> </Route>
        <Route path= "Listpost/:id=6"> </Route>
        <Route path= "Listpost/:id=7"> </Route>
        <Route path= "Listpost/:id=8"> </Route>
        <Route path= "Listpost/:id=9"> </Route>
        <Route path= "Listpost/:id=10"> </Route>
        <Route path= "Listpost/:id=11"> </Route>
        <Route path= "Listpost/:id=12"> </Route>
      </Switch>
    </div>
  );
}

export default App;
