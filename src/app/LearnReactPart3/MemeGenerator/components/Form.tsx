'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import memesData from "./memesData";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Typography} from "@mui/material";

export default function Form() {
    let [currentImage, setNewImage] = useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomIndex = Math.floor(Math.random() * memesArray.length)
        setNewImage(memesArray[randomIndex].url)
    }
    
    return(
        <div>
            <div>
                <div className='input-group'>
                    <div className='top-part'>
                        <Typography>Top text</Typography>
                        <TextField variant='outlined' size='small' style={{width: 222}}/>
                    </div>
                    <div className='bottom-part'>
                        <Typography>Bottom text</Typography>
                        <TextField variant='outlined' size='small' style={{width: 222}}/>
                    </div>
                </div>
                <Button className='meme-button' onClick={getMemeImage} style={{textTransform: 'none'}}>
                    Get a new meme image 🖼
                </Button>
            </div>
            {/*<div style={{*/}
            {/*    display: 'flex',*/}
            {/*    justifyContent: 'center',*/}
            {/*    alignItems: 'center',*/}
            {/*    width: '100%',*/}
            {/*    height: 'auto',*/}
            {/*    marginTop: '20px'*/}
            {/*}}>*/}
            {/*    {currentImage && (*/}
            {/*        <img*/}
            {/*            className="meme-image"*/}
            {/*            src={currentImage}*/}
            {/*            alt="Meme Image"*/}
            {/*            style={{maxWidth: '100%', height: 'auto', display: 'block'}}*/}
            {/*        />*/}
            {/*    )}*/}
            {/*</div>*/}
            {/*<Image className="meme-image"*/}
            {/*       src={currentImage}*/}
            {/*       alt=""*/}
            {/*       layout="fill"*/}
            {/*       objectFit={'contain'}/>*/}
            {currentImage && (
                <div style={{ position: 'relative', width: '100%', height: '300px', marginTop: '20px' }}>
                    <Image
                        className="meme-image"
                        src={currentImage}
                        alt="Meme Image"
                        fill
                        objectFit="contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            )}
        </div>
    )
}