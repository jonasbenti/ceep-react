import React, {Component} from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {

    render() {
        return (
            <ul className="lista-notas">
                {this.props.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            {/* <div>{categoria}</div> */}
                            {/* {console.log(nota)} */}
                            <CardNota id={nota.id} titulo={nota.titulo} texto={nota.texto}/>
                        </li>   
                    );
                })}                             
            </ul>
        )
    }    
}

export default ListaDeNotas;