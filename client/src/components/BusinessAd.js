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
  const [userinputs, setUserInputs] = useState(getFromlocalDB() || []);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [currentPostId, setCurrentPostId] = useState("");
  useEffect(
    () => {
      console.log("businessdata",businessData)
      if(!businessData){
        return}
        console.log("inside of userEffect")
      sendToServer({ businessId: businessData._id, data: userinputs })
    },
    [userinputs]
  );

  const sendToServer = async (data) => {
    const response = await axios.post("/data/businessPosts", data);
    return console.log("response",response);
  };

  //---------need to replace
  function saveTolocalDB(data) {
    const res = JSON.stringify(data);
    localStorage.setItem("posts", res);
  }

  function getFromlocalDB() {
    const res = localStorage.getItem("posts");
    const data = JSON.parse(res);
    return data;
  }
  ///--------
  //console.log("userinputs", userinputs);

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

  //setCategory - no duplicated values
  useEffect(() => {
    setCategoryList((pre) => {
      let list = [];
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
          />
        )}
      </Split>
    </div>
  );
};

export default BusinessAd;
