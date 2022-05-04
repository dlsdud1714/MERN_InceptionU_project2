import React, { useEffect, useState } from "react";
import Split from "react-split";
import BusinessSidebar from "./BusinessAdComponets/BusinessSidebar";
import Editor from "./BusinessAdComponets/Editor";
import Post from "./BusinessAdComponets/Post";

import axios from "axios";

const BusinessAd = (props) => {
  const { businessData } = props;
  //This userinfo will be passed in props
  const userInfo = {
    userId: "inyoung@yyc.com",
    password: 1111,
    type: "client",
    license: "aaaa",
  };

  const [contentMark, setContentMark] = useState(true);
  const [userinputs, setUserInputs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [currentPostId, setCurrentPostId] = useState("");
  const [submittingAction, setSubmittingAction] = useState(false);

  function findCurrentPost() {
    return userinputs.find((userinput) => userinput.postId === currentPostId);
  }

  //setCategory - no duplicated values
  useEffect(() => {
    setCategoryList((pre) => {
      let list = [];
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
        return setUserInputs(savedBusinessData);
      }
    }
    getFromServer();
    setSubmittingAction(false);
  }, [businessData, submittingAction]);

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
            businessData={businessData}
            contents={userinputs}
            selectedCategory={selectedCategory}
            setContentMark={setContentMark}
            setCurrentPostId={setCurrentPostId}
            findCurrentPost={findCurrentPost}
            userId={userInfo.userId}
            setSubmittingAction={setSubmittingAction}
          />
        ) : (
          <Editor
            businessData={businessData}
            setContentMark={setContentMark}
            categoryList={categoryList}
            currentPostId={currentPostId}
            findCurrentPost={findCurrentPost}
            setSubmittingAction={setSubmittingAction}
          />
        )}
      </Split>
    </div>
  );
};

export default BusinessAd;
