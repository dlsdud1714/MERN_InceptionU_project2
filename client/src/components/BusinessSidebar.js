import React from 'react'

const BusinessSidebar = (props) => {
    const {business} = props;
   

  return (
    <div className='sideBar'>
        
        <div className='sideBar--header'>
            {business && business.title}
        </div>
    </div>
  )
}

export default BusinessSidebar