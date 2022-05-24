import React from 'react'

const Restorent = ({restaurent}) => {
  return (
    <div key={restaurent.id} className="card">
                    
                    <img width="254" height="160px" src={restaurent.image} />
                    <div className="restaurant-details">
                        <div className="restaurant-title">{restaurent.name}</div>
                        <div className="restaurant-subtitle">
                            {restaurent.category.join(",")}
                            {/* North India, Punjabi, Chinese, Thalis Combo, Beverages  */}
                            </div>
                    </div>
                    <div className="restaurant-info">
                        <div className="restaurant-ratings">
                            <i className="material-icons star-icon">star</i>{restaurent.rating}
                        </div>
                         .<div className="restaurant-delivery-timings"> {restaurent.deliveryTimings}</div> .
                        <div className="restaurant-cost-for-two">₹ {restaurent.costfortwo} FOR TWO</div>
                    </div>
                    <div className="offer-banner">
                        <span className="material-icons"> local_offer </span>
                        <span className="offer-text">{restaurent.offers.join(" | ")}</span>
                    </div>
                </div>
  )
}

export default Restorent