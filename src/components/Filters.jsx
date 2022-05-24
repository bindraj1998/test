import React from 'react'

const Filters = ({filters, updateFilter, currentfilterdby}) => {
  return ( <div class="container restaurants">
  <h1>50 restaurants</h1>
  <div class="restaurant-options">
      {Object.entries(filters).map(([key,value])=>(
       
      <div key={key} class="restaurant-option" onClick={()=>updateFilter(key)}>
          {value}
      </div>
        ))}
      {/* <div class="restaurant-option">
          Cost Lost to High
      </div>
      <div class="restaurant-option">
          Ratings
      </div>
      <div class="restaurant-option">
          Delivery Time
      </div>
      <div class="restaurant-option">
          Relevance
      </div>
       */}
  </div>
</div>
  )
}

export default Filters