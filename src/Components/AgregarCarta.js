import React from 'react';

class AgregarCartas extends React.Component{
    state = {}
    render(){
        return(
            <div>
                <div>
                <h1>Agregar Carta</h1>

                <form>
                    <div className="form-group">
                        <label>Numero</label>
                        <input
                        // onChange = {this.handleChange}
                        className="form-control" 
                        type="text" name="Numero"
                        value = {this.state.firstName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Carta</label>
                        <input
                        // onChange = {this.handleChange}
                        className="form-control" 
                        type="text" name="Carta"
                        value = {this.state.lastName}/>
                    </div>

                </form>
            </div>
            </div>
        )
    };
};

export default AgregarCartas;