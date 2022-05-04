import React from 'react'
import { CloseButton } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


const PostModal = (props) => {

  const {content, closeModal} = props;

  return (
    <div className='postModal'>
      {content()}
      <CloseButton onClick={closeModal}/>
      
    </div>
  )
}

export default PostModal