import { renderPage } from '../functions/render';
import { warnTextRemove } from "./rmWarnText"
import { AddWarnText } from './warnText'
import cyptjs from 'crypto-js'

async function getKey() {
    const response = await fetch(`https://api.hypernix.org/key`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const key = await response.text()
    return key
}


async function post(cred) {
    const Key = await getKey()

    const encrypted = cyptjs.AES.encrypt(cred, Key).toString()

    fetch(`https://api.hypernix.org/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: encrypted
    })
    .then(response => {return response.json()})
    .then(data => {
        if (data === true) {
            renderPage('home')
        } else {
            document.querySelectorAll('.buttons')[0].after(AddWarnText('Login failed. Please check your username or password.'))
            document.querySelector('.warnText').classList.add('mt-3')
        }
    })
}

export function login() {
    warnTextRemove()

    const username = document.getElementById('fieldID').value
    const password = document.getElementById('fieldPassword').value

    if (username === '' && password === '') {
        document.getElementsByClassName('field')[0].after(AddWarnText('The username field must be filled.'))
        document.getElementsByClassName('field')[1].after(AddWarnText('The password field must be filled.'))
    } else if (username === '') {
        document.getElementsByClassName('field')[0].after(AddWarnText('The username field must be filled.'))
    } else if (password === '') {
        document.getElementsByClassName('field')[1].after(AddWarnText('The password field must be filled.'))
    } else {
        setTimeout(() => {            
            const credArray = []
            credArray.push(username)
            credArray.push(password)
            post(credArray.toString())
        }, 1);
    }
}
