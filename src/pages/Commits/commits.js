import React, {Component, Fragment} from 'react';
import './style.css'
import api from '../../services/api';
import Search from '../../components/Search/search'
import Loader from '../../components/Loader/Loader'
import {Link} from 'react-router-dom';

class Commit extends Component {
  constructor(props){
    super(props)
    this.state = {
      myCommits: [],
      valueS: '',
      loader: true
    }
    this.searchCommits = this.searchCommits.bind(this)
  }

  componentDidMount(){
    const {name} = this.props.match.params;
    api.get(`/repos/gabrielEscame/${name}/commits`)
      .then(response => {
        this.setState({
          myCommits: response.data,
          loader: false
        })
      })
      .catch(err => console.log(err)
      )
  }

  filterCommits(value){
    const myCommitsCopy = [...this.state.myCommits];
    return myCommitsCopy.filter(e => e.commit.message.toLowerCase().includes(value.toLowerCase()))
  }

  searchCommits(e){
    const {value} = e.target;
    this.setState({
      valueS: value
    })
  }

  render(){
    return(
      <Fragment>
        {
          this.state.loader ? <Loader /> : null
        }
        {
          this.state.loader ? null : <div className='search-div'>
          <h1>Search:</h1>
          <Search className='banana'placeholder='Search' value={this.state.valueS} method={this.searchCommits} />
          </div>
        }
        {
          this.state.loader ? null : <div className='commit-ul'>
          <ul>
            {this.filterCommits(this.state.valueS).map((e, idx) => (
              idx <= 19 ? <li className='commit-name'key={idx}>- {e.commit.message}</li> : null
            ))}
          </ul>
        </div>
        }
        {
          this.state.loader ? null : <Link className='commit-voltar' to='/'>Voltar</Link>
        }
        </ Fragment>
    )
  }
}

export default Commit;