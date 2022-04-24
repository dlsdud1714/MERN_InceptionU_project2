import React, { useEffect, useState } from "react";
import Split from "react-split";
import BusinessSidebar from "./BusinessAdComponets/BusinessSidebar";
import Editor from "./BusinessAdComponets/Editor";
import Post from "./BusinessAdComponets/Post";
import { nanoid } from "nanoid";
import axios from "axios"

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
  const [currentPost, setCurrentPost] = useState();
 

  const createPost = (category, body, postId) => {
    const newInputs = {
      title: businessData.title,
      business_id: businessData._id,
      postId: postId || nanoid(),
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
      console.log("userinputs", userinputs);
      let list = [];
      userinputs.map((userinput) => list.push(userinput.category));
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
      console.log("Getting data from server...", savedBusinessData);
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
      console.log("create and delete", createAction, deleteAction);
      const sendToServer = async () => {
        const first= await axios.post(`/data/businessPosts/${businessData._id}`, {
          create: createAction,
          delete: deleteAction,
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
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createAction, deleteAction]);
  //----------update----------
  useEffect(() => {
    const editedPostToServer = async () => {
      console.log("currentpost to send(edit)", currentPost);
      const sendToServer = async () => {
        const second = await axios.patch(
          `/data/businessPosts/${businessData._id}`,
          currentPost
          );
          console.log("waiting update from server")
        return console.log("second", second)
      };
      await sendToServer();
      getFromServer();
      console.log("got new inputs from server")
    };
    editAction === true && editedPostToServer();
    setEditAction(false);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editAction]);

useEffect(()=>{
  console.log(
    `editAction is${editAction}, createAction is${createAction}, deleteAtion is${deleteAction}`
  );
},[editAction, createAction, deleteAction])

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
