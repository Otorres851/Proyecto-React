import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Movie} from './Movie'

export class MoviesList extends Component{
    static propTypes = {
        movies: PropTypes.array
    }

    render () {
        const { movies } = this.props
        return (
            <div className='MoviesList'>
                {
                    movies.map((movie, index) => {
                        return (
                            <div key={index} className='MoviesList-item'>
                            <Movie
                            id={movie.imdbID} 
                            title={movie.Title}
                            year={movie.Year}
                            poster={movie.Poster}
                            />
                            </div>
                        )
                    }  ) 
                }

            </div>
        )
            
    }
}