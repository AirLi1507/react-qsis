import { useEffect } from 'react';
import './home.css';
import Sidebar from './sidebar/sidebar';

function hideSidebar() {
    requestAnimationFrame(() => {
        const sidebar = document.querySelector('#sidebar');
        const menuBtn = document.querySelector('#menuBtn');
        const brand = document.querySelector('.brand');
        const navList = document.querySelector('#nav-list');
        const navItems = document.querySelectorAll('.nav-item');
        const navNames = document.querySelectorAll('.nav-name');
        const navSymbols = document.querySelectorAll('.nav-symbol');

        sidebar.classList.toggle('active');
        menuBtn.classList.toggle('active');
        brand.classList.toggle('active');

        navList.classList.toggle('alg-center')
        navList.classList.toggle('alg-start')
        
        navNames.forEach(element => {
            element.classList.toggle('active')
        });

        navItems.forEach(element => {
            element.classList.toggle('active');
        });

        // navSymbols.forEach(element => {
        //     element.classList.toggle('active');
        // });
    });
}


function Home() {
    useEffect(()=>{if (window.innerWidth < 884) {return} else {hideSidebar()}},[])
    return (
        <>
            <div className='wh-100 d-flex row p-8' id='home'>
                <Sidebar />
                <div className='p-4 main'>
                    <div className="width-100 d-flex jc-start alg-center" id='homeTitle'>
                        <span className="symbol wh-fc mr-4 clickable noselect" id='menuBtn' onClick={()=>{hideSidebar()}}>menu</span>
                        <span className="width-fc noselect pageName">Home</span>
                    </div>
                    <div className="content p-4">

                    </div>
                    <span id="copyright">COPYRIGHT</span>
                </div>
            </div>
        </>
    )
}

export default Home