import React from 'react'

const BusinessSidebar = (props) => {
    const {business, setSelectedCategory, categoryList} = props;
   

  return (
    <div className='sideBar'>
        
        <div className='sideBar--header'>
            {business && business.title}
            {categoryList.map((content)=>{return <p key={content} onClick={()=>setSelectedCategory(content)}>{content}</p>})}
        </div>
    </div>
  )
}

export default BusinessSidebar