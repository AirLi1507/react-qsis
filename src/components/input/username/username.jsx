import '../textField.css';
import { warnTextRemove } from '../../functions/rmWarnText';

function enter(e) {
    if (e.key === 'Enter') {
        document.getElementById('fieldPassword').focus();
    }
}

export default function Username() {
    return (
        <div className="field width-100 mt-1 mb-2" onClick={warnTextRemove}>
            <input type="text" autoComplete='username' className='fs-4 fw-4 width-100' id='fieldID' onKeyDown={(e) => enter(e)} />
        </div>
    )
}