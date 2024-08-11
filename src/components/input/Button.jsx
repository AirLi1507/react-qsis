import './Button.css';

export default function Button(props) {
    return (
        <input type="button" value={props.btnText} onClick={props.func} className={'buttons clickable width-100 ' + props.classes} />
    )
}