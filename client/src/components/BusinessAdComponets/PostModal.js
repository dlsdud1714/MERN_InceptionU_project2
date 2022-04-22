import React from 'react'

const PostModal = (props) => {

  const {content, closeModal} = props;

  return (
    <div className='postModal'>
      {content()}
      <button className='close' onClick={closeModal}>Close</button>
    </div>
  )
}

export default PostModal