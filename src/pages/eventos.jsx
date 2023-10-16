// enviar os dados e limpar o formulario automaticamente 
import axios from "axios"
import { useState } from "react"

export default function Evento() {
    const [evento, setEvento] = useState({
        titulo: "",
        descricao: "",
        dataInicio: "",
        dataFim: "",
        local:""
    })


    function inserirEvento(e){
        e.preventDefault()
        //console.log(evento)

        axios.post('http://localhost:3000/eventos' , evento)
        .then(resultado => console.log(resultado.data))
        .catch(erro => console.log(erro))
        
    }

    return(
        <>
        <h1>Cadastrar Evento</h1>
        
        <form onSubmit={e => inserirEvento(e)}>
            <div>
                <label htmlFor="titulo">Título</label>
                <input
                type="text"
                id="titulo"
                value={evento.titulo}
                onChange={e => setEvento({
                    ...evento,
                    titulo: e.target.value
                })} />
            </div>

            <div>
                <label htmlFor="descricao">Descrição</label>
                <textarea
                id= "descricao"
                value={evento.descricao}
                onChange={e => setEvento({
                    ...evento,
                    descricao: e.target.value
                })}></textarea>

                <div>
                    <label htmlFor="dataInicio"> Data de Inicio</label>
                    <input
                    type="dataInicio"
                    value={evento.dataInicio}
                    onChange={e => setEvento({
                        ...evento,
                        dataInicio: e.target.value
                    })}></input>
                </div>

                <div>
                    <label htmlFor="dataFim"> Data Fim</label>
                    <input
                    type="dataFim"
                    value={evento.dataFim}
                    onChange={e => setEvento({
                        ...evento,
                        dataFim: e.target.value
                    })}></input>
                </div>

                <div>
                    <label htmlFor="local"> Local</label>
                    <input
                    type="local"
                    value={evento.local}
                    onChange={e => setEvento({
                        ...evento,
                        local: e.target.value
                    })}></input>
                </div>


            </div>

        </form>
        
        </>
    )

}





