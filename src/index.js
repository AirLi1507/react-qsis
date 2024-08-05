import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const title = <h1 className='prohibited width-fc red fw-2'>SUS</h1>

const div = (

<div class="flex width-100vw jc-start height-fc">
    {title}
</div>

)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);