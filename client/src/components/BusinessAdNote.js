import React, { useEffect, useState } from "react";
import Split from "react-split";
import BusinessSidebar from "./BusinessAd/BusinessSidebar";
import Editor from "./BusinessAd/Editor2";
import Post from "./BusinessAd/Post";
import { nanoid } from "nanoid";
// import EditorSide from './EditorSide';

const BusinessAdNote = (props) => {
  const { business } = props;

  const [contentMark, setContentMark] = useState(false);
  const [userinputs, setUserInputs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [currentPostId, setCurrentPostId] = useState('');

   useEffect(()=>console.log("posts", userinputs),[userinputs])

  const createPost = (category, body) => {
    const newInputs = {
      title: business.title,
      business_id: business._id,
      postId: nanoid(),
      category: category,
      body: body,
    };
    setUserInputs((pre) => [...pre, newInputs]);
    setCurrentPostId(()=>newInputs.postId);
  };

  // const findCurrentPost = () => {
  //   return userinputs.find((userinput)=>userinput.postId===currentPostId)
  // };

//setCategory - no duplicated values
  useEffect(()=> {setCategoryList((pre)=>{
    let list =[]
     userinputs.map((userinput)=>list.push(userinput.category));
     const deduped = Array.from(new Set(list))
     return deduped
  })},[userinputs])

  return (
    <div className="businessAdNote">
      <Split sizes={[30, 70]} direction="horizontal" className="split">
        <BusinessSidebar
          business={business}
          categoryList={categoryList}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {contentMark ? (
          <Post
            contents={userinputs}
            selectedCategory={selectedCategory}
            setContentMark={setContentMark}
          />
        ) : (
          <Editor
            createPost={createPost}
            setContentMark={setContentMark}
          />
        )}
      </Split>
    </div>
  );
};

export default BusinessAdNote;
