import { useState } from "react"
import Entrada from "./Entrada";
import Cliente from "../../core/Cliente"
import Botao from "./Botao";

interface FormularioProps{

    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void

}

export default function Formulario(props : FormularioProps){
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    const id = props.cliente?.id
    return  (
        <div>
            {id ? (
            <Entrada texto="Código" valor={id}/>
            ):false}
            <Entrada texto="Nome" valor={nome} valorMudou={setNome}/>
            <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade}/>
            <div>
                <Botao onClick={() => props.clienteMudou?.(new Cliente(nome, idade, id))}>
                    {id ? 'Alterar':'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}