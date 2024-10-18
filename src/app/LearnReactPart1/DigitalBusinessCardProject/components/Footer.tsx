import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';
export default function Footer() {
    return(
        <div className='footer-container' style={{display:'flex'}}>
            <IconButton component='a' href="https://x.com/7fgqy27gg4"  target="_blank" rel="noopener noreferrer">
                <TwitterIcon style={{fontSize: '35px', color: '#918E9B'}} />
            </IconButton>
            <IconButton component='a' href="https://www.facebook.com/borys.banaszkiewi/"  target="_blank" rel="noopener noreferrer">
                <FacebookIcon style={{fontSize: '35px', color: '#918E9B'}}/>
            </IconButton>
            <IconButton component='a' href="https://www.instagram.com/borysbanas/"  target="_blank" rel="noopener noreferrer">
                <InstagramIcon style={{fontSize: '35px', color: '#918E9B'}}/>
            </IconButton>
            <IconButton component='a' href="https://github.com/bbanaszk"  target="_blank" rel="noopener noreferrer">
                <GitHubIcon style={{fontSize: '35px', color: '#918E9B'}}/>
            </IconButton>
        </div>
    )
}