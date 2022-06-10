import React from 'react';
import { ImageList } from '@mui/material';
import Vatom from './Vatom';

export default function VatomList(props) {


    return (
        <ImageList className="ImageList" sx={{ width: 600, height: 550 }}>
            {props.images.map((image, index) => (
                <Vatom key={index} setImages={props.setImages} images={props.images} image={image} index={index} dataURLKey={"data_url"} onImageRemove={props.onImageRemove} onImageUpdate={props.onImageUpdate}/>
            ))}
        </ImageList>
    )
}