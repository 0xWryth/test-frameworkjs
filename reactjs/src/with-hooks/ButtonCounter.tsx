export interface ButtonCounterProps {
    onClick: Function,
    label: String
}

export default function ButtonCounter(this: any, props: ButtonCounterProps) {
    return <button onClick={props.onClick.bind(this)}>{props.label}</button>
}