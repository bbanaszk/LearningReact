import React from 'react';
import Image from 'next/image';
import takeMyMoney from '/public/images/takemymoney.png';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Typography} from "@mui/material";
export default function Form() {
    return(
        <div>
            <div>
                <div className='input-group'>
                    <div className='top-part'>
                        <Typography>Top text</Typography>
                        <TextField variant='outlined' size='small' style={{width:222}}/>
                    </div>
                    <div className='bottom-part'>
                        <Typography>Bottom text</Typography>
                        <TextField variant='outlined' size='small' style={{width:'222px'}}/>
                    </div>
                </div>
                <Button className='meme-button' style={{textTransform:'none'}}>
                    Get a new meme image 🖼
                </Button>
            </div>
            <Image className="meme-image" src={takeMyMoney} alt="bart from futureama"/>
        </div>
    )
}