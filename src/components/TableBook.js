


function TableBook(props) {
    const {books}= props
    // console.log(books)
    return <table>
       <thead>
       <tr>
           <td>Title</td>
           <td>Description</td>
       </tr>
       </thead>
        <tbody>
        {
            books.map(book =>{
                return <tr key={book._id}>
                    <td>{book.title}</td>
                    <td>{book.description}</td>
                </tr>
            })
        }
        </tbody>
    </table>
}
export default TableBook