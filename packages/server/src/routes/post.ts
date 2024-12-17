import express, { Request, Response } from "express";
import { Post } from "../models/post";

// Need to uncomment after changing some stuff [There is some issue need to fix]
// import Post from "../services/post-svc";



// Need to fix this to portray my project!!!!

// router.get("/", (_, res: Response) => {
//     Travelers.index()
//       .then((list: Traveler[]) => res.json(list))
//       .catch((err) => res.status(500).send(err));
//   });
  
//   router.get("/:userid", (req: Request, res: Response) => {
//     const { userid } = req.params;
  
//     Travelers.get(userid)
//       .then((traveler: Traveler) => res.json(traveler))
//       .catch((err) => res.status(404).send(err));
//   });



// Need to fix this, part of lab 11
// router.post("/", (req: Request, res: Response) => {
//     const newTraveler = req.body;
  
//     Post.create(newTraveler)
//       .then((traveler: Post) =>
//         res.status(201).json(traveler)
//       )
//       .catch((err) => res.status(500).send(err));
//   });



// Curl Functionality [LAB 11]

// curl --request POST --header "Content-Type: application/json" \
// --data '{"userid":"blaze","name":"Blaze Pasquale","city":"Oakland, CA", \
// "airports":["SFO", "OAK", "SJC"]}' \
// http://localhost:3000/api/travelers

// curl --request POST --header "Content-Type: application/json" \
// --data '{"userid":"izzy","name":"Isabel Nuton","nickname":"Izzy", \
// "city":"San Miguel de Allende, Gto., Mexico","airports": ["BJX", "QRO"]}' \
// http://localhost:3000/api/travelers

// curl --request POST --header "Content-Type: application/json" \
// --data '{"userid":"mondy","name":"Pia Mondrian","nickname":"Mondy", \
// "city":"Ventura, CA","airports": ["LAX"]}' \
// http://localhost:3000/api/travelers



// Need to fix as the following has error 
// app.put("/:userid", (req: Request, res: Response) => {
//     const { userid } = req.params;
//     const newTraveler = req.body;
  
//     Post
//       .update(userid, newPost)
//       .then((post: Post) => res.json(post))
//       .catch((err) => res.status(404).end());
//   });


// Need to fix the naming convention, but besides that it should work
// router.delete("/:userid", (req: Request, res: Response) => {
//     const { userid } = req.params;
  
//     Post.remove(userid)
//       .then(() => res.status(204).end())
//       .catch((err) => res.status(404).send(err));
//   });

const router = express.Router();
_authObserver = new Observer(this, "blazing:auth");

connectedCallback() {
  this._authObserver.observe(({ user }) => {
    if (user && user.username !== this.userid) {
      this.userid = user.username;
    }
  });
}