// --IMPORT
import React, {Component, Fragment} from 'react';
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import api from '../../services/api';
import {Link} from 'react-router-dom';

class Repositories extends Component{
 constructor(props){
   super(props);
   this.state = {
     myRepo: [],
   }
 }
 componentDidMount(){
   api.get('users/gabrielEscame/repos')
    .then(response => this.setState({
      myRepo: response.data,
    }))
    .catch(err => console.log(err)
    )
 }

 componentWillMount(){
  AOS.init();
 }
 
 render(){
   return(
     <Fragment>
     <div className='scroll'>
       <ul className='repositories-ul'>
         {this.state.myRepo.map((e, idx)=>(
          <Link key={idx} className='repositorie-name'to={`/repo/${e.name}`}><li data-aos="fade-right" className='repositories-list'>{e.name}</li></Link> 
           
         ))}
       </ul>
     </div>
     </Fragment>
   )
 }
}

export default Repositories;
