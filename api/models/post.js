const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  image: { 
    type: String, 
  },
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("post", postSchema);
