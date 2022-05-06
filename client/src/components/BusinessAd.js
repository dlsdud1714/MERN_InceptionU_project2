import React, { useEffect, useMemo, useState } from "react";
import Split from "react-split";
import BusinessSidebar from "./BusinessAdComponets/BusinessSidebar";
import Editor from "./BusinessAdComponets/Editor";
import Post from "./BusinessAdComponets/Post";
import axios from "axios";
import NoContent from "./BusinessAdComponets/NoContent";


const BusinessAd = (props) => {
  const { businessData } = props;
  //This userinfo will be passed in props

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
    userinputs && setSelectedCategory(userinputs[0]?.category);
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
// console.log("business query", userinputs, "d" ,userinputs.includes(ele=>ele.businessId===businessId))
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
          userinputs.length ===0 ? (
            <NoContent
              setContentMark={setContentMark}
              setCurrentPostId={setCurrentPostId}
            />
          ) : (
            <Post
              businessData={businessData}
              contents={userinputs}
              selectedCategory={selectedCategory}
              setContentMark={setContentMark}
              setCurrentPostId={setCurrentPostId}
              findCurrentPost={findCurrentPost}
              setSubmittingAction={setSubmittingAction}
            />
          )
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
