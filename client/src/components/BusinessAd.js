import React, { useEffect, useState } from "react";
import Split from "react-split";
import BusinessSidebar from "./BusinessAdComponets/BusinessSidebar";
import Editor from "./BusinessAdComponets/Editor";
import Post from "./BusinessAdComponets/Post";
import { nanoid } from "nanoid";
import axios from "axios";
// import EditorSide from './EditorSide';

const BusinessAd = (props) => {
  const { businessData } = props;

  const [contentMark, setContentMark] = useState(false);
  const [userinputs, setUserInputs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [currentPostId, setCurrentPostId] = useState("");
  
  useEffect(() => {
    if (!businessData) {
      return;
    }
    const sendToServer = async (data) => {
      const response = await axios.post("/data/businessPosts", data);
      return console.log("response", response);
    };
    sendToServer({ businessId: businessData._id, data: userinputs[userinputs.length-1] });
  }, [userinputs]);

  useEffect(() => {
    async function getFromServer() {
      if (!businessData) {
        return;
      }
      const res = await axios.get(`/data/businessPosts/${businessData._id}`);
      
      if(res.data.data[0]){
      const savedBusinessData = await res.data.data[0].data;
        return setUserInputs(savedBusinessData||[]);
      }
    }
    getFromServer();
  }, [businessData]);

  const createPost = (category, body) => {

    const newInputs = {
      title: businessData.title,
      business_id: businessData._id,
      postId: nanoid(),
      category: category,
      body: body,
    };
    setUserInputs((pre) => [...pre, newInputs]);
    setCurrentPostId(() => newInputs.postId);
  };

  const findCurrentPost = () => {
    return userinputs.find((userinput) => userinput.postId === currentPostId);
  };

  const updatePost=(postid, newCategory, newBody)=>{
    setUserInputs((pre)=>{
      return pre.map((post)=>{
        if(post.postId=== postid){
          return {...post,body:newBody,category:newCategory}
        }else{
          return post
        }
        })})};
console.log("inputs",userinputs)
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
          />
        ) : (
          <Editor
            createPost={createPost}
            setContentMark={setContentMark}
            categoryList={categoryList}
            currentPostId={currentPostId}
            findCurrentPost={findCurrentPost}
            updatePost={updatePost}
          />
        )}
      </Split>
    </div>
  );
};

export default BusinessAd;
