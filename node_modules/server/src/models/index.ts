import { PostPage } from "pages/post";
// import { getPost } from "services/post-svc";

export * from "./post";

// Need to figure out the following [POST 11.8]{LAB 9}

// app.get(
//     "/post/:postId",
//     (req: Request, res: Response) => {
//       const { destId } = req.params;
//       const data = getPost(destId);
//       const page = new PostPage(data);
  
//       res.set("Content-Type", "text/html").send(page.render());
//     }
//   );