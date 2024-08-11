import './textField.css';

export default function InputField(props) {
    return (
        <div className="field width-100">
            <input type="text" className='fs-4 fw-4 width-100' id={props.elementID} />
        </div>
    )
}