import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

function Signup() {
  return <div style={{width:"100vw",height:"70vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div style={{display:"flex", flexDirection:"column",alignItems:"center",height:"23rem",width:"25rem",justifyContent:"space-between" , }}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
      <TextField
          required
          fullWidth
          id="outlined-required"
          label="User Name/Email"
        />
        <TextField
        required
        fullWidth
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
         <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Link href="signup" variant="body2">
                  Don't have an account? Sign up
                </Link>
  </div>
  </div>;
}

export default Signup;
