import React, {useState} from "react";
export default function Hello (props) {
    let [name, setName] = useState ("zahra,Arzani");
    function updateName ( ) {
        let newName = prompt ("what is your name?");
        setName(newName);
    }
    return (
        <div>
            <h1> {name} </h1>
            <button onClick={updateName}>click please </button>
        </div>
    );
}
