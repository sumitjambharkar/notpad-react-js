import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import Notes from './componets/Notes';
import CreateNote from './componets/CreateNote';

const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
      <Route path="/" exact>
      <Home/>
      </Route>
      <Route path="/notes">
      <Notes/>
      </Route>
      <Route path="/create">
      <CreateNote/>
      </Route>
      
      </Router>
      
    </div>
  )
}

export default App