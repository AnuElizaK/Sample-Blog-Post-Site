import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogForm = () => {
    const navigate=useNavigate()
  return (
    <div id="blog">
        <form>
        <h2>Blog Form</h2><br></br>
            <label htmlFor="name">Blog name: </label>
            <input type="name" 
                    id="name" 
                    name="name"  
                    required />
            <br></br>
            <br></br>
            <label htmlFor="description">Description: </label>
            <textarea type="description" 
                    id="description" 
                    name="description" 
                    required />
            <br></br>
            <br></br>
            <label htmlFor="author">Author name: </label>
            <input type="author" 
                    id="author" 
                    name="author" 
                    required />
            <br></br>
            <br></br>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default BlogForm