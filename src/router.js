import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import RepoPage from '../src/pages/repo-page/repo-page'
import Commit from './components/Commits/commits';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={RepoPage} />
      <Route path='/repo/:name' component={Commit} />
    </Switch>

  </ BrowserRouter>
)

export default Router;