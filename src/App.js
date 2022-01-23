import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor(){
    super();
    // this.notas = [];
    this.state = {
      notas:[]
    }
  }

  criarNota(id, titulo, texto){
    // console.log('Nova nota criada: ' + titulo + ' ' + texto);
    const novaNota = {id, titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas
    }
    // this.notas.push(novaNota);
    this.setState(novoEstado);
    // this.render();
  }  

  render() {
    // console.log("Entrou Render");
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;