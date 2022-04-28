import React, { useEffect, useState } from "react";
import Split from "react-split";
import BusinessSidebar from "./BusinessAdComponets/BusinessSidebar";
import Editor from "./BusinessAdComponets/Editor";
import Post from "./BusinessAdComponets/Post";
import { nanoid } from "nanoid";
import axios from "axios"

const BusinessAd = (props) => {
  const { businessData } = props;
  //This userinfo will be passed in props
  const userInfo = {userId: "inyoung@yyc.com", password: 1111, type: "client", license:"aaaa"}

  const [contentMark, setContentMark] = useState(true);
  const [userinputs, setUserInputs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [currentPostId, setCurrentPostId] = useState("");
  const [createAction, setCreateAction] = useState(false);
  const [editAction, setEditAction] = useState(false);
  const [deleteAction, setDeleteAction] = useState(false);
  const [currentPost, setCurrentPost] = useState();
 const [commentAction, setCommentAction] = useState(false);
// useEffect(()=>console.log("current post in in ad.js", currentPostId, findCurrentPost()),[currentPostId]);
  const createPost = (category, body, postId, comment) => {
    const newInputs = {
      title: businessData.title,
      business_id: businessData._id,
      postId: postId || nanoid(),
      category: category,
      body: body,
      comment: comment
    };
    setCurrentPost(newInputs);
  };

  function findCurrentPost() {
    return userinputs.find((userinput) => userinput.postId === currentPostId);
  }

  //setCategory - no duplicated values
  useEffect(() => {
    setCategoryList((pre) => {
      // console.log("userinputs", userinputs);
      let list = [];
      userinputs.map((userinput, key) => list.push(userinput.category));
      const deduped = Array.from(new Set(list));
      return deduped;
    });
  }, [userinputs]);

  
  async function getFromServer() {
    if (!businessData) {
      return;
    }
    const res = await axios.get(`/data/businessPosts/${businessData._id}`);

    if (res.data.data[0]) {
      const savedBusinessData = await res.data.data[0].data;
      // console.log("Getting data from server...", savedBusinessData);
      return setUserInputs(savedBusinessData);
    }
  }
  useEffect(() => {
    getFromServer();
  }, [businessData]);

  //CRUD
  //-----create N delete-------
  useEffect(() => {
    const createdPostToServer = async () => {
      const presentPost = findCurrentPost();
      // console.log("create and delete", createAction, deleteAction);
      const sendToServer = async () => {
        const first= await axios.post(`/data/businessPosts/${businessData._id}`, {
          create: createAction,
          delete: deleteAction,
          comment: commentAction,
          userInfo: userInfo,
          data: deleteAction ? presentPost : currentPost,
        });
        return console.log('first', first);
      };
      await sendToServer();
      getFromServer();
    };
    createAction === true && createdPostToServer();
    setDeleteAction(false);
    setCreateAction(false);
    setCommentAction(false);
    
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createAction, deleteAction, commentAction]);
  //----------update----------
  useEffect(() => {
    const editedPostToServer = async () => {
      // console.log("currentpost to send(edit)", currentPost);
      const sendToServer = async () => {
        const second = await axios.patch(
          `/data/businessPosts/${businessData._id}`,
          currentPost
          );
          // console.log("waiting update from server")
        return console.log("second", second)
      };
      await sendToServer();
      getFromServer();
      // console.log("got new inputs from server")
    };
    editAction === true && editedPostToServer();
    setEditAction(false);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editAction]);

// useEffect(()=>{
//   console.log(
//     `editAction is${editAction}, createAction is${createAction}, deleteAtion is${deleteAction}`
//   );
// },[editAction, createAction, deleteAction])

  return (
    <div className="businessAdNote">
      <Split sizes={[30, 70]} direction="horizontal" className="split">
        <BusinessSidebar
          business={businessData}
          categoryList={categoryList}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setContentMark={setContentMark}
        />
        {contentMark ? (
          <Post
            contents={userinputs}
            selectedCategory={selectedCategory}
            setContentMark={setContentMark}
            setCurrentPostId={setCurrentPostId}
            findCurrentPost={findCurrentPost}
            setCreateAction={setCreateAction}
            setEditAction={setEditAction}
            setDeleteAction={setDeleteAction}
            setCommentAction={setCommentAction}
            setCurrentPost={setCurrentPost}
            userId={userInfo.userId}
            // currentPostId={currentPostId}
          />
        ) : (
          <Editor
            createPost={createPost}
            setContentMark={setContentMark}
            categoryList={categoryList}
            currentPostId={currentPostId}
            setCreateAction={setCreateAction}
            setEditAction={setEditAction}
            findCurrentPost={findCurrentPost}
            setDeleteAction={setDeleteAction}
          />
        )}
      </Split>
    </div>
  );
};

export default BusinessAd; 
