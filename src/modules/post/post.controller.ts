import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);
    res.status(201).json(result);
  } catch (e) {
    res.status(400).json({
        error: "Post Creation Failed",
        details: e
    })
  }
};

export const PostController = {
  createPost,
};
