import React, { Component, Fragment } from 'react';
import api from '../../services/api'
import './style.css'
import Loader from '../Loader/Loader'

class Avar extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: [],
      Loader: true
    }
  }

  componentDidMount(){
    api.get('users/gabrielEscame')
      .then(response => this.setState({
        user: response.data,
        Loader: false
      }))
      .catch(err => console.log(err)
      )
  }

  render() {    
    return (
      <Fragment>
        {
          this.state.Loader ? <Loader /> :
          <div className='avatar-description'>
        <figure>
          <img src={this.state.user.avatar_url} alt="avatar_image"/>
        </figure>
        <h1>Username:  {this.state.user.login}</h1>
      </div>
        }
      </Fragment>
    );
  }
}

export default Avar;