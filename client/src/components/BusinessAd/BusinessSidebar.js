import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react'

const BusinessSidebar = (props) => {
    const {business, contents, setSelectedCategory} = props;
   console.log(contents)

  return (
    <div className='sideBar'>
        
        <div className='sideBar--header'>
            {business && business.title}
            {contents.map((content)=>{return <p key={content.category} onClick={()=>setSelectedCategory(content.category)}>{content.category}</p>})}
        </div>
    </div>
  )
}

export default BusinessSidebar