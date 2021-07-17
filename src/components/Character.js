import React from 'react';

const Character = (props) => {
const {item: character} = props

    return (
        <div >
            {character.Name}
            <div>
                <img src={character.PicUrl} alt="picture"/>
            </div>

        </div>
    );
}

export default Character;
// Age: "45-51"
// FirstAppearance: "A Big Piece of Garbage"
// Name: "C. Randall Poopenmeyer"
// PicUrl: "https://vignette.wikia.nocookie.net/en.futurama/images/7/77/Mayor_C._Randall_Poopenmeyer.jpg/revision/latest/scale-to-width-down/350?cb=20090430120112"
// Planet: "Earth"
// Profession: "Mayor of New New York City"
// Relatives: "no relatives available"
// Species: "Human"
// Status: "Alive"
// VoicedBy: "David Herman"
