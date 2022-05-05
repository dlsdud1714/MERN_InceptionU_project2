import React from "react";

const NoContent = (props) => {
  const { setContentMark, setCurrentPostId } = props;
  return (
    <div className="nopost--container">
      <div className="label">No post</div>
      <div
        className="onlyOwner"
        style={{
          marginTop: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="label--newpost">
          Customers are waiting for your first post!!
        </div>
        <button
          className="newPost"
          onClick={() => {
            setContentMark(false);
            setCurrentPostId(undefined);
          }}
        >
          New
        </button>
      </div>
    </div>
  );
};

export default NoContent;
