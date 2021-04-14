import React from "react";
import ButtonCounter from "./ButtonCounter";

export default function App() {
    const [counter, setCounter] = React.useState(0);
    
    return <>
        <span>{counter}</span>
        <div className="button-group">
            <ButtonCounter onClick={() => setCounter(counter + 1)} label="Incrémenter"/>
            <ButtonCounter onClick={() => setCounter(counter - 1)} label="Décrémenter"/>
        </div>
    </>
}