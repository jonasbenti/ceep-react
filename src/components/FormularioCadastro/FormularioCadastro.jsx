import React, { Component } from 'react';
import "./estilo.css";

class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
        this.id = 0;
    }

    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudancaTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();

        if(this.titulo === '' || this.texto === '') {
            alert("Prencha os campos para criar a nota")
        } else {
            this.id++;
            // console.log(`id: ${this.id}, tit: ${this.titulo}, text: ${this.texto}`)
            this.props.criarNota(this.id, this.titulo, this.texto);
            this.titulo = "";
            this.texto = "";
            document.getElementById("titulo").value = "";
            document.getElementById("texto").value = "";
        }
        
    }

    render() {
        return (
            <form className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}
            >
                <input 
                    id="titulo"
                    type="text"
                    placeholder='Título'
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea 
                    id="texto"
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;