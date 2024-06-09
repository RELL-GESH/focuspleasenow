import React from 'react'
import Paper from '@mui/material/Paper';
import Navbar from '../components/Navbar'
import { Box } from '@mui/material'
import GridBox2 from '../components/GridBox2'
function Dokumenty() {
  return (
    <div>
      <Navbar />
      <h2 style={{textAlign:'center', color:'#124e66'}}>Vyhlášky a nařízení</h2>
      <h2 style={{textAlign:'center', color:'white'}}>Vyhlášky a nařízení</h2>
      <Paper elevation={10}>
      </Paper>
      <GridBox2 />
      <h2 style={{textAlign:'center', color:'white'}}>Vyhlášky a nařízení</h2>
      <GridBox2 />
    </div>
  )
}

export default Dokumenty
