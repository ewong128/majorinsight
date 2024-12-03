import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
import { Post } from "models";
// import post from "./routes/post";

// import { PostPage } from "./pages/post";
// import Post from "./services/post-svc";

// // with the other routes:
// app.get("/post/:userid", (req: Request, res: Response) => {
//   const { userid } = req.params;

//   post.get(userid).then((data) => {
//     res
//       .set("Content-Type", "text/html")
//       .send(PostPage.render(data));
//   });
// });

connect("reviews"); 
const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.static(staticDir));

// Middleware:
app.use(express.json());
// Need to fix below because it is not working
// app.use("/api/post", post);

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});




// There is an issue here, for some reason can't find the Post Model
// function index(): Promise<Post[]> {
//   return PostModel.find();
// }

// function get(name: String): Promise<Post> {
//   return PostModel.find({ name })
//     .then((list) => list[0])
//     .catch((err) => {
//       throw `${name} Not Found`;
//     });
// }

// export default { index, get };