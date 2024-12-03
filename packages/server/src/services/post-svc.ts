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