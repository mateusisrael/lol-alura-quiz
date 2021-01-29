import db from '../../db.json';

export default (req, res) => {
  res.json(db);
}