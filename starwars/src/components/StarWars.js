import React from 'react';
import './StarWars.css';
import Human from './Human';
import Droid from './Droid';

const CharacterProfile = (props) => {
  return (
    <div className='characterProfiles'>
      <div className='humanProfiles'>
        {props.starwarsChars.map((character, index) => {
          if (character.gender !== 'n/a') {
            return (
              <Human 
              character={character}/>
            )
          } else {
            return null
          }
        })}
      </div>
      <div className='droidProfiles'>
        {props.starwarsChars.map((character, index) => {
          if (character.gender !== 'n/a') {
            return null
          } else {
            return (
              <Droid 
              character={character}/>
            )
          }
        })}
      </div>
    </div>
  )
}

export default CharacterProfile;