import React, { Component } from 'react'
import request from 'superagent';
import { withRouter } from 'react-router-dom';

// we need withRouter to get access to the URL to see if we are on the favorites page
export default withRouter(class List extends Component {
    /* whenever youre in a list and clicking on an item has a function that needs access to that item, you need a function that returns a function*/
    makeFavorite = async (char) => {
        console.log('List', this.props)
        // when the user clicks the makeFavorite button, add this character to the favorite list
        const fave = await request.post('http://localhost:3000/api/my/Favorites', {
            name: char.name,
            weight: char.mass,
            eye_color: char.eye_color,
        })
        .set('Authorization', this.props.user.token)

        console.log('fave', fave.body)
    }
    
    renderButtonOrStar = (char) => {
       
        const isOnFavoritesList = this.props.favorites.find(person => char.name === person.name);
        if (!isOnFavoritesList) {
          
        return <button onClick={ (e) => this.makeFavorite(char)}>Your Favorite</button>
        }

        return <span>❤️</span>
    }

    render() {
        console.log('url', this.props)
        return (
            <div>
                {
                  
                    this.props.characters.map(char => <div key={char.name} className="char-box">
                        <div>{char.name}</div>
                        <div>{char.weight}</div>
                        <div>{char.eye_color}</div>
                        {
                            this.props.location.pathname !== '/Favorites' 
                        
                                && this.renderButtonOrStar(char)
                        }
                    </div>)
                }
            </div>
        )
    }
})