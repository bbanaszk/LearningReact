import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Main() {
    return(
        <main>
            <h2>Borys Banaszkiewicz</h2>
            <h5>Software Engineer</h5>
            <h6><a href="https://bbanaszk.github.io"  target="_blank" rel="noopener noreferrer">BorysBanaszk.website</a></h6>
            <Box display={'flex'} justifyContent={'space-around'} marginLeft={'25px'} marginRight={'25px'}
                 marginTop={'18px'} marginBottom={'32px'}>
                <Button className="button-email" href="mailto:borysbanaszk@gmail.com">
                    <EmailIcon style={{fontSize: '16px', marginRight: '5px'}}/> Email
                </Button>
                <Button className="button-linkedin" href="https://www.linkedin.com/in/borys-banaszkiewicz-211989183"  target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon style={{fontSize: '16px', marginRight: '5px'}}/> LinkedIn
                </Button>
            </Box>
            <div className='main--text'>
                <h4>About</h4>
                <h6>A passionate Software Engineering student at Arizona State Univeristy's Ira A. Fulton School of
                    Engineering, having a proficiency in Python, Java, Swift and SwiftUI. I also have some experience in
                    C,
                    C++, CSS, HTML, JavaScript and React. I enjoy tackling complex challenges efficiently and
                    creatively.
                </h6>
                <h4>Interests</h4>
                <h6>Chess, Astronomy and Space, Video Games, Programming
                </h6>
            </div>
        </main>
    )
}