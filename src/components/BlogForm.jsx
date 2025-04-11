import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BlogForm = () => {
    const [name, setName]=useState("")
    const [description, setDescription]=useState("")
    const [author, setAuthor]=useState("")
    const navigate=useNavigate()
  return (
    <div id="blog">
        <form>
            <label htmlFor="name">Blog name: </label>
            <input type="name" 
                    id="name" 
                    name="name"  
                    value={name} 
                    onChange={(e)=>{setName(e.target.value)}} 
                    required />
            <br></br>
            <br></br>
            <label htmlFor="description">Description: </label>
            <input type="description" 
                    id="description" 
                    name="description" 
                    value={description} 
                    onChange={(e)=>{setDescription(e.target.value)}}
                    required />
            <br></br>
            <br></br>
            <label htmlFor="author">Author name: </label>
            <input type="author" 
                    id="author" 
                    name="author" 
                    value={author} 
                    onChange={(e)=>{setAuthor(e.target.value)}}
                    required />
            <br></br>
            <br></br>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default BlogForm