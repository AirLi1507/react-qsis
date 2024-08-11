import { useEffect } from 'react';
import './ViewBtn.css';



export default function ViewBtn() {
    useEffect(() => {
        const viewButton = document.getElementById('viewPassword');
        const fieldPassword = document.getElementById('fieldPassword');
        const view = () => {
            if (fieldPassword.getAttribute('type') === 'password') {
                viewButton.innerHTML = 'visibility_off';
                fieldPassword.setAttribute('type','text');
            } else {
                viewButton.innerHTML = 'visibility';
                fieldPassword.setAttribute('type','password');
            }
        }
        document.getElementById('viewPassword').addEventListener('click', view);

    }, []);
    
    return (
        <span className='symbol noselect clickable fs-5' id='viewPassword'>visibility</span>
    )
}