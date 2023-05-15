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
    foto: "https://scontent.fcix2-1.fna.fbcdn.net/v/t39.30808-6/219290804_398625521647941_8414470303276658168_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHlT5daSaXX3RmihILePhO3hRXM45D1BliFFczjkPUGWMeZuK1xltWk7uA9iYYWFOrGx-84IFsGgIFfLXLxT0E-&_nc_ohc=Mbge3kAE9NIAX9yKxLi&_nc_ht=scontent.fcix2-1.fna&oh=00_AfAUkdYLDcNzXFjCZnT-tdp8JOMbz0jrYu9veedPxmgRSA&oe=64679A75",
    nombre: "Manuel Lucero",
    puesto: "Padre",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Padres",
    foto: "https://pps.whatsapp.net/v/t61.24694-24/138452550_227780428828308_2573727897326841641_n.jpg?ccb=11-4&oh=01_AdTQE9ziAZkxfenS5Lxv8HaQEQJ_BdGycij_PU6KPPn8Vg&oe=6467FC0A",
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
    foto: "https://scontent.fcix2-1.fna.fbcdn.net/v/t39.30808-6/294985213_1981961055524988_3119078025123071701_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGO9q0yEUL8NbpBPf2PVeyLurHvZ9MmI0a6se9n0yYjRjCubSNbE1saVNcN41XvsaOKUZ1bqsI-pT5S1drI-Qi3&_nc_ohc=rqJsC38Sh_EAX9vgBb-&_nc_ht=scontent.fcix2-1.fna&oh=00_AfCe992CqL1LLYIkMVLRnHNY61stnXDSJEJKvw2EIlzaaw&oe=64670ACF",
    nombre: "Nattaly Lucero",
    puesto: "Hija",

  },
  {
    id: uuid(),
    equipo: "Yernos",
    foto: "https://pps.whatsapp.net/v/t61.24694-24/321083082_741868134126363_2143311163724515268_n.jpg?ccb=11-4&oh=01_AdR25BS2AdUQnAfYPRBABoNEqWwrRIUzwoHTSRWP24-qlg&oe=646A5212",
    nombre: "Isabel Facho",
    puesto: "Esposa de Esteban Lucero",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Yernos",
    foto: "https://scontent.fcix2-1.fna.fbcdn.net/v/t39.30808-6/240114539_4245071322249487_3359242113906764310_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeFZaHcFU7l7Zb7cV5kkPZodUdelZUC6-kpR16VlQLr6Spm55ZNHIYTiTS3YWp48kLydMqTVX-ko-WN3EylbwhDJ&_nc_ohc=hsxA9c9t8fIAX-8sDYb&_nc_ht=scontent.fcix2-1.fna&oh=00_AfBeQgXmu9R_ouBDS6_NZiMYBJa1OEftn8XvxrmSA2qd-w&oe=6467A828",
    nombre: "Kevin Alcalde",
    puesto: "Esposo de Nattaly Hija",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Nietos",
    foto: "https://pps.whatsapp.net/v/t61.24694-24/346966045_1010231693261055_8550615474453696816_n.jpg?ccb=11-4&oh=01_AdS2SjmkiiyzBuY2pds_ebGoCW2NP83JgjpFKvwJHn3wag&oe=646F482D",
    nombre: "Sebastian Lucero",
    puesto: "Hijo de Esteban e Isabel",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Nietos",
    foto: "https://scontent.fcix2-1.fna.fbcdn.net/v/t39.30808-6/346832523_3331489483765890_3350048863627595446_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFmx3tveSejcPssQ4MQy3EnqPiA5A5kOv6o-IDkDmQ6_p8576KMSaEndpfx-bB0ujckdKrZltlq0sVtLlEA77IV&_nc_ohc=jnDLxzFqf10AX-TATkr&_nc_ht=scontent.fcix2-1.fna&oh=00_AfBPf-uAZhEb46ALoMjryMT98Mx0_pplglcLSVDs3VdpMg&oe=6467FB77",
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
