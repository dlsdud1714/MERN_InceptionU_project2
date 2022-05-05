const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const businessPostSchema = new Schema({
  businessId: { type: String, unique: true },
  data: [
    {
      postId: {type: String, required:true, unique:true},
      category: String,
      body: String,
      comment: {type:Array, default:null}
    },
  ],
});

const businessPosts = model("BusinessPost", businessPostSchema);

const createPosts = async (data) => {
  const posts = await businessPosts.create(data);
  
  return posts;
};
const findBusinessPosts = async (id) => {
  const posts = await businessPosts.find({ businessId: id });
  return posts;
};

const addBusinessPost = async (id, data) => {
  const added = await businessPosts.findOneAndUpdate(
    { businessId: id },
    { $push: { data: data } }
  );
  return added;
};
const updateBusinessPosts = async (id, postId, data) => {
  const updated = await businessPosts.findOneAndUpdate(
    { businessId: id, "data.postId": postId },
    { $set: { "data.$": data } },
    { new: true }
  );
  return updated
  };


const deleteBusinessPost = async (id, postId) => {
  const deleted = await businessPosts.findOneAndUpdate(
    { businessId: id },
    { $pull: { data: {postId: postId}  }}
  );
  return deleted;
};

const addCommentBusinessPost= async(id, postId, data)=>{
  const added= await businessPosts.findOneAndUpdate( 
    {businessId: id, "data.postId": postId},
    {$push: {"data.$.comment": data}}
  );
  return added
}
const updateCommentBusinessPost=async(id, postId, data )=>{
  console.log("updating comments")
  const updated= await businessPosts.findOneAndUpdate(
    { "businessId": id, "data": {'$elemMatch':{ 'postId': postId , "comment.commentId": data.commentId}  }},
    {$set:{"data.$[outer].comment.$[inner]": data}},
    {arrayFilters:[{"outer.postId": postId}, {"inner.commentId": data.commentId}]});
    return updated
}

const deleteCommentBusinessPost = async(id, postId, data)=>{
  console.log("deleting comment");
  const deleted = await businessPosts.findOneAndUpdate(
    { "businessId": id, "data.postId": postId  },
    {$pull:{"data.$.comment": data}},
    );
    return deleted
}

module.exports = {
  createPosts,
  findBusinessPosts,
  addBusinessPost,
  updateBusinessPosts,
  deleteBusinessPost,
  addCommentBusinessPost,
  updateCommentBusinessPost,
  deleteCommentBusinessPost
};
