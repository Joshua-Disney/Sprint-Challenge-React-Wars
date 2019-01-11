import React from 'react';
import './StarWars.css';

const Droid = (props) => {
  return (
    <div className='droid'> 
      <h1>My name is {props.character.name}.</h1>
      <p>I was built on {props.character.homeworld} in {props.character.birth_year}</p>
      <p>I weigh {props.character.mass} units.</p>
    </div>
  )
}

export default Droid;