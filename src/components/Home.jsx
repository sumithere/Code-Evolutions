import React from 'react';
import Link from '@mui/material/Link';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
function Home() {
    return (<div style={{display:"flex"}}>
        <div>Home
        </div>

        <Link href="signin" variant="body2">
            <LoginIcon></LoginIcon>
        </Link>
        <Link href="signup" variant="body2">
            <LogoutIcon></LogoutIcon>
        </Link>
    </div>
    )
}

export default Home