import React from 'react'

const BusinessSidebar = (props) => {
    const {business, setSelectedCategory, categoryList, selectedCategory, setContentMark} = props;
  // console.log(business)

  const categoryClickHandler=(content)=>{
    setSelectedCategory(content)
    setContentMark(true)
  }

  return (
    <div className='sideBar'>
        
        <div className='sideBar--header'>
            <p>{business && business.title}</p>
        </div>
        <div className='sideBar--category'>
          <div className='category--title'>Categories</div>
            {categoryList.map((content)=>{return <p className={`category--list ${content===selectedCategory&&"selected"}`} key={content} onClick={()=>categoryClickHandler(content)}>{content}</p>})}
        </div>
    </div>
  )
}

export default BusinessSidebar