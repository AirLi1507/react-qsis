import './background.css';

function Background(props) {
    return (
        <div className='d-flex jc-center alg-center wh-100 pos-rel'>
            <div className='bg-overlay'></div>
            {props.children}
        </div>
    )
}

export default Background