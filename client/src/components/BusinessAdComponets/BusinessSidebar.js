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
            {business && business.title}
        </div>
        <div className='sideBar--category'>
          <p className='category--title'>Categories</p>
            {categoryList.map((content)=>{return <p className={`category--list ${content===selectedCategory&&"selected"}`} key={content} onClick={()=>categoryClickHandler(content)}>{content}</p>})}
        </div>
    </div>
  )
}

export default BusinessSidebar