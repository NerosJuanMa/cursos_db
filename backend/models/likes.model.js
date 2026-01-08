import pool from '../config/db.js';

export const LikesModel = {

  async countByPage(pageId) {
    const [[row]] = await pool.query(
      'SELECT COUNT(*) AS total FROM likes WHERE page_id = ?',
      [pageId]
    );
    return row.total;
  },

  async addLike(pageId, userIp) {
    try {
      await pool.query(
        'INSERT INTO likes (page_id, user_ip) VALUES (?, ?)',
        [pageId, userIp]
      );
    } catch {
      // Ignora duplicados por UNIQUE(page_id, user_ip)
    }
  }

};


export async function isLiked(pageId, userIp) {
  const [rows] = await pool.query(
    'SELECT id FROM likes WHERE page_id=? AND user_ip=?',
    [pageId, userIp]
  );
  return rows.length > 0;
}

export async function countLikes(pageId) {
  const [rows] = await pool.query(
    'SELECT COUNT(*) AS total FROM likes WHERE page_id=?',
    [pageId]
  );
  return rows[0].total;
}

export async function addLike(pageId, userIp) {
  await pool.query(
    'INSERT INTO likes (page_id, user_ip) VALUES (?,?)',
    [pageId, userIp]
  );
}

export async function removeLike(pageId, userIp) {
  await pool.query(
    'DELETE FROM likes WHERE page_id=? AND user_ip=?',
    [pageId, userIp]
  );
}
