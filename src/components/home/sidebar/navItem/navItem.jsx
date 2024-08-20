import { renderPage } from '../../../functions/render';
import './navItem.css';

function renderTab(tab) {
    if (tab === '11') {
        renderPage('login')
    } else if (tab === '10') {
        console.log('Settings')
    } else if (tab === '9') {
        console.log('Administration')
    } else if (tab === '8') {
        console.log('Class Album')
    } else if (tab === '7') {
        console.log('Support')
    } else if (tab === '6') {
        console.log('Subject Selection')
    } else if (tab === '5') {
        console.log('Reading')
    } else if (tab === '4') {
        console.log('Extension Curriculum')
    } else if (tab === '3') {
        console.log('Homework')
    } else if (tab === '2') {
        console.log('Student Profile')
    } else if (tab === '1') {
        console.log('Home')
    }
}

const NavItem = (props) => {
    return (
        <li className='nav-item d-flex alg-center fw-5 clickable' onClick={()=>{renderTab(props.tab)}}><span className='symbol nav-symbol fw-4'>{props.symbol}</span><span className="nav-name">{props.nav}</span></li>
    );
}

export default NavItem;
