import {Router} from 'express' ;
import {GetBooks,GetBookById,AddBooks,RemoveBook,UpdateBook} from './controller.js' 
const router = Router();


router.get('/',GetBooks)
router.get('/:id',GetBookById)
router.post('/add_book',AddBooks)
router.delete("/:id",RemoveBook)
router.put('/:id',UpdateBook)


// router.get('/',(req,res)=>{
//     res.send("using api router");
// })
export default router;