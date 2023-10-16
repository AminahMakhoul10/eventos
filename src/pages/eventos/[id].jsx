import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function EventosHome(){

    const [evento, setEventos]= useState({})

    const router = useRouter()

    useEffect(() =>{
        const id = router.query.id
 
        if(id) {
            axios.get(`http://localhost:3000/eventos/${router.query.id}`)
                .then(resultado => setEventos(resultado.data))
        }

    }, [router])
    
    return(
        <>
        <h1>Detalhe do Evento</h1>
        <h2>Evento: {evento.titulo}</h2>
        <p>{evento.descricao}</p>
        </>
    )
}