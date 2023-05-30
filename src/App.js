import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';



function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)  
  const [colaboradores, actualizarColaboradores] = useState([
  {
    id: uuid(),
    equipo: "Padres",
    foto: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    nombre: "Manuel Lucero",
    puesto: "Padre",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Padres",
    foto: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    nombre: "Elizabeth Roque",
    puesto: "Madre",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Hijos",
    foto: "https://github.com/Estebnlr.png",
    nombre: "Esteban Lucero",
    puesto: "Hijo",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Hijos",
    foto: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    nombre: "Nattaly Lucero",
    puesto: "Hija",

  },
  {
    id: uuid(),
    equipo: "Yernos",
    foto: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    nombre: "Isabel Facho",
    puesto: "Esposa de Esteban Lucero",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Yernos",
    foto: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    nombre: "Kevin Alcalde",
    puesto: "Esposo de Nattaly Hija",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Nietos",
    foto: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    nombre: "Sebastian Lucero",
    puesto: "Hijo de Esteban e Isabel",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Nietos",
    foto: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    nombre: "Camila Alcalde",
    puesto: "Hija de Nattaly y Kevin",
    fav: false
  }
 
 
])

 const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Padres",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Hijos",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Yernos",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Nietos",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
     
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador

  const registrarColaborador = (colaborador) =>{
    console.log("nuevo colabrado: ", colaborador)
    actualizarColaboradores([...colaboradores, colaborador])
  }

   //Eliminar colaborador
   const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

    //Actualizar color de equipo
    const actualizarColor = (color, id) => {
      console.log("Actualizar: ", color, id)
      const equiposActualizados = equipos.map((equipo) => {
        if (equipo.id === id) {
          equipo.colorPrimario = color
        }
  
        return equipo
      })
  
      actualizarEquipos(equiposActualizados)
    }

    //Crear equipo
    const crearEquipo = (nuevoEquipo) => {
      console.log(nuevoEquipo)
      actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
    }

    const like = (id) => {
      console.log("like", id)
      const colaboradoresActualizados = colaboradores.map((colaborador) => {
        if (colaborador.id === id) {
          colaborador.fav = !colaborador.fav
        }
        return colaborador
      })
  
      actualizarColaboradores(colaboradoresActualizados)
    }


  return (
    <div>
      <Header />
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador = {registrarColaborador}
        crearEquipo={crearEquipo}
        />
      }      
      {
        equipos.map((equipo) =>  <Equipo 
                 datos={equipo} 
                 key={equipo.titulo} 
                 colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
                 eliminarColaborador={eliminarColaborador}
                 actualizarColor={actualizarColor}
                 like={like}
              /> 
         )
      }

      <Footer />
    </div>
    
  );
}

export default App;
