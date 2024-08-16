import ReactDOM from 'react-dom/client';

import Background from '../background/background';
import AccRecover from '../accRecover/accRecover';
import Login from '../loginbox/loginBox';
import Home from '../home/home';


const Root = ReactDOM.createRoot(document.getElementById('root'));

function renderPage(page) {
    if (page === 'login') {
        Root.render(
            <Background>
                <Login/>
            </Background>
        )
    } else if (page === 'forget') {
        Root.render(
            <Background>
                <AccRecover/>
            </Background>
        )
    } else if (page === 'home') {
        Root.render(
            <Background>
                <Home />
            </Background>
        )
    }
}

export { renderPage }