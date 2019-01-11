import React from 'react';
import './StarWars.css';

const Human = (props) => {
  return (
    <div className='human'> 
      <h1>My name is {props.character.name}.</h1>
      <p>I was born on {props.character.homeworld} in {props.character.birth_year}</p>
      <p>I weigh {props.character.mass} units and I've got {props.character.hair_color} hair and {props.character.eye_color} eyes.</p>
    </div>
  )
}

export default Human;