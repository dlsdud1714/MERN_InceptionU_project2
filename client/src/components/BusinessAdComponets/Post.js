import React, { useContext, useEffect, useState } from "react";
import PostModal from "./PostModal";
import TimeAgo from "javascript-time-ago";
import axios from "axios";
import en from "javascript-time-ago/locale/en.json";
import ReactTimeAgo from "react-time-ago";
import { nanoid } from "nanoid";
import AuthContext from "../contexts/AuthContext";
import { useParams } from "react-router-dom";

TimeAgo.addLocale(en);

const Post = (props) => {
  const {
    businessData,
    selectedCategory,
    contents,
    setContentMark,
    setCurrentPostId,
    findCurrentPost,
    // userId,
    setSubmittingAction,
  } = props;

  const [modalOpen, setModalOpen] = useState(false);
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [comment, setComment] = useState("");
  const dataInCategory = contents.filter(
    (content, key) => content.category === selectedCategory
  );
  // const postRef = useRef();
const {loggedInUser} = useContext(AuthContext);
const {businessId} = useParams();
const isBusinessOwner = ()=>{
  return loggedInUser&&(loggedInUser.businessId===businessId)
}
const isCommentOwner = (commentowner)=>{
  return loggedInUser&&(loggedInUser.username===commentowner)
}
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
  const postDeleteHandler = async (postId) => {
    console.log("data to delete", postId);
    const response = await axios.delete(
      `/data/business/post/${businessData._id}/${postId}`
    );
    console.log("post is deleted", response);
    setSubmittingAction(true);
  };
  const newPostHandler = () => {
    setContentMark(false);
    setCurrentPostId(undefined);
  };

  const commentHandler = async (postId) => {
    console.log("comment to send", comment);
    setCommentModalOpen(false);
    if (comment.createdAt) {
      const commentToSend = { ...comment, createdAt: new Date() };
      console.log("editedToSend", commentToSend);
      const editedResponse = await axios.put(
        `/data/business/${businessData._id}/comment/${postId}`,
        commentToSend
      );
      console.log("comment is edited", editedResponse);
      return setSubmittingAction(true);
    } else {
      const commentToSend = {
        commentId: nanoid(),
        userId: loggedInUser.username,
        content: comment.content,
        createdAt: new Date(),
      };
      const createResponse = await axios.post(
        `/data/business/${businessData._id}/comment/${postId}`,
        commentToSend
      );
      console.log("comment is created", createResponse);
      return setSubmittingAction(true);
    }
  };
  const commentDeleteHander = async (postId, dataTodelete) => {
    console.log("delete", dataTodelete);
    const deleteCmtResponse = await axios.patch(
      `/data/business/${businessData._id}/comment/${postId}`,
      dataTodelete
    );
    console.log("Comment is deleted", deleteCmtResponse);
    return setSubmittingAction(true);
  };

  useEffect(() => {
    if (!commentModalOpen) {
      setComment("");
    }
  }, [commentModalOpen]);

  useEffect(() => setCommentModalOpen(false), [modalOpen]);
  const textBoxOpen = (index, currentPostData) => {
    const comments = currentPostData.comment;
    const comment = comments[index];
    setComment((pre) => comment);
    setCommentModalOpen(true);
  };

  // useEffect(() => {
  //   console.log("ref", postRef);
  //   postRef.current.focus();
  // }, [postRef.current]);

  return (
    <div className="posts">
      <div className="post--lists">
        {dataInCategory.map((data) => {
          return (
            <div
              // ref={postRef}
              className="postsContainer"
              key={`${data.postId}Div`}
            >
              <div
                className="postContent"
                id={data.postId}
                key={data.postId}
                onClick={() => postClickHandler(data)}
                dangerouslySetInnerHTML={{ __html: data.body }}
              ></div>

              <div className="commentArea" key={`${data.postId}--commentArea`}>
                <div className="buttons" key={`${data.postId}--buttons`}>
                  {loggedInUser&&<button
                    className="commentButton"
                    key={`${data.postId}Comment`}
                    onClick={() => {
                      setCommentModalOpen(!commentModalOpen);
                      setCurrentPostId(() => data.postId);
                    }}
                  >
                    <i
                      className="fa-regular fa-comment"
                      key={`${data.postId}--commentIcon`}
                    ></i>
                  </button>}
                  {isBusinessOwner()&&<button
                    className="deleteButton"
                    onClick={() => {
                      const dataIdToDelete = data.postId;
                      postDeleteHandler(dataIdToDelete);
                    }}
                    key={`${data.postId}Delete`}
                  >
                    <i
                      className="fa-solid fa-trash-can"
                      key={`${data.postId}--deleteIcon`}
                    ></i>
                  </button>}

                  {isBusinessOwner()&&<button
                    key={`${data.postId}Edit`}
                    className="editButton"
                    onClick={() => {
                      editHandler(data);
                    }}
                  >
                    <i
                      className="fa-regular fa-pen-to-square"
                      key={`${data.postId}--editIcon`}
                    ></i>
                  </button>}
                </div>

                {commentModalOpen && (
                  <div className="commentBox">
                    <textarea
                      className="commentInput"
                      placeholder="Type comment here..."
                      value={comment.content}
                      onChange={(event) => {
                        let cmt = event.target.value;
                        setComment((pre) => {
                          return { ...pre, content: cmt };
                        });
                      }}
                    />
                    <button
                      className="commentSubmit"
                      onClick={() => {
                        commentHandler(data.postId);
                      }}
                    >
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
                          <ReactTimeAgo
                            className="comment--date"
                            key={`commentDate${data + index}`}
                            date={new Date(cmt.createdAt)}
                            locale="en-US"
                          />
                        </div>
                        <div
                          className="commentBody"
                          key={`commentBody${data + index}`}
                        >
                          <div
                            className="commentText"
                            key={`commentText${data + index}`}
                          >
                            {cmt.content}
                          </div>
                          {isCommentOwner(cmt.userId)&&(<button
                            className={`${data.postId}`}
                            key={`commentEdit${data + index}`}
                            onClick={(event) => {
                              const currentPostData = data;
                              setCurrentPostId(() => data.postId);
                              textBoxOpen(index, currentPostData);
                            }}
                          >
                            edit
                          </button>)}
                          {isCommentOwner(cmt.userId)&&(<button
                            className={`${data.postId}`}
                            key={`commentDelete${data + index}`}
                            onClick={() => {
                              const currentPostData = cmt;
                              const postId = data.postId;
                              // setCurrentPostId(() => data.postId);
                              commentDeleteHander(postId, currentPostData);
                            }}
                          >
                            delete
                          </button>)}
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      {isBusinessOwner()&&<button
        className="newPost"
        onClick={() => {
          newPostHandler();
        }}
      >
        New
      </button>}
      {modalOpen && (
        <PostModal content={findCurrentDataHTML} closeModal={closeModal} />
      )}
    </div>
  );
};
//
export default Post;
