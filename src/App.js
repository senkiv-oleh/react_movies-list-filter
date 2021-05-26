import React from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends React.Component {
  state = {
    query: '',
  };

  handleQueryChange = (event) => {
    this.setState({ query: event.target.value });
  };

  render() {
    const { query } = this.state;

    const normalizeQuery = query.toLowerCase().trim();

    const visibleMovies = moviesFromServer.filter(
      movie => movie.title.toLowerCase().includes(normalizeQuery)
        || movie.description.toLowerCase().includes(normalizeQuery),
    );

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  onChange={this.handleQueryChange}
                />
              </div>
            </div>
          </div>
          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
