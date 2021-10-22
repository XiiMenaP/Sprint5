import React from "react";
import Navbar from "../components/Navbar";
import APIinvoke from "../utils/APIinvoke";
import { Link } from "react-router-dom";

class PerfilesAdm extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      usuarios: []
    }
  }

  async componentDidMount() {
    const response = await APIinvoke.invokeGET("/api/v1/usuarios")
    this.setState({
      usuarios: response
    })
  }

  async remove(e, perfil) {
    e.preventDefault();
    await APIinvoke.invokeDELETE(`/api/v1/usuarios/${perfil.id}`)
  }

  async componentDidUpdate() {
    const response = await APIinvoke.invokeGET("/api/v1/usuarios")
    this.setState({
      usuarios: response
    })
  }

  render() {
    const arreglo = this.state.usuarios

    return (
      <div>
        <Navbar />
        <div className="main container">
          <div className="row">
            <div className="col-md-12">
                <Link to="/perfiles-crear" className="btn btn-primary">
                  CREAR SERVICIOS
                </Link>
                  <br/><br/>
              {
                  arreglo.length === 0 ? 
                    <div className="alert alert-warning">
                      No existen registros
                    </div>
                   : 
                <table className="table text-center">
                      <thead className="table-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">SERVICIOS</th>
                            <th scope="col">OPCIONES</th>
                        </tr>
                      </thead>
                  <tbody>
                    {
                      arreglo.map(
                        perfil => 
                        <tr key={perfil.id}>
                            <td>{perfil.id}</td>
                            <td>{perfil.nombres}</td>
                            <td>
                              <Link  to={`/perfiles-editar/${perfil.id}`} className="btn btn-info btn-sm" title="Editar">
                                <i className="fa fa-edit"></i>
                              </Link>
                              &nbsp;&nbsp;
                              <button
                                onClick={(e) => this.remove(e, perfil)}
                                className="btn btn-danger btn-sm"
                                title="Eliminar"
                              >
                                <i className="fa fa-trash"></i>
                              </button>
                            </td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default PerfilesAdm
