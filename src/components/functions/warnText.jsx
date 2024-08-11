import './warnText.css';

function AddWarnText(text) {
    const warnText = document.createElement('span');
    warnText.innerText = text;
    warnText.classList.add('warnText','fw-6','bs5-red');

    return (warnText);
}

export { AddWarnText };