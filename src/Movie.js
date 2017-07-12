import React, {Component} from 'react';
import axios from 'axios';

const apiKey = 'b86b760ec75f35c0f262eaa42ab0871f';

class Movie extends Component {
  constructor() {
    super()

    this.state={
        movie: []

    };
  }
  handleChange = (event) => {
    var value = event.target.value;

    this.setState(
      {
      title: value,

    });
  }
  handleSubmit= (event) => {
        event.preventDefault();

        return axios.get('https://api.themoviedb.org/3/search/movie?api_key=b86b760ec75f35c0f262eaa42ab0871f&query='+this.state.title)
        .then(resp => {
          this.setState({
            movie: resp.data.results[0]
          });

          console.log(resp);
        });
  }

  render () {
    return (
      <div>
      <form className='column' >
        <label className='header' htmlFor='movieName'>  </label>
        <input
          id='movieName'
          placeholder='movie title'
          type='text'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button
          className='button'
          type='submit'
          onClick={this.handleSubmit}>
            Submit
        </button>

      </form>


        <p>{this.state.overview}</p>
        <p>{this.state.movie.title}</p>
        <p>{this.state.movie.vote_count}</p>
        <p>{this.state.movie.overview}</p>

      </div>


    );


  }
}

export default Movie;
