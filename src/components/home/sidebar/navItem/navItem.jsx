import { renderPage } from '../../../functions/render';
import './navItem.css';

function renderTab(tab) {
    if (tab === '11') {
        renderPage('login')
    }
}

const NavItem = (props) => {
    return (
        <li className='nav-item width-fc d-flex alg-center fw-5 clickable' onClick={()=>{renderTab(props.tab)}}><span className='symbol nav-symbol fw-4'>{props.symbol}</span>{props.nav}</li>
    );
}

export default NavItem;
