import React from 'react';
import './StarWars.css';

class Human extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      planet: '',
    }
  }
  componentDidMount() {
    this.props.character.vehicles.map(vehicle => this.getVehicle(vehicle));
    this.getPlanet(this.props.character.homeworld);
  }

  getVehicle = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ vehicles: [...this.state.vehicles, data.name] });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getPlanet = URL => {
    fetch(URL)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({ planet: data.name });
    })
    .catch(err => {
      throw new Error(err);
    });
  };

  render() {
    return (
      <div className='human'> 
      <h1>My name is {this.props.character.name}.</h1>
      <p>I was born on {this.state.planet} in the year {this.props.character.birth_year}.</p>
      <p>I weigh {this.props.character.mass} units and I've got {this.props.character.hair_color} hair 
      and {this.props.character.eye_color} eyes.</p>
      {this.state.vehicles.length !== 0 && <p>I have flown these vehicles: <ul>{this.state.vehicles.map((vehicle) => {
        return <li>{vehicle}</li>
      })}</ul></p>}
    </div>
    )
  }
}

export default Human;