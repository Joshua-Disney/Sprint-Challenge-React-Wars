import React from 'react';
import './StarWars.css';

class Droid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      planet: '',
    }
  }

  componentDidMount() {
    this.props.character.films.map(film => this.getFilm(film));
    this.getPlanet(this.props.character.homeworld);
  }

  getFilm = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ films: [...this.state.films, data.title] });
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
      <div className='droid'> 
        <h1>I am {this.props.character.name}.</h1>
        <p>I was built on {this.state.planet} in the year {this.props.character.birth_year}.</p>
        <p>I weigh {this.props.character.mass} units.</p>
        <p>I was in these movies: <ul>{this.state.films.map((film) => {
          return <li>{film}</li>
        })}</ul></p>
      </div>
    )
  }
}

export default Droid;