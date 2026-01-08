// import * as likesModel from '../models/likes.model.js';

import { LikesModel } from '../models/likes.model.js';

const PAGE_ID = 'mi_pagina_unica';

export const LikeController = {

  async getLikes(req, res) {
    const total = await LikesModel.countByPage(PAGE_ID);
    res.json({ total });
  },

  async addLike(req, res) {
    await LikesModel.addLike(PAGE_ID, req.ip);
    res.sendStatus(201);
  }

};



// export async function getStatus(req, res) {
//   try {
//     const { page_id } = req.query;
//     const userIp = req.ip;

//     const liked = await likesModel.isLiked(page_id, userIp);
//     const total = await likesModel.countLikes(page_id);

//     res.json({ liked, total });
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// }

// export async function toggleLike(req, res) {
//   try {
//     const { page_id } = req.body;
//     const userIp = req.ip;

//     const exists = await likesModel.isLiked(page_id, userIp);

//     if (exists) {
//       await likesModel.removeLike(page_id, userIp);
//     } else {
//       await likesModel.addLike(page_id, userIp);
//     }

//     const total = await likesModel.countLikes(page_id);

//     res.json({
//       liked: !exists,
//       total
//     });
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// }
