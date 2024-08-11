import './background.css';

export default function Background(props) {
    return (
        <div className='d-flex jc-center alg-center wh-100' id='bg'>
            {props.children}
        </div>
    )
}