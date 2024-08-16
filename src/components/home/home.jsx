import './home.css';
import Sidebar from './sidebar/sidebar';

function Home() {
    return (
        <>
        <div className='wh-100 d-flex row p-6'>
            <Sidebar />
            <div className='p-4' id='home'>1</div>
        </div>
        </>
    )
}

export default Home