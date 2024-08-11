import './hyperlink.css';

export default function HyperLink(props) {
    return (
        <a href={props.link} className={'hyperLink d-flex row alg-center width-fc clickable noselect ' + props.class}>
            <span className="symbol height-fc" style={{marginRight: '6px',fontWeight: 'normal'}}>{props.symbol}</span>
            {props.text}
        </a>
    )
}