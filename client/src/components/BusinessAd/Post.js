import React from 'react'

const Post = (props) => {
  const{selectedCategory, contents, setContentMark} = props
  const dataInCategory = contents.filter((content)=>content.category===selectedCategory);

  return (
    <div>
      <button onClick={()=>{setContentMark(false)}}>POST</button>
      {dataInCategory.map((data)=><div id={data.postId} >{data.body}</div>)}
    </div>
  )
}

export default Post