import { warnTextRemove } from '../functions/rmWarnText';
import './textField.css';

function enter(e,func) {

    if (e.key === 'Enter') {
        e.preventDefault();
        func();
    }

}

export default function InputField(props) {
    return (
        <div className={'field width-100 ' + props.class} onClick={warnTextRemove} onKeyDown={(e) => {enter(e, props.enter)}}>
            <input type={props.type} autoComplete={props.autoComp} className='fs-4 fw-4 width-100' id={props.elementID}/>
            {props.children}
        </div>
    )
}