import { warnTextRemove } from '../functions/rmWarnText';
import './textField.css';

function enter(e,func) {
    if (e.key === 'Enter') {
        func();
    }
}

export default function InputField(props) {
    return (
        <div className={'field width-100 ' + props.class} onClick={warnTextRemove}>
            <input type={props.type} autoComplete={props.autoComp} className='fs-4 fw-4 width-100' id={props.elementID} onKeyDown={(e) => enter(e, props.enter)}/>
            {props.children}
        </div>
    )
}