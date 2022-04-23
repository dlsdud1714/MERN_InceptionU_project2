import React, { useEffect, useState } from "react";
import Split from "react-split";
import BusinessSidebar from "./BusinessAdComponets/BusinessSidebar";
import Editor from "./BusinessAdComponets/Editor";
import Post from "./BusinessAdComponets/Post";
import { nanoid } from "nanoid";
import axios from "axios";

const BusinessAd = (props) => {
  const { businessData } = props;

  const [contentMark, setContentMark] = useState(false);
  const [userinputs, setUserInputs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [currentPostId, setCurrentPostId] = useState("");
  const [createAction, setCreateAction] = useState(false);
  const [editAction, setEditAction] = useState(false);
  const [deleteAction, setDeleteAction] = useState(false);
  const [currentPost, setCurrentPost] =useState();

  const createPost = (category, body, postId) => {
    const newInputs = {
      title: businessData.title,
      business_id: businessData._id,
      postId: postId||nanoid(),
      category: category,
      body: body,
    };
    setCurrentPost(newInputs);
  };
  
  function findCurrentPost() {
    return userinputs.find((userinput) => userinput.postId === currentPostId);
  }
   //setCategory - no duplicated values
   useEffect(() => {
    setCategoryList((pre) => {
      let list = [];
      userinputs &&
        userinputs.map((userinput) => list.push(userinput.category));
      const deduped = Array.from(new Set(list));
      return deduped;
    });
  }, [userinputs]);

  useEffect(() => {
    async function getFromServer() {
      if (!businessData) {
        return;
      }
      const res = await axios.get(`/data/businessPosts/${businessData._id}`);

      if (res.data.data[0]) {
        const savedBusinessData = await res.data.data[0].data;
        return setUserInputs(savedBusinessData || []);
      }
    }
    getFromServer();
  }, [businessData]);

  //CRUD
//-----create N delete-------
  useEffect(() => {
    const createdPostToServer = () => {
       const presentPost = findCurrentPost();
       console.log("create and delete", createAction, deleteAction);
      const sendToServer = async () => {
        await axios.post(
          `/data/businessPosts/${businessData._id}`,
          {create: createAction, delete: deleteAction, data: deleteAction?presentPost:currentPost}
        );
      
      };
      sendToServer();
    };
    createAction === true && createdPostToServer();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createAction, deleteAction]);
//----------update----------
  useEffect(() => {
    const editedPostToServer = () => {
      console.log("currentpost to send(edit)",currentPost)
      const sendToServer = async () => {
        await axios.patch(
          `/data/businessPosts/${businessData._id}`,
          currentPost
        );
      };
      sendToServer()
    };
    editAction === true && editedPostToServer();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editAction]);

  console.log(`editAction is${editAction}, createAction is${createAction}, deleteAtion is${deleteAction}`);

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
