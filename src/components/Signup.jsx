import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Signup() {
  return <div style={{width:"100vw",height:"70vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div style={{display:"flex", flexDirection:"column",alignItems:"center",height:"10rem",justifyContent:"space-between" , }}>
      <TextField
          required
          id="outlined-required"
          label="Username/email"
        />
        <TextField
        required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
         <Button variant="outlined">Sign In</Button>
  </div>
  </div>;
}

export default Signup;
