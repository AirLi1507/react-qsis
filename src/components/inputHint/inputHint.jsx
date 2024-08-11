import './inputHint.css';

export default function InputHint(props) {
    return (
        <label className={'inputHint width-100 d-flex row alg-center noselect ' + props.class} htmlFor={props.htmlFor}>
            <span className='symbol'>{props.symbol}</span>
            <span className='inputHint fw-4'>{props.hint}</span>
        </label>
    )
}