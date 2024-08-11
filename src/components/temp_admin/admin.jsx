import { useEffect } from 'react';
import { AddWarnText } from '../functions/warnText';
import Button from '../input/Button';
import InputField from '../input/textField';
import './admin.css';


async function add() {
    const addIDField = document.getElementsByTagName('input')[0]?.value;
    const addPWField = document.getElementsByTagName('input')[1]?.value;

    if (!addIDField || !addPWField) {
        document.getElementsByTagName('button')[0].after(AddWarnText('User information cannot be empty!'));
        console.log('11');
    } else {
        const data = addIDField + addPWField;

        fetch(`http://${window.location.hostname}:8800/admin/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: data
        });
    }
}



export default function Admin() {
    return (
        <div className='p-4 d-flex col alg-center' id='admin'>
            <div className='width-100 d-flex col alg-center mb-2 fs-6'>
                <InputField elementID='addID'/>
            </div>
            <div className='width-100 d-flex col alg-center mb-6 fs-6'>
                <InputField elementID='addPW'/>
            </div>
            <Button classes='fs-4 fw-6' btnText='Add' func={add}/>
        </div>
    )
}