import { useState } from "react";
import "./Formulario.css" ;
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { FcExpand } from "react-icons/fc";


const Formulario = (props) => {
  
    
    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")
    
    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            nombre,
            puesto,
            foto, 
            equipo
        }
        registrarColaborador(datosAEnviar)
        
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
    }

   
    return <section className="formulario">

        <form onSubmit={manejarEnvio}>
            <h2>Ingresa Miembro de Familia.</h2>
            <Campo
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required valor={nombre} 
                actualizarValor={actualizarNombre} 
            />
            <Campo
                titulo="Parentesco" 
                placeholder="Ingresar parentesco" 
                required valor={puesto} 
                actualizarValor={actualizarPuesto} 
            />
            <Campo
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required valor={foto} 
                actualizarValor={actualizarFoto}  
            />
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos} 
            />
            <Boton>
                Crear
            </ Boton>   
        </form>
        
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Ingresa Grupo Familiar.</h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar el color en Hex"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>Registrar grupo</Boton>
        </form>
    </section>
}

export default Formulario