//import {Post} from "../post"
export interface Post {
  name: string;
  datePosted: Date;
  graduation:Date;
  major:string;
  review: string;

}

export interface Major {
  major: string;
  datePosted: Date;
  rating: 1 | 2 | 3 | 4 | 5;
  comments: Array<comment>;
}


export interface comment {
  name: string;
  type: CommentType;
}

export type CommentType =
  | "very helpful"
  | "helpful"
  | "neutral"
  | "unhelpful"
  | "very not helpful"
  | "bias"
  | undefined;