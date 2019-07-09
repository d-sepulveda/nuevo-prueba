import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import  Formulario  from './Componente/Formulario';
import { datos }  from './datosentrantes.json';


class App extends Component{
  constructor(){
    super();
    this.state={
      datos
    }
    this.handleAddDatos=this.handleAddDatos.bind(this)
  }
  
  handleAddDatos(datos){
    this.setState({
      datos:[...this.state.datos, datos]
    })
  }

  handleRemove(index){
    if(window.confirm('Are you sure you want to delelte it?')){this.setState({
      datos:this.state.datos.filter((elementos,i)=>{return i !== index})
    })}
  }

  render(){

    const datos=this.state.datos.map((datos,i)=>{
      return(
      <div className="col-md-4">
        <div className="card mt-4">
        <div className="card-header">
          <h3>{datos.title}</h3>
          <span className="badge badge-pill badge-danger ml-2">{datos.priority}</span>
        </div>
        <div className="card-body">
          <p>{datos.description}</p>
          <p>{datos.responsible}</p>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-danger"
            onClick={this.handleRemove.bind(this, i)}
            >Delete</button>
        </div>
      </div>
      </div>  
      )
    });

  return (
    <div className="App">
      <nav className="navbar navbar-dar bg-dark">
        <a href="" className="text-white">
          Task: 
         <span className="badge badge-light ml-2">
          {datos.length}
         </span>
        </a>
      </nav>

      <div className="container">
        <div className="row mt-4">
          <div className="col-mid-3">
            <img src={logo} className="App-logo" alt="logo" />     
            <Formulario onAddDatos={this.handleAddDatos}/>
          </div>
          <div className="col-md-8">
            <div className="row">
              {datos}
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
}
export default App;
