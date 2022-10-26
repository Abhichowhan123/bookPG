import  query from 'express';
import pool from '../../db.js'
import { getBook,getBookById,addBooks,removeBook,updateBook }  from "./queries.js"


// get all data in database
export const GetBooks = (req,res)=>{
    pool.query(getBook,(error,result)=>{
        if (error)throw error;
        res.status(200).json(result.rows);
    })
};
// get one  data using id from database 
export const GetBookById =  (req,res)=>{
    const id =  req.params.id;
    pool.query(getBookById,[id],(error,result)=>{
        if(error) throw error;
        res.status(200).json(result.rows);
    });
}
// add Book
export const AddBooks = (req,res)=>{``
    const {bookname,author,language,publisher} = req.body;
    pool.query(addBooks,[bookname,author,language,publisher],(error,result)=>{
        if (error)throw error;
        res.status(200).send("Book created successfully");
    })
};
//remove Book
export const RemoveBook = (req,res)=>{
    const id = parseInt(req.params.id);//parseInt is a function whichconvert string to id

    pool.query(getBookById,[id],(error,results)=>{
            const noBookFound = !results.rows.length;
            if (noBookFound){
                res.send("Book does not exit in the database");
            };
            pool.query(removeBook,[id],(error,result)=>{
                if (error)throw error;
                res.status(200).send("Book remove successfully");
            });
        });
    }
// update Book
export const UpdateBook = (req,res)=>{
    const id =  parseInt(req.params.id);
    const{bookname} = req.body ;
    pool.query(getBookById,[id],(error,results)=>{
        const noBookFound = !results.rows.length;
        if (noBookFound){
            res.send("Book does not exist in database  ");
        }
        pool.query(updateBook,[bookname,id],(error,results)=>{
            if (error)throw error;
            res.status(200).send("Book update successfully");

        });
    });
} 
