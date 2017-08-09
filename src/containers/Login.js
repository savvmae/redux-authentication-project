import React, { Component } from 'react';
import { connect } from 'react-redux'

import Dashboard from '../components/Dashboard'

import { login } from '../actions'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }
    updateState = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state);

    }

    render() {
        return (
            <div>
                {this.props.loggedIn
                    ? <Dashboard />
                    :
                    <div>
                        <div className="container">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group row">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input onChange={this.updateState} type="email" className="form-control" id="inputEmail3" placeholder="Email" name="email" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                    <div className="col-sm-10">
                                        <input onChange={this.updateState} type="password" className="form-control" id="inputPassword3" placeholder="Password" name="password" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="offset-sm-2 col-sm-10">
                                        <button type="submit" className="btn btn-primary">Log In</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (user) => {
            return dispatch(login(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)