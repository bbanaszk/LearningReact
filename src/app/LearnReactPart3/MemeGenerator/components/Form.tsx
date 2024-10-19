'use client';
import React, { useState } from 'react';
import Image from "next/image";
import memesData from "./memesData";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Typography} from "@mui/material";

export default function Form() {
    let [currentImage, setNewImage] = useState("")
    let [topText, setTopText] = useState("")
    let [bottomText, setBottomText] = useState("")
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomIndex = Math.floor(Math.random() * memesArray.length)
        setNewImage(memesArray[randomIndex].url)
    }
    
    return (
        <div>
            <div>
                <div className='input-group'>
                    <div className='top-part'>
                        <Typography>Top text</Typography>
                        <TextField variant='outlined' size='small' style={{width: 222, color: 'white', fontWeight: 700, fontSize: 18}} value={topText} onChange={(e) => setTopText(e.target.value)} />
                    </div>
                    <div className='bottom-part'>
                        <Typography>Bottom text</Typography>
                        <TextField variant='outlined' size='small' style={{width: 222, color: 'white', fontWeight: 700, fontSize: 18}} value={bottomText} onChange={(e) => setBottomText(e.target.value)} />
                    </div>
                </div>
                <Button className='meme-button' onClick={getMemeImage} style={{textTransform: 'none'}}>
                    Get a new meme image 🖼
                </Button>
            </div>

            {currentImage && (
                <div className='meme-image-container'>
                    <Image
                        className="meme-image"
                        src={currentImage}
                        alt="Meme Image"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{
                            maxWidth: "100%",
                            objectFit: "contain"
                        }}
                    />
                    <div className="meme-text top">{topText}</div>
                    <div className="meme-text bottom">{bottomText}</div>
                </div>
            )}
        </div>
    );
}