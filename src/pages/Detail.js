import React, {Component} from 'react'
import PropTypes from 'prop-types'

import { ButtonBackToHome } from '../components/ButtonBackToHome'

const API_KEY = 'c5f5d8c'

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape ({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {} }

    _fetchMovie ({ id }) {
        fetch (`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res=> res.json ())
        .then(movie => {
        this.setState ({ movie })
        })
    }

   
    componentDidMount () {
        console.log(this.props)
        const { movieId } = this.props.match.params
        this._fetchMovie({ id:movieId })
    }

    render() {
        const { Title, Poster, Actors, Genre, Language, Director, Plot }= 
        this.state.movie

        return (
            <div className = "mov">
                <ButtonBackToHome />
                <h1 className = "tit">{Title}</h1>
                <img className = "img" src= {Poster} alt="" />
                <h2>Actors: {Actors}</h2>
                <h3>Genre: {Genre}</h3>
                <h4>Language: {Language}</h4>
                <h5>Director: {Director}</h5>
                <p>{Plot}</p>   
            </div>
        )
    }
       

}