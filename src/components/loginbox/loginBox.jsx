import './loginBox.css';
import Logo from '../logo/logo';
import Title from '../title/title';
import Username from '../input/username/username';
import Password from '../input/password/password';
import InputHint from '../inputHint/inputHint';
import LoginBtn from '../input/loginBtn/loginBtn';
import HyperLink from '../hyperlink/hyperlink';

export default function Login() {
    return (
        <div className='p-4' id='login'>
            <div className="d-flex col jc-center alg-center">
                <div className='d-flex mt-6 mx-auto jc-center alg-center'><Logo /></div>
                <Title />
            </div>

            <form className="width-100 d-flex col jc-center alg-start">
                <InputHint symbol='tag' hint='Username' htmlFor='fieldID'/>
                <Username />

                <InputHint symbol='key' hint='Password' htmlFor='fieldPassword'/>
                <Password />

                <HyperLink symbol='help' text='Forget Password' class='mt-2' />

                <LoginBtn />
            </form>
        </div>
    );
}