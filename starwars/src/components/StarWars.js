import React from 'react';
import './StarWars.css';
import Human from './Human';
import Droid from './Droid';

class CharacterProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='characterProfiles'>
        <div className='humanProfiles'>
          {this.props.starwarsChars.map((character, index) => {
            if (character.gender !== 'n/a') {
              return (
                <Human 
                character={character} />
              )
            } else {
              return null
            }
          })}
        </div>
        <div className='droidProfiles'>
          {this.props.starwarsChars.map((character, index) => {
            if (character.gender !== 'n/a') {
              return null
            } else {
              return (
                <Droid 
                character={character} />
              )
            }
          })}
        </div>
      </div>
    ) 
  }
}

export default CharacterProfile;