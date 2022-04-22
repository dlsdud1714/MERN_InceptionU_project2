const mongoose = require('mongoose');
const {model, Schema} = mongoose

const businessPostSchema = new Schema({
    businessId: {type: String, unique:true},
    data: {type: Array, default: []}
})


const businessPosts = model("BusinessPost", businessPostSchema )

const createPosts = async(data) =>{
    const posts= businessPosts.create(data);
    return posts;
}
const findBusinessPosts=async(id)=>{
    const posts = businessPosts.find({businessId:id})
    return posts
}

module.exports={createPosts, findBusinessPosts}