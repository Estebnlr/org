import { useState } from "react"
import "./MiOrg.css"


const MiOrg = (props) => {

    // const [mostrar, actualizarMostrar] = useState(false)
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento",!mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi Organcizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg 