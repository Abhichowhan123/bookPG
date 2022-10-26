
export const getBook = "SELECT * FROM book";
export const getBookById = "SELECT * FROM book WHERE id = $1";
export const addBooks = "INSERT INTO book (bookname,author,language,publisher) VALUES ($1,$2,$3,$4)";
export const removeBook = "DELETE FROM book WHERE id = $1";
export const updateBook = "UPDATE book SET bookname = $1 WHERE id =$2";



// post
//    {

//     "bookname": "harry potter",
//     "author": "l",
//     "language": "englisg",
//     "publisher": "l"
// }

