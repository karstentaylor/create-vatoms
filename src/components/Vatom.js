import React, { useState } from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { CardActionArea, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import DialogButton from './Dialog/Dialog';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';


export default function Vatom(props) {

    // const [vatomTitle, setVatomTitle] = useState('Testing title');
    // const [description, setDescription] = useState('Test description');
    const [open, setOpen] = useState(false);

    const setTempName = (name) => {
        // props.image.tempName=title
        let newImages = [...props.images]
        let newImage = {
            ...props.images[props.index]
        }
        newImage.tempName = name;
        props.setImages(newImages)
    }

    const setTempDescription = (description) => {
        // props.image.tempDescription=description
        let newDescriptions = [...props.images]
        let newDescription = {
            ...props.images[props.index]
        }
        newDescription.tempDescription = description;
        props.setImages(newDescriptions)
    }

    const handleClickOpen = () => {
        setOpen(true);
        if (open === true) {
            console.log('open');
            
        }
      };
    
    const handleClose = () => {
        setOpen(false);
      };
    
    return (
        <ImageListItem key={props.index} >
            <Card>
                    <CardMedia
                        component='img'
                    image={props.image['data_url']}
                        alt={`${props.image.name}`}
                    />
                <Box>
                    <ImageListItemBar
                        title={props.image.name}
                        position='below'
                        actionIcon={
                            <IconButton
                                actionposition="right"
                                aria-label={`info about ${props.image.name}`}>
                                <DialogButton image={props.image} images={props.images} index={props.index} handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} setOpen={setOpen} description={props.image.description} setTempDescription={setTempDescription} setTempName={setTempName} onImageUpdate={props.onImageUpdate} setImages={props.setImages}/>
                            </IconButton>
                        }
                        subtitle={<IconButton
                            actionposition="center"
                            aria-label='remove-vatom'>
                            <DeleteIcon variant="contained" onClick={() => props.onImageRemove(props.index)} />
                        </IconButton>}
                        // subtitle={
                        //     <IconButton><DialogButton vatomTitle={vatomTitle} setVatomTitle={setVatomTitle} handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} setOpen={setOpen} description={description} setDescription={setDescription} /></IconButton>}
                ></ImageListItemBar>
                    </Box>
                </Card>
        </ImageListItem>
    )
};