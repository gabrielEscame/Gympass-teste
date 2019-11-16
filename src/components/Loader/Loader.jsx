
import React from 'react';
import './style.css'

const Loader = () => {
return(
  <button class="btn" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
)

}

export default Loader;