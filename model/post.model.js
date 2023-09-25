const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  device: String,
  userId: String,
  userEmail: String,
  userName: String,
});

const PostModel = new mongoose.model("post", postSchema);

module.exports = { PostModel };
