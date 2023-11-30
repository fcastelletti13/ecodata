import {useContext} from "react";
import { UserContext } from "../context/UserContext.js";
import '../styles/User.css'
const Usuario = () => {
    const { user } = useContext(UserContext); 
    const { result } = useContext(UserContext); 
    return (
        <div className="contexto">
            <h2>Usuario: {user}</h2>
            <h2>Resultado: {result}</h2>
        </div>
    )
}
export default Usuario;