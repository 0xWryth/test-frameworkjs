import * as React from 'react';

export interface ButtonCounterProps {
    onClick: Function,
    label: String
}
 
export interface ButtonCounterState {}
 
class ButtonCounter extends React.Component<ButtonCounterProps, ButtonCounterState> {
    constructor(props: ButtonCounterProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return <button onClick={this.props.onClick.bind(this)}>{this.props.label}</button>;
    }
}
 
export default ButtonCounter;