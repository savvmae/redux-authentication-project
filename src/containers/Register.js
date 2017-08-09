import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { register } from '../actions'


class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            name: '',
            password: '',
            secret: '',
            hasRegistered: false
        }
    }
    updateState = (field) => {
        return (event) => {
            this.setState({ [field]: event.target.value })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.register(this.state);
        this.setState({hasRegistered: true})
    }
    render() {
        return (
            <div>
                {!this.state.hasRegistered
                    ?

                    <div className="container">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input onChange={this.updateState('name')} type="text" className="form-control" id="inputEmail3" placeholder="Name" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input onChange={this.updateState('email')} type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input onChange={this.updateState('password')} type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="secret" className="col-sm-2 col-form-label">secret</label>
                                <div className="col-sm-10">
                                    <textarea onChange={this.updateState('secret')} className="form-control" id="inputEmail3" placeholder="Secret goes here" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                    <button type="submit" className="btn btn-primary">
                                        Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    :
                    <div>
                        <p> You are registered! </p>
                        <button><Link to="/Login">Login Now</Link></button>
                        <button><Link to="/App">Back to Home</Link></button>

                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        register: (user) => {
            return dispatch(register(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
