import React, { Component, Fragment } from 'react';
import Repo from '../../components/Repositories/Repositories'
import Avatar from '../../components/Avatar/Avatar'

class RepoPage extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Fragment>
       <Avatar />
       <Repo />
      </Fragment>
    );
  }
}

export default RepoPage;