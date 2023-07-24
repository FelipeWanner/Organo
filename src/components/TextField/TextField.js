import "./TextField.css"

const TextField = (props) => {
    //aqui estamos recebendo uma funcao via props (whenChanged), que sera executada quando 'whenTyped' for disparada
    //o objetivo de receber uma funcao, eh passar o resultado da funcao para o pai deste componente
    const whenTyped = (event) => {
        props.whenChanged(event.target.value);
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.text} onChange={whenTyped} required={props.mandatory} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField