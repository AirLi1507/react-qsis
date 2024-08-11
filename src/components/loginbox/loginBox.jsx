import './loginBox.css';
import Logo from '../logo/logo';
import Title from '../title/title';
import InputHint from '../inputHint/inputHint';
import HyperLink from '../hyperlink/hyperlink';
import InputField from '../input/textField';
import ViewBtn from '../input/viewBtn';
import { login } from '../functions/login';
import Button from '../input/Button';

export default function Login() {
    return (
        <div className='p-4' id='login'>
            <div className='d-flex col jc-center alg-center'>
                <div className='d-flex mt-6 mx-auto jc-center alg-center'><Logo /></div>
                <Title />
            </div>

            <form className='width-100 d-flex col jc-center alg-start'>
                <InputHint class='fs-5 mt-3' symbol='tag' hint='Username' htmlFor='fieldID'/>
                <InputField class='mt-1 mb-2' elementID='fieldID' type='text' autoComp='username' enter={() => {document.querySelector('#fieldPassword').focus()}}></InputField>

                <InputHint class='fs-5 mt-3' symbol='key' hint='Password' htmlFor='fieldPassword'/>
                <InputField class='mt-1 mb-2 d-flex alg-center' elementID='fieldPassword' autoComp='current-password' type='password' enter={login}>
                    <ViewBtn />
                </InputField>

                <HyperLink symbol='help' text='Forget Password' class='mt-2 fs-4 fw-6' />

                <Button class='mt-1 fs-4 fw-6' btnText='Login' func={login} />
            </form>
        </div>
    );
}