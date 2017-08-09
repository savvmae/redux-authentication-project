import React, { Component } from 'react';
import { connect } from 'react-redux';

import {dashboard} from '../actions'



class Dashboard extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.dashboard(this.props.token);
    }
    render() {
        return (
            <div>
            {this.props.state.user
                 ?
                 <div>
                <h1>Welcome {this.props.state.user.full_name},  Your Secret lives here!</h1>
                <p> {this.props.state.user.message} </p></div>
                :
                <div>
                <h1> Loading </h1>
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
function mapDispatchToProps (dispatch) {  return {
    dashboard: (token) => {
      return dispatch(dashboard(token))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)