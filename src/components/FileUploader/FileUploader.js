import React, { useState, Component } from 'react';
// import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button';
// import Input from '@mui/material/Input'
import ImageUploading from 'react-images-uploading';
import ImageGrid from '../ImageGrid/ImageGrid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import DialogButton from '../Dialog/Dialog';
import VatomList from '../VatomList';

function FileUploader() {

  const [images, setImages] = useState([]);
  // const [vatoms, setVatoms] = useState([{
  //   image: '',
  //   name: '',
  //   description: ''
  // }])

        const onChange = (imageList, addUpdateIndex) => {
            //data for submit
          console.log(imageList, addUpdateIndex);
          imageList.map((image) => {
            image.name = 'init name';
            image.description = 'init description';
            image.tempName = 'init name'
            image.tempDescription = 'init description'
          })
          setImages(imageList);
        };

        // const handleTitle = (e) => {
        //     let title = e.target.value
        //     this.setState({ title: title })
        //     //submit service to create campaign
        //   };
        
        // const handleClickOpen = () => {
        //     setOpen(true);
        //   };
        
        // const handleClose = () => {
        //     setOpen(false);
        //   };

        // const addImages = useState(images = this.imageList)

        return (
            <div className='FileUploader'>
              <ImageUploading
                multiple
                value={images}
              // value={vatoms}
                onChange={onChange}
                dataURLKey="data_url">
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                }) => (
                  <div className='upload-image-wrapper'>
                    <Button variant="contained" onClick={onImageUpload}>Click to add images</Button>
                    &nbsp;
                    <Button variant='contained' onClick={onImageRemoveAll}>Remove all images</Button>
                  <VatomList images={images} setImages={setImages} dataURLKey={'data_url'} onImageRemove={onImageRemove} onImageUpdate={onImageUpdate}/>
                    <Button className='submit-nav-btn' variant='contained'>Save as draft</Button>
                    <Button className='submit-nav-btn' variant='contained'>Publish</Button>
                  </div>
                )}
              </ImageUploading>
            </div>
        )
    }


export default FileUploader