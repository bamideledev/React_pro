import Header from './samantaP/header';
import './index.css'
import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';


export default function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          { /*<Route path='/' exact>
            <About/>
  </Route>*/}
        </Switch>
      </Router>
    </div>
  )
}




