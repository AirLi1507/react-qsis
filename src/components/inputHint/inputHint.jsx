import './inputHint.css';

export default function InputHint(props) {
    return (
        <label className="inputHint fs-5 width-100 mt-3 d-flex row alg-center noselect" htmlFor={props.htmlFor}>
            <span className="symbol">{props.symbol}</span>
            <span className='inputHint fw-4'>{props.hint}</span>
        </label>
    )
}