import React, { Component } from 'react';
// import request from 'superagent';
// import withRouter from 'react-router-com';

export default class List extends Component {
    render() {
        return (
            <div>
                {
                    this.props.characters.map(char => <div className="char-box">
                        {char.name}
                    </div>
                    )
                }
            </div>
        )
    }
}