import Logo from '../logo/logo'
import Title from '../title/title'
import InputHint from '../inputHint/inputHint'
import InputField from '../input/textField'
import Button from '../input/Button'
import HyperLink from '../hyperlink/hyperlink'
import { renderPage } from '../functions/render'
import { AddWarnText } from '../functions/warnText'
import { warnTextRemove } from '../functions/rmWarnText'
import './accRecover.css'

const recover = (element) => {
    warnTextRemove()
    var username = document.getElementById('recoverID').value
    if (username !== '') {
        document.querySelectorAll('.remindText').forEach(element => {
            element.remove()
        })
        const remindTxt = document.createElement('span')
        remindTxt.innerText = `An email has been sent to ${username}@qos.edu.hk for recovery.`
        remindTxt.classList.add('remindText','fs-3','fw-5','bs5-green', 'txt-center', 'width-100', 'mt-3', 'mx-auto')
        element.after(remindTxt)
    } else {
        document.getElementsByClassName('field')[0].after(AddWarnText('The username field must be filled.'))
    }
}

const AccRecover = () => {
    return (
        <div className='p-4' id='recover'>
            <div className='d-flex col jc-center alg-center width-fc mx-auto'>
                <div className='d-flex mt-6 mx-auto jc-center alg-center'><Logo /></div>
                <Title />
            </div>
            <div className='width-100 height-fc d-flex col jc-center' >
                <span className='fs-4 fw-5 txt-center mt-3 noselect' id='recoveryTitle'>Account Recovery Process</span>
                <InputHint class='fs-5 mt-7' symbol='tag' hint='Username' htmlFor='recoverID'/>
                <InputField class='mt-1 mb-2 d-flex alg-center' elementID='recoverID' autoComp='username' type='text' enter={
                    ()=>{recover(document.getElementsByClassName('buttons')[0])}
                }/>
                <Button class='mt-2 fs-4 fw-6' btnText='Recover' func={(e)=>{recover(e.target)}}/>
                <HyperLink class='mt-4 fs-4 fw-6' symbol='arrow_back' text='Go back' func={()=>{renderPage('login')}} />
            </div>
        </div>
    )
}

export default AccRecover

