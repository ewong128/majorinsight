"use strict";
var import_mongoose = require("mongoose");
const PostSchema = new import_mongoose.Schema(
  {
    // userid: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    // nickname: { type: String, trim: true },
    major: { type: String, trim: true },
    review: [String]
  },
  { collection: "review" }
);
const PostModel = (0, import_mongoose.model)("Profile", PostSchema);
function create(json) {
  const t = new PostModel(json);
  return t.save();
}
function update(userid, post) {
  return PostModel.findOneAndUpdate({ userid }, post, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${userid} not updated`;
    else return updated;
  });
}
function remove(userid) {
  return PostModel.findOneAndDelete({ userid }).then(
    (deleted) => {
      if (!deleted) throw `${userid} not deleted`;
    }
  );
}
