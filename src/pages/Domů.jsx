import React from 'react'
import Navbar from '../components/Navbar'
import GridBox from '../components/GridBox'
import Pocasi from '../components/Pocasi'
import Logo from '../assets/obecdobrenlogo.png'
import { Padding } from '@mui/icons-material'
import Paper from '@mui/material/Paper';
import Options from '../components/Options'
import { Box } from '@mui/material'
import { green } from '@mui/material/colors'
import Prihlasit from '../components/Prihlasit'
import Button from '../components/Button'

function Domů() {
  return (
    <div>
      <Navbar />
      <p className='squere'></p>
      <p className='squere2'></p>
      <Paper elevation={10}>
      <h2 style={{textAlign:'center', color:'#124e66'}}>AKTUALITY</h2>
      </Paper>
      <Paper>
      <GridBox />
      </Paper>
      <Box sx={{bgcolor:green[900]}}>
      <h2 style={{textAlign:'center', color:'white'}}>Napište nám<br /> <Prihlasit /></h2>
      </Box>
      <Box sx={{bgcolor:green[900]}}>
      <h5 style={{textAlign:'center', color:'white'}}>@David F.<br /> Jiri T. <br /> Petr C.</h5>
      </Box>
    </div>
  )
}

export default Domů
