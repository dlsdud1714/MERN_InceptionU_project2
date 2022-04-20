import React from 'react'

const Post = (props) => {
  const{selectedCategory, contents, setContentMark} = props
  const dataInCategory = contents.filter((content)=>content.category===selectedCategory);

  return (
    <div className='posts'>
      {dataInCategory.map((data)=><div id={data.postId} dangerouslySetInnerHTML={{__html: data.body}} ></div>)}
      <button onClick={()=>{setContentMark(false)}}>POST</button>
    </div>
  )
}

export default Post