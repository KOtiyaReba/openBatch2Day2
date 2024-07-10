import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <input placeholder='username'/>
      <br /><br />
      <input type="password" placeholder='password' />
      <br /><br />
      <button>Login</button>
      <br /><br /><br />
      <Typography variant='h3'>Login Page</Typography>
      <br />
      <TextField variant='outlined' label='Username'/>
      <br /><br />
      <Button variant='text' color='error'>Login</Button>&nbsp;
      <Button variant='contained' color='secondary'>Login</Button>&nbsp;

      <Button variant='outlined' color='success'>Login</Button>

    </div>
  )
}

export default First
