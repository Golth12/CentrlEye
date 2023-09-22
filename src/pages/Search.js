import React from 'react'


const Search = () => {
  return (

    <div className='search'>
      <h1 style={{color:'white',padding:35,fontSize:30,marginRight:30}}>Search for event...</h1>
    <div className='bar'>
<form>
<div class="search-location">
    <p>Location</p>
    <input type="text" placeholder="City?" />
  </div>
  <div class="search-events">
        <p>Events</p>
    <input type="text" placeholder="Wedding,Gathering,etc.."/>
  </div>
  <div class="search-categories">
        <p>Categories</p>
    <input type="text" placeholder="Florist,Photographer,etc.."/>
  </div>
  {/* <button onClick={handleClick}>Search</button>; */}
      </form>
    </div>
    </div>
  )
}

export default Search