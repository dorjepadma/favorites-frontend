import React, { Component } from 'react'
import List from './List';
import request from 'superagent';
export default class Search extends Component {

    state = {
    characters: [],
    input: '',
    }
    
    handleSearch = async () => {
        const data = await request.get(`http://localhost:3000/api/swapi?search=${this.state.input}`)
    
    
        console.log(data.body)
        this.setState({
            characters: data.body.results,
        });
    }
    
    render() {
        return (
    
        <div>
            <body>
                <input value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />
                <button onClick={this.handleSearch}>Find the Force!</button>
                <List characters={this.state.characters} />
            </body>
        </div>
    )
    }
    }