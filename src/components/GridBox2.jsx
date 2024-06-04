import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Hrad from '../assets/hrad-kokorin-12.jpg'
import Hrad2 from '../assets/hrad-kokorin-2.jpg'
import Hrad3 from '../assets/hrad-kokorin-8.jpg'
import Hrad4 from '../assets/hrad-kokorin-4.jpg'
import React from 'react'

function GridBox() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={10}>
            <img src={Hrad} style={{width:450}}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={10}>
          <img src={Hrad2} style={{width:450}}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={10}>
          <img src={Hrad3} style={{width:450}}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={10}>
          <img src={Hrad4} style={{width:450}}/>
          </Paper>
        </Grid>
      </Grid>
      
    </div>
  )
}

export default GridBox
