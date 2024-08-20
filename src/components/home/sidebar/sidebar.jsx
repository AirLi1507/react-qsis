import Logo from '../../logo/logo';
import Title from '../../title/title';
import NavItem from './navItem/navItem';
import './sidebar.css';

function Sidebar() {
    return (
        <aside className='height-100 d-flex col p-4' id='sidebar'>
            <div className='d-flex col alg-center brand'>
                <div id='smaller-logo'><Logo/></div>
                <div id='smaller-title'><Title /></div>
            </div>
            <ul id='nav-list' className='noselect d-flex col alg-center'>
                <NavItem tab='1' symbol='home' nav='Home' />
                <NavItem tab='2' symbol='person' nav='Student Profile' />
                <NavItem tab='3' symbol='edit_note' nav='Homework' />
                <NavItem tab='4' symbol='library_books' nav='Extension Curriculum' />
                <NavItem tab='5' symbol='two_pager' nav='Reading' />
                <NavItem tab='6' symbol='check_box' nav='Subject Selection' />
                <NavItem tab='7' symbol='help_center' nav='Support' />
                <NavItem tab='8' symbol='photo_library' nav='Class Album' />
                <NavItem tab='9' symbol='manage_accounts' nav='Administration' />
                <NavItem tab='10' symbol='settings' nav='Settings' />
                <NavItem tab='11' symbol='logout' nav='Logout' />
            </ul>
        </aside>
    )
}

export default Sidebar