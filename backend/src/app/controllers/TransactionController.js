import db from "../database/db.js";

export const getList = (_, res) => {
  const sql = `SELECT * FROM transactions;`;
  
  db.query(sql, (error, result) => {
    if(error) {
      res.status(404).json({'error': error});
    } else {
      res.status(200).json(result);
    }
  });
};

 export const addList = (req, res) => {
   const transaction = req.body;
   const sql = `INSERT INTO transactions SET ?;`;

   db.query(sql, transaction, (error, result) => {
     if(error) {
       res.status(404).json({'error': error});
     } else {
       res.status(201).json(result);
     }
   });
 };

export const deleteList = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM transactions WHERE id=?;`;

      db.query(sql, id, (error, result) => {
        if (error) {
        res.status(404).json({'error': error});
      } else {
        res.status(200).json(result);
      }
    })
};

export const updateList = (req, res) => {
  const id = req.params.id;
  const transaction = req.body;
  const sql = `UPDATE transactions SET ? WHERE id=?;`
  db.query(sql, [transaction, id], (error, result) => {
    if (error) {
      res.status(404).json({'error': error});
    } else {
      res.status(200).json(result);
    }
  })
};