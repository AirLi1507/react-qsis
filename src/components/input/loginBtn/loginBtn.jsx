import { login } from '../../functions/login';
import './loginBtn.css';
// import {loadHome} from '../../../index';

export default function LoginBtn() {
    return (
        <input type='button' value='Login' className='width-100 mt-1 fs-4 fw-6 clickable noselect' id='loginBtn' onClick={login}/>
    );
}