import React, {useEffect, useState} from 'react';
import Character from "./Character";

const Characters = () => {
    const [character, setCharacter] = useState([])
    useEffect(() => {
        fetch('https://futuramaapi.herokuapp.com/api/v2/characters').then(value => value.json())
            .then(response => {
                console.table(response)
                setCharacter(response)
            })
    }, [])
    return (
        <div>
            {
                character.map((value, index) => <Character key={index} item={value}/>)


            }

        </div>
    );
}

export default Characters;
