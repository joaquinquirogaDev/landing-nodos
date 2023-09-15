import { useLocation, useNavigate } from "react-router-dom";

export default function SectionDetalle(){
    const navigate = useNavigate()
    const {titulo, subtitulo} = useLocation().state
    return <>
    
    <h1>{titulo}</h1>
    <button 
        onClick={() => navigate(-1)}
    >
        Atras
    </button>
    </>
}