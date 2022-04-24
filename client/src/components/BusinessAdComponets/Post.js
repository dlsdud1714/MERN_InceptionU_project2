import React, { useState } from 'react'
import PostModal from './PostModal';

const Post = (props) => {
  const{selectedCategory, contents, setContentMark, setCurrentPostId, findCurrentPost,setDeleteAction, setCreateAction, setEditAction} = props

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
const editHandler=(data)=>{
  setCurrentPostId(data.postId);
  console.log("CurrentPost id is set to ",data.postId )
  setContentMark(false);
}
const deleteHandler=(data)=>{
  setCurrentPostId(data.postId);
  setDeleteAction(true);
  setCreateAction(true);
  setEditAction(false);
}
const newPostHandler=()=>{
  setContentMark(false);
  setCurrentPostId(undefined);
  setDeleteAction(false);
  setCreateAction(false);
  setEditAction(false);
}

  return (
    <div className='posts'>
        <div className='post--lists'>
      {dataInCategory.map((data)=>{
      return(
      <div className="postsContainer" key={`${data.postId}Div`}>
        <div id={data.postId} key={data.postId} onClick={()=>postClickHandler(data)} dangerouslySetInnerHTML={{__html: data.body}} ></div>
        <button key={`${data.postId}Edit`} className='editButton' onClick={()=>{editHandler(data)}}>Edit</button>
        <button className='deleteButton' onClick={()=>{deleteHandler(data)}} key={`${data.postId}Delete`}>Delete</button>
        </div>)
      })}
        </div>
      <button className="newPost" onClick={()=>{newPostHandler()}}>New</button>
        {modalOpen&&<PostModal content={findCurrentDataHTML} closeModal={closeModal}/>}
    </div>
  )
}
// 
export default Post