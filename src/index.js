import React from 'react';
import ReactDOM from 'react-dom/client';
import Background from './components/background/background';
import Login from './components/loginbox/loginBox';
import './index.css';

const App = () => {

    return ( 
        <Background>
            <Login />
        </Background>
    );
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(App());