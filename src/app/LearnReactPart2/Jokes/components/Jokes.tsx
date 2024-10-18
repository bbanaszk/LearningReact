import React from 'react';
import '../styles.css';
export default function Jokes(props : any) {
    
    return(
        <div className="jokes-div">
            {props.setup && <h1>{props.setup}</h1>}
            {props.punchline && <h3>{props.punchline}</h3>}
            {props.setup && props.punchline && <hr/>}
        </div>
    )
}