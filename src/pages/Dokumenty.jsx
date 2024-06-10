import React from 'react'
import Paper from '@mui/material/Paper';
import Navbar from '../components/Navbar'
import { Box } from '@mui/material'
import GridBox5 from '../components/GridBox5'
import GridBox6 from '../components/GridBox6'
import GridBox7 from '../components/GridBox7'
function Dokumenty() {
  return (
    <div>
      <Navbar />
      <h2 style={{textAlign:'center', color:'#124e66'}}>Vyhlášky a nařízení</h2>
      <h2 style={{textAlign:'center', color:'white'}}>Vyhlášky a nařízení</h2>
      <Paper elevation={10}>
      </Paper>
      <GridBox5 />
      <br />
      <br />
      <br />
      <h2 style={{textAlign:'center', color:'white'}}>Zápisy z veřejného zasedání</h2>
      <GridBox6 />
      <br />
      <br />
      <br />
      <h2 style={{textAlign:'center', color:'white'}}>Smlouvy o pronájmu</h2>
      <GridBox7 />
      
      
    </div>
  )
}

export default Dokumenty
