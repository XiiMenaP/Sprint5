import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from "./pages/Login";
import Home from "./pages/Home";
import PerfilesAdm from "./pages/PerfilesAdm";
import PerfilCrear from "./pages/PerfilCrear";
import PerfilEditar from "./pages/PerfilEditar";

class App extends React.Component {

  render(){

    return(
      <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/perfiles" exact component={PerfilesAdm}/>
          <Route path="/perfiles-crear" exact component={PerfilCrear}/>
          <Route path="/perfiles-editar/:perfilId" exact component={PerfilEditar}/>
          

        </Switch>
      </Router>
     
    )
  }

}
export default App;
