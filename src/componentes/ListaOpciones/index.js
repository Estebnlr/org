import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Metodo map

    
    const manejarCambio = (e) =>{
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }


    return <div className="lista-opciones">
        <label>Grupo Familiar</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar grupo</option>
           { props.equipos.map( (equipo, index) =>  <option key={index} value={equipo}>{equipo}</option> ) }
        </select>
    </div>
}

export default ListaOpciones;