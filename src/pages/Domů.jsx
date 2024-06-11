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
import Spline from '@splinetool/react-spline';

function Domů() {
  return (
    <div>
      <Navbar />
      <Spline scene="https://prod.spline.design/YiaI5eVxFyGbTANI/scene.splinecode" />
      <Box className='squere2'></Box>
      <Paper elevation={10}>
        <br />
      <h2 style={{textAlign:'center', color:'#124e66'}}>AKTUALITY</h2>
      </Paper>
      <Paper>
      <GridBox />
      <br />
      <br />
      </Paper>
      <Box className='footer' sx={{bgcolor:'#2e3944', justifyContent:'center'}}>
      <h2 style={{textAlign:'center', color:'white'}}>Napište nám<br /> <Prihlasit /></h2>
      </Box>
      <Box  className='footer2' sx={{bgcolor:'#124e66', justifyContent:'center'}}>
      <p style={{textAlign:'center', color:'white'}}>@David F.<br /> Jiri T. <br /> Petr C. <br />Telefon: 315 672 031<br />
E-mail: oudobren@seznam.cz</p>
      </Box>
    </div>
  )
}

export default Domů
