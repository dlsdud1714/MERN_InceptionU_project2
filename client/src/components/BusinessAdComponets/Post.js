import React, { useState } from 'react'
import PostModal from './PostModal';

const Post = (props) => {
  const{selectedCategory, contents, setContentMark, setCurrentPostId, findCurrentPost} = props

  const [modalOpen, setModalOpen]= useState(false);
  const dataInCategory = contents.filter((content)=>content.category===selectedCategory);

const postClickHandler=(data)=>{
  setCurrentPostId(data.postId);
  openModal();
}
const openModal =()=>{
  setModalOpen(true);
}
const closeModal = () =>{
  setModalOpen(false)
}
const findCurrentDataHTML=()=>{
  const currentpost = findCurrentPost();
  console.log("currentpost",currentpost)
   return <div className={`post--modal ${currentpost.postId}`} dangerouslySetInnerHTML={{__html: currentpost.body}} ></div>
}

  return (
    <div className='posts'>
        <div className='post--lists'>
      {dataInCategory.map((data)=><div id={data.postId} key={data.postId} onClick={()=>postClickHandler(data)} dangerouslySetInnerHTML={{__html: data.body}} ></div>)}
        </div>
      <button onClick={()=>{setContentMark(false)}}>New</button>
        {modalOpen&&<PostModal content={findCurrentDataHTML} closeModal={closeModal}/>}
    </div>
  )
}
// 
export default Post