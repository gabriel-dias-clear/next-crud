interface EntradaProps{
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Entrada(props : EntradaProps){
    return  (
        <div className="flex flex-col">
            <label>
                {props.texto}
            </label>
            <input onChange={e=>props.valorMudou?.(e.target.value)} className={`border border-purple-500 rounded-lg focus:outline-none bg-gray-100 px-4 py-2 ${props.somenteLeitura ? '' : 'focus:bg-white'}`} type={props.tipo ?? "text"} value={props.valor} readOnly={props.somenteLeitura}/>
        </div>
    )
}