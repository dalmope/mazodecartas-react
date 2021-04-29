import React from 'react';
import Carta from '../Components/Carta';

import carta1 from '../Imagenes/1.png';
import carta2 from '../Imagenes/2.png';
import carta3 from '../Imagenes/3.png';
import carta4 from '../Imagenes/4.png';
import carta5 from '../Imagenes/5.png';
import carta6 from '../Imagenes/6.png';
import carta7 from '../Imagenes/7.png';
import carta8 from '../Imagenes/8.png';
import carta9 from '../Imagenes/9.png';
import carta10 from '../Imagenes/10.png';
import carta11 from '../Imagenes/11.png';
import carta12 from '../Imagenes/12.png';
import carta13 from '../Imagenes/13.png';


class Cartas extends React.Component{
    render(){
        return(
            <div className="App">
                 <Carta src = {carta1} descripcion = '1' />
                 <Carta src = {carta2} descripcion = '2' />
                 <Carta src = {carta3} descripcion = '3' />
                 <Carta src = {carta4} descripcion = '4' />
                 <Carta src = {carta5} descripcion = '5' />
                 <Carta src = {carta6} descripcion = '6' />
                 <Carta src = {carta7} descripcion = '7' />
                 <Carta src = {carta8} descripcion = '8' />
                 <Carta src = {carta9} descripcion = '9' />
                 <Carta src = {carta10} descripcion = '10' />
                 <Carta src = {carta11} descripcion = '11' />
                 <Carta src = {carta12} descripcion = '12' />
                 <Carta src = {carta13} descripcion = '13' />
            </div>
        )
    }
}

export default Cartas;