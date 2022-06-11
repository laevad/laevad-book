import {useState} from "react";


function TableBook({books, onDelete, onUpdate}) {

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
                    <DescriptionForm book={book} onUpdate={onUpdate}/>
                    <td><button onClick={()=> onDelete(book._id)}>Delete</button></td>
                </tr>
            })
        }
        </tbody>
    </table>
}

function DescriptionForm({book,onUpdate}) {
    const [description, setDescription] = useState(book.description)

    const handleChange= (event) =>{
        setDescription(event.target.value)
    }

    return <>
        <td>
            <input type="text" value={description} onChange={(e)=>handleChange(e)}/>
        </td>
        <td>
            <button onClick={()=>onUpdate({_id: book._id, description})}>Update</button>
        </td>
    </>
}


export default TableBook