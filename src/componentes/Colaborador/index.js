import './Colaborador.css'
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { FcRemoveImage,FcLikePlaceholder,FcLike } from "react-icons/fc";

const Colaborador = (props) => {
    const{ nombre, puesto, foto, equipo, id, fav} = props.datos
    const { colorPrimario, eliminarColaborador, like} = props
    return <div className="colaborador">
         <FcRemoveImage className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <FcLike color='red' onClick={() => like(id)} /> :  <FcLikePlaceholder onClick={() => like(id)}  />}
           
        </div>
    </div>
}
export default Colaborador