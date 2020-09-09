import React, {Component} from 'react'

const API_KEY = 'c5f5d8c'

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }
    
    _handleChange = (e) => {
        this.setState ({ inputMovie:e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault ()
        const {inputMovie} = this.state

        fetch (`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`
        )
        .then(res=> res.json ())
        .then(results => {
        const { Search = [], totalResults = "0" } = results
        this.props.onResults(Search,totalResults)
        })
    }

    render () {
        return (
            <form onSubmit ={this._handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input 
                    className="input" 
                    onChange= {this._handleChange}
                    type="text" 
                    placeholder="Search to movie" />
                </div>
                <div className="control">
                    <button className="button is-danger is-rounded">
                        Search
                    </button>   
                </div>
            </div>
            </form>

        )
    }
}