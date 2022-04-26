import React, { useEffect, useState } from "react";
import PostModal from "./PostModal";

const Post = (props) => {
  const {
    selectedCategory,
    contents,
    setContentMark,
    setCurrentPostId,
    findCurrentPost,
    setDeleteAction,
    setCreateAction,
    setEditAction,
    setCommentAction,
    setCurrentPost,
    userId,
  } = props;

  const [modalOpen, setModalOpen] = useState(false);
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [CurrentCmtIndex, setCurrentCmtIndex] = useState();
  const dataInCategory = contents.filter(
    (content) => content.category === selectedCategory
  );
  const [IsNewPost, setIsNewPost] = useState(true);
  const postClickHandler = (data) => {
    setCurrentPostId(data.postId);
    openModal();
  };
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const findCurrentDataHTML = () => {
    const currentpost = findCurrentPost();

    return (
      <div
        className={`post--modal ${currentpost.postId}`}
        dangerouslySetInnerHTML={{ __html: currentpost.body }}
      ></div>
    );
  };
  const editHandler = (data) => {
    setCurrentPostId(data.postId);

    setContentMark(false);
  };
  const deleteHandler = (data) => {
    setCurrentPostId(data.postId);
    setDeleteAction(true);
    setCreateAction(true);
    setEditAction(false);
  };
  const newPostHandler = () => {
    setContentMark(false);
    setCurrentPostId(undefined);
    setDeleteAction(false);
    setCreateAction(false);
    setEditAction(false);
  };
  const updateComment = (event) => {
    let cmt = event.target.value;
    setComment(() => cmt);
  };

  const commentHandler = (data) => {
    const currentPost = findCurrentPost();
    let currentPostComment = [];
    if (!IsNewPost) {
      currentPost.comment.map((ele, index) => {
        if (index === CurrentCmtIndex) {
          return currentPostComment.push({
            userId: userId,
            content: comment,
            createdAt: new Date(),
          });
        } else {
          return currentPostComment.push(ele);
        }
      });
    } else {
      currentPostComment = currentPost.comment
        ? [
            ...currentPost.comment,
            { userId: userId, content: comment, createdAt: new Date() },
          ]
        : [{ userId: userId, content: comment, createdAt: new Date() }];
    }

    setCurrentPost(() => {
      return { ...currentPost, comment: currentPostComment };
    });
    setCommentAction(true);
    setCreateAction(true);
    setIsNewPost(true);
    setComment("");
    setCommentModalOpen(false);
  };
  useEffect(() => {
    if (!commentModalOpen) {
      setComment("");
      setCurrentCmtIndex();
    }
  }, [commentModalOpen]);

  useEffect(() => setCommentModalOpen(false), [modalOpen]);
  const textBoxOpen = (index, currentPostData) => {
    const comments = currentPostData.comment;
    const comment = comments[index].content;
    setComment(() => comment);
    setCurrentCmtIndex(() => index);
    setCommentModalOpen(true);
    setIsNewPost(false);
  };

  return (
    <div className="posts">
      <div className="post--lists">
        {dataInCategory.map((data) => {
          return (
            <div className="postsContainer" key={`${data.postId}Div`}>
              <div
                className="postContent"
                id={data.postId}
                key={data.postId}
                onClick={() => postClickHandler(data)}
                dangerouslySetInnerHTML={{ __html: data.body }}
              ></div>

              <div className="commentArea">
                <div className="buttons">
                  <button
                    className="commentButton"
                    key={`${data.postId}Comment`}
                    onClick={() => {
                      setCommentModalOpen(!commentModalOpen);
                      setCurrentPostId(() => data.postId);
                    }}
                  >
                    <i className="fa-regular fa-comment"></i>
                  </button>
                  <button
                    className="deleteButton"
                    onClick={() => {
                      deleteHandler(data);
                    }}
                    key={`${data.postId}Delete`}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>

                  <button
                    key={`${data.postId}Edit`}
                    className="editButton"
                    onClick={() => {
                      editHandler(data);
                    }}
                  >
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                </div>

                {commentModalOpen && data.postId === findCurrentPost().postId && (
                  <div className="commentBox">
                    <textarea
                      className="commentInput"
                      placeholder="Type comment here..."
                      value={comment}
                      onChange={updateComment}
                    />
                    <button className="commentSubmit" onClick={commentHandler}>
                      <i className="fa-regular fa-paper-plane"></i>
                    </button>
                  </div>
                )}
                <ul>
                  {data.comment &&
                    data.comment.map((cmt, index) => (
                      <li key={`commentLi${data + index}`}>
                        <div className="id" key={`commentId${data + index}`}>
                          <p
                            className="comment--userId"
                            key={`commentUserId${data + index}`}
                          >
                            {cmt.userId}
                          </p>
                          <p
                            className="comment--date"
                            key={`commentDate${data + index}`}
                          >
                            {new Date(cmt.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <div
                          className="commentBody"
                          key={`commentBody${data + index}`}
                        >
                          <p
                            className="commentText"
                            key={`commentText${data + index}`}
                          >
                            {cmt.content}
                          </p>
                          <button
                            className={`${data.postId}`}
                            key={`commentEdit${data + index}`}
                            onClick={(event) => {
                              const currentPostData = data;
                              setCurrentPostId(() => event.target.className);
                              textBoxOpen(index, currentPostData);
                            }}
                          >
                            edit
                          </button>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="newPost"
        onClick={() => {
          newPostHandler();
        }}
      >
        New
      </button>
      {modalOpen && (
        <PostModal content={findCurrentDataHTML} closeModal={closeModal} />
      )}
    </div>
  );
};
//
export default Post;
