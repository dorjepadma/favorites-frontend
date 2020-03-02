import React, { Component } from 'react'
import List from './List';
import request from 'superagent';
export default class Search extends Component {

    state = {
    characters: [],
    input: '',
    }
    componentDidMount = async () => {
        const faves = await request.get('http://localhost:3000/api/my/favorites')
        .set('Authorization', this.props.user.token);
        this.setState({ favorites: faves.body })
    }

    handleSearch = async (e) => {
        e.preventDefault();

        this.setState({ loading: true});
        const data = await request.get(`http://localhost:3000/api/swapi?search=${this.state.input}`)
    
    
        this.setState({
            characters: data.body.results,
            loading: false
        });
    }
    
    render() {
        return (
    
        <div>
             {/* on submit, call the handlSearch function */}
             <form onSubmit={this.handleSearch}>
                {/* on change, update the input in state */}
                <input value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />
                {/* disable the button if loading */}
                <button disabled={this.state.loading}>Search!</button>
                </form>
                {
                    // if loading, show loading, else, show list
                    this.state.loading 
                    ? "loading!!"
                    : <List 
                    characters={this.state.characters} 
                    favorites={this.state.favorites}
                    user={this.props.user} />

                }
        </div>
        )
    }
}