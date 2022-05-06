import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const NoContent = (props) => {
  const {businessId} = useParams();
  // console.log("query", businessId)
  const { setContentMark, setCurrentPostId } = props;
  const {loggedInUser} = useContext(AuthContext);
  console.log(loggedInUser)
  return (
    <div className="nopost--container">
      <div className="label">No post</div>
      {loggedInUser&&(loggedInUser.businessId===businessId)&&(<div
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
      </div>)}
    </div>
  );
};

export default NoContent;
