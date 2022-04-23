const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const businessPostSchema = new Schema({
  businessId: { type: String, unique: true },
  data: [
    {
      title: String,
      business_id: String,
      postId: { type: String, unique: true },
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
const updataBusinessPosts = async (id, postId, data) => {
  const dataMongo = await businessPosts.find({ businessId: id });
  const dataArray = await dataMongo[0].data;
  const updatePartial = dataArray.map(async (ele) => {
    if (ele.postId === postId) {
      console.log("inside of condition");
      const updated = await businessPosts.findOneAndUpdate(
        { businessId: id, "data.postId": postId },
        { $set: { "data.$": data } },
        { new: true }
      );
      return updated;
    }
  });
  const IsThereData = dataArray.find((ele) => ele.postId === postId);
  const posts =async()=> await businessPosts.updateOne({businessId: id},{$push:{data: data}});
  return IsThereData === undefined?posts():updatePartial

};

module.exports = { createPosts, findBusinessPosts, updataBusinessPosts };
