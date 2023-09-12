import './select.css'

function Select(props){

    const Digitado = (e) => {
        props.alterado(e.target.value);
    }

    return(
        <div className='select_area'>
            <label>{props.label}</label>
            <select value={props.valor} onChange={Digitado}>
                <option hidden>Selecione seu time...</option>
                {props.time.map(time => <option>{time}</option>)}
            </select>
        </div>
        
    )
}
export default Select;






