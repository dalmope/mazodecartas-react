import React from 'react';
import './Styles/cartas.css';

class Cartas extends React.Component{
    render(){
        return(
            <img className = "carta" src={this.props.src} alt={this.props.descripcion}/>
        )
    }
}

export default Cartas;