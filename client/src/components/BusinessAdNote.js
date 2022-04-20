import React, { useEffect, useState } from "react";
import Split from "react-split";
import BusinessSidebar from "./BusinessAd/BusinessSidebar";
import Editor from "./BusinessAd/Editor2";
import Post from "./BusinessAd/Post";
import { nanoid } from "nanoid";
// import EditorSide from './EditorSide';

const BusinessAdNote = (props) => {
  const { business } = props;
  //console.log(business)
  const [contentMark, setContentMark] = useState(false);
  const [userinputs, setUserInputs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  //const [currentPostId, setCurrentPostId] = useState('');
  useEffect(() => console.log("useinputs",userinputs, [userinputs]));
  // useEffect(() => console.log("categoryList",categoryList, [userinputs]));

  const createPost = (category, body) => {
    const newInputs = {
      title: business.title,
      business_id: business._id,
      postId: nanoid(),
      category: category,
      body: body,
    };
    setUserInputs((pre) => [...pre, newInputs]);
    //setCurrentPostId(()=>newInputs.id);
  };

  const findCategory = () => {};

  return (
    <div className="businessAdNote">
      <Split sizes={[30, 70]} direction="horizontal" className="split">
        <BusinessSidebar
          business={business}
          contents={userinputs}
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
            contents={userinputs}
            createPost={createPost}
            setContentMark={setContentMark}
            setCategoryList={setCategoryList}
          />
        )}
      </Split>
    </div>
  );
};

export default BusinessAdNote;
