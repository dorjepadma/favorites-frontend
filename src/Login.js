import React, { Component } from 'react';

export default class Login extends Component {
    render () {
        console.log(this.props)
        return (
            <div>
                <form onSubmit={ this.handleSignIn }>
                    <input onChange={(e) => this.setState({ signInEmail: e.target.value })}/>
                    <input onChange={(e) => this.setState({ signInEmail: e.target.value })}/>
                </form>
            </div>
        )
    })
}