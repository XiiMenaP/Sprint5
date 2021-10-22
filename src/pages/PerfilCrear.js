import React from "react";
import Navbar from "../components/Navbar";
import APIinvoke from '../utils/APIinvoke';

class PerfilCrear extends React.Component {

    constructor(args) {
        super(args)
        this.state={
            nombres:''
        }
    }
  
    handleChange(e) {
        this.setState({
            nombres: e.target.value
        })
    }

    async add() {
        const data = {
            nombres: this.state.nombres

        }
        const response = await APIinvoke.invokePOST('/api/v1/usuarios', data)
        if (response.id !== 0){
            this.props.history.push('/perfiles')
        }else{
            console.log(response.message)
        }
       
        
    }
        

  
  render() {
    return (
      <div>
        <Navbar />
        <div className="main container">
          <div className="row g-3">

          <div className="col-md-4">
              <label for="userid" className="form-label">
                IDENTIDAD
              </label>
              <input
                type="number"
                className="form-control"
                name="id"
                id="id"
                required
              />
            </div>
            <div className="col-md-4">
              <label for="nombres" className="form-label">
                NOMBRES Y APELLIDOS
              </label>
              <input
                type="text"
                className="form-control"
                name="nombres"
                id="nombres"
                value={this.state.nombres}
                onChange={this.handleChange.bind(this)}
                required
              />
            </div>

            <br/><br/>
            <br/><br/>

            <div className="col-12">
              <button onClick={this.add.bind(this)}   className="btn btn-primary" type="submit">
                REGISTRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PerfilCrear;
