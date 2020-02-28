import React, { Component } from 'react';
import Request from 'superagent';

export default class List extends Component {
    render() {
        return (
            <div>
                {
                    this.props.characters.map(char => <div className="char-box">
                        {char.name}
                    </div>)
                }
            </div>
        )
    }
}