import React, { Component } from 'react';
// IMPORT NavLink <<<<<<<<<<<<<<<
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux'
import {logout} from '../actions'


class BaseLayout extends Component {
    constructor(props) {
        super(props);
    }

    handleLogout = (event) => {
        event.preventDefault();
        this.props.logout();
    }
    render() {
        return (
            <div className="container-fluid nav">
                <nav className="row navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <ul className="nav navbar-nav">
                                <li>
                                    <NavLink activeStyle={{ color: "yellow" }} exact to="/" > Home </NavLink>
                                </li>
                                <li>
                                    <NavLink activeStyle={{ color: "brown" }} exact to="/Login" > Login </NavLink>
                                </li>
                                <li>
                                    <NavLink activeStyle={{ color: "blue" }} to="/Register">Register</NavLink>
                                </li>
                                <li>
                                    <button onClick={this.handleLogout}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}
function mapDispatchToProps (dispatch) {  return {
    logout: () => {
      return dispatch(logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout)