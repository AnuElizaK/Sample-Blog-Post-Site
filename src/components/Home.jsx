import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Typography} from '@mui/material';

const Home = () => {
  const [items, setItems] = React.useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => setItems(response.data))
    .catch(error => console.error(error))
  }, []);
  return (
    <TableContainer id="tc" component={Paper} elevation={3} sx={{ mt: 4, width: '50%'}}>
      <Table sx={{ backgroundColor: 'rgb(237, 223, 253)' }}>
        <TableHead sx={{ backgroundColor: 'rgb(198, 245, 252)'}}>
          <TableRow>
            <TableCell sx={{border: '2px solid rgb(2, 132, 150)'}}><h3>ID</h3></TableCell>
            <TableCell sx={{border: '2px solid rgb(2, 132, 150)'}}><h3>Title</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{border: '2px solid rgb(2, 132, 150)'}}>
          {items.map((items) => (
            <TableRow key={items.id}>
              <TableCell sx={{border: '2px solid rgb(2, 132, 150)'}}>{items.id}</TableCell>
              <TableCell sx={{border: '2px solid rgb(2, 132, 150)'}}>{items.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default Home
