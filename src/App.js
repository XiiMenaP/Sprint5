import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from "./pages/Login";

class App extends React.Component {

  render(){
    
    return(
      <Router>
        <Switch>
          <Route path="/" exact Component= {Login}/>
        </Switch>
      </Router>
     
    )
  }

}
export default App;
