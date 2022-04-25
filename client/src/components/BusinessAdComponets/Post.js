import React, { useEffect, useState } from 'react'
import PostModal from './PostModal';

const Post = (props) => {
  const{selectedCategory, contents, setContentMark, setCurrentPostId, findCurrentPost,setDeleteAction, setCreateAction, setEditAction, setCommentAction, setCurrentPost, userId} = props

  const [modalOpen, setModalOpen]= useState(false);
const [commentModalOpen, setCommentModalOpen]= useState(false);
const [comment, setComment] = useState("");
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
const updateComment=(event)=>{
  let cmt = event.target.value;
  setComment(()=>cmt);
  console.log("commnet", comment)
}
const commentHandler=(data)=>{
  const currentPost = findCurrentPost();
  const currentPostComment = currentPost.comment?[...currentPost.comment, {userId: userId, content:comment}]:[{userId: userId, content:comment}];
  console.log("leaving comment on ",currentPost);
  console.log("comments ",currentPostComment);
  setCurrentPost(()=>{return{...currentPost, comment: currentPostComment}});
  setCommentAction(true);
  setCreateAction(true);
  setComment("");
}
useEffect(()=>console.log("commentModal", commentModalOpen),[commentModalOpen]);
  return (
    <div className='posts'>
        <div className='post--lists'>
      {dataInCategory.map((data)=>{
      return(
      <div className="postsContainer" key={`${data.postId}Div`}>
        <div className="postContent"id={data.postId} key={data.postId} onClick={()=>postClickHandler(data)} dangerouslySetInnerHTML={{__html: data.body}} ></div>
        
        <div className="commentArea">
          {commentModalOpen&&<div className='commentBox'><input className="commentInput" type="text" placeholder='Type comment here...' value={comment} onChange={updateComment}/><button className='commentSubmit' onClick={commentHandler}>submit</button></div>}
          <ul>
          {data.comment&&data.comment.map((cmt, index)=><li key={`commentLi${data+index}`}><div className="id" key={`commentId${data+index}`}>{cmt.userId}</div><div className="commentBody" key={`commentBody${data+index}`}>{cmt.content}</div></li>)}
          </ul>
        </div>
        <div className='buttons'>
        <button className='commentButton' key={`${data.postId}Comment`} onClick={()=>{setCommentModalOpen(!commentModalOpen);setCurrentPostId(()=>data.postId);}}><i className="fa-regular fa-comment"></i></button>
        <button className='deleteButton' onClick={()=>{deleteHandler(data)}} key={`${data.postId}Delete`}><i className="fa-solid fa-trash-can"></i></button>

        <button key={`${data.postId}Edit`} className='editButton' onClick={()=>{editHandler(data)}}><i className="fa-regular fa-pen-to-square"></i></button>

        </div>

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