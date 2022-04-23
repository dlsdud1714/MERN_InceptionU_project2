const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const businessPostSchema = new Schema({
  businessId: { type: String, unique: true },
  data: [
    {
      title: String,
      business_id: String,
      postId: String,
      category: String,
      body: String,
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


const deleteBusinessPost = async (id, postId, data) => {
  const deleted = await businessPosts.findOneAndUpdate(
    { businessId: id },
    { $pull: { "data": data } }
  );
  return deleted;
};

module.exports = {
  createPosts,
  findBusinessPosts,
  addBusinessPost,
  updateBusinessPosts,
  deleteBusinessPost,
};
