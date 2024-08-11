import '../textField.css';
import ViewBtn from './viewBtn';
import { warnTextRemove } from '../../functions/rmWarnText';
import { login } from '../../functions/login';

function enter(e) {
    if (e.key === 'Enter') {
        login()
    }
}

export default function Password() {
    return (
        <div className="width-100 mt-1 mb-2 d-flex field alg-center" onClick={warnTextRemove}>
            <input type="password" autoComplete='new-password' className='fs-4 fw-4 width-100' id='fieldPassword' onKeyDown={(e) => enter(e)} />
            <ViewBtn />
        </div>
    );
}