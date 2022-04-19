import React from 'react'

const Details = (props) => {
    const {business} = props;

  return (
    <div className='details'>
        <div className='name'>{business&&business.title}</div>
        <img src={business&&business.imgUrl} alt="" />
        <div className='phone'>{business&&business.phoneNumber}</div>
    </div>
  )
}

export default Details