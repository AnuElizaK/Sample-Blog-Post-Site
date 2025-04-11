import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import BlogForm from './components/BlogForm'
import './index.css'
const App = () => {
  return (
    <div>
      <Router>
        <div className="App">
          <Header/>
          <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/blogform' element={<BlogForm/>}/>
          </Routes>
        </div>
      </Router>
   </div>
    
  )
}

export default App