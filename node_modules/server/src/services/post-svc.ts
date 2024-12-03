import { Schema, model } from "mongoose";
import { Post } from "../models/post";

const PostSchema = new Schema<Post>(
  {
    // userid: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    // nickname: { type: String, trim: true },
    major: { type: String, trim: true },
    review: [String],
  },
  { collection: "review" }
);

const PostModel = model<Post>("Profile", PostSchema);

function create(json: Post): Promise<Post> {
  const t = new PostModel(json);
  return t.save();
}


// Part of the PUT method in Lab 11 [maybe need to fix]
function update(
  userid: String,
  post: Post
): Promise<Post> {
  return PostModel.findOneAndUpdate({ userid }, post, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${userid} not updated`;
    else return updated as Post;
  });
}


function remove(userid: String): Promise<void> {
  return PostModel.findOneAndDelete({ userid }).then(
    (deleted) => {
      if (!deleted) throw `${userid} not deleted`;
    }
  );
}

// Put the line below on the bottom of file, there are errors because there are some stuff missing, need to fix
// export default { index, get, create, update, remove };





// const posts = {
//   ceng: {
//     name: "Emmy",
//     datePosted: new Date("2024-10-14"),
//     graduation: new Date("2024-10-17"),
//     Major: [
//       {
//         name: "Computer Science",
//         datePosted: new Date("2024-10-14"),
//         rating: 4
//       }
//     ],
//     comment: [
//       {
//         name: "Emmy",
//         type: "Helpful"
//       },
//       {
//         name: "Hayden",
//         type: "Unhelpful"
//       }
//     ]
//   },
//   caed: { /* no data */ },
// };

// export function getPost(_: string) {
//   return posts["ceng"];
// }