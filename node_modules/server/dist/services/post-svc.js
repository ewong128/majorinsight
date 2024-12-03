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
