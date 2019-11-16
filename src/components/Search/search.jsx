import React from 'react';

const Search = ({value, placeholder, method}) => {
  return(
    <input type="text" value={value} placeholder={placeholder} onChange={method}/>
  )
}

export default Search;