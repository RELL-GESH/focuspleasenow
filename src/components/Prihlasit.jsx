import React from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material'
function Prihlasit() {
  return (
    <div>
      <TextField id="outlined-basic" label="Text" variant="outlined" sx={{bgcolor:'white'}}/>
      <br />
      <TextField id="outlined-basic" label="Email" variant="outlined" sx={{bgcolor:'white'}}/>
      <br />
      <TextField id="outlined-basic" label="Jméno" variant="outlined" sx={{bgcolor:'white'}}/>
      <br />
    </div>
  )
}

export default Prihlasit
