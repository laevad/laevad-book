import  React, {useState} from "react";

function CreateBook({onCreate}) {

    const [book, setBook] = useState({
        title: "",
        description:""
    })

    const handleChange = (e) => {
      setBook({
          ...book,
          [e.target.name]: e.target.value
      })
    }
    
    const onSubmit = (e) => {
      e.preventDefault()
        onCreate(book)


    }

    return <form onSubmit={onSubmit}>
        <label htmlFor="">Title: </label>
        <input type="text" name={"title"} value={book.title} onChange={(e)=>handleChange(e)}/>
        <label htmlFor="">Description: </label>
        <input type="text" name={"description"} value={book.description} onChange={(e)=>handleChange(e)}/>
        <input type={"submit"} value={"Submit"}/>
    </form>
}

export default CreateBook