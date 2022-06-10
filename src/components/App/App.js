import React, { useState, setState, Component } from 'react';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input'
import './App.css';
import TablePage from '../Table/TablePage';
import CampaignInput from '../Campaign/CampaignInput';
import FileUploader from '../FileUploader/FileUploader';
import Imageuploading from 'react-images-uploading';
import ImageGrid from '../ImageGrid/ImageGrid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import DialogButton from '../Dialog/Dialog'
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box'
import VatomList from '../VatomList';
import Dropdown from '../Dropdown/Dropdown';

export default function App (){

  const [images, setImages] = useState([]);
  const [vatomTitle, setVatomTitle] = useState('Testing title');
  const [open, setOpen] = useState(false);

  //Create naming scheme that takes vatomTitles = []; Run a for loop that will select each Vatom and assign it value based on the index number.
  
  let imageList = [];

    const onChange = (imageList, addUpdateIndex) => {
      //data for submit
      setImages(imageList);
    };

    const handleTitle = (e) => {
      let title = e.target.value
      this.setState({ title: title })
      //submit service to create campaign
    };
  
    // const handleClickOpen = () => {
    //   setOpen(true);
    // };
  
    // const handleClose = () => {
    //   setOpen(false);
    // };

    // const addImages = this.useState(images = this.imageList)

    return (
      <div className='App'>
        <div className="nav-bar">
          <Header />
        </div>
        <div className='Campaign'>
          <p>Campaign Title</p>
          <Input type="text" name="title" onChange={handleTitle} />
        </div>
        <div className='Design-Type'>
          <Dropdown />
        </div>
        <div className='Assets'>
          <h4>Add your images below</h4>
            <FileUploader/>
        </div>
      </div>
    )
}



{/* <ImageList className="ImageList" sx={{ width: 600, height: 550}}> */}
                    //{imageList.map((image, index) => (
                      //<Vatom image={image} index={index} dataURLKey={"data_url"}/>
                      // <ImageListItem key={index}>
                      //    <img
                      //                   src={image['data_url']}
                      //                   srcSet={image['data_url']}
                      //                   alt={''}
                      //                   loading="lazy"
                      //               />
                      //               <ImageListItemBar
                      //       title={vatomTitle}
                      //       subtitle={<DeleteIcon variant="contained" onClick={() => onImageRemove(index)}/>}
                      //     position="below"
                      //     actionIcon={
                      //       <IconButton
                      //         sx={{ color: 'rgb(0,0,255)' }}
                      //         aria-label={`info about ${'title'}`}
                      //       >
                      //         <DialogButton vatomTitle={vatomTitle} setVatomTitle={setVatomTitle} handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} setOpen={setOpen} />
                      //       </IconButton>
                      //     }
                      //               />
                      //   </ImageListItem>
                           // ))
                        //}
                   // </ImageList>


            //        <Imageuploading
            //   multiple
            //   value={images}
            //   onChange={onChange}
            //   dataURLKey="data_url">
            //   {({
            //     imageList,
            //     onImageUpload,
            //     onImageRemoveAll,
            //     onImageUpdate,
            //     onImageRemove,
            //   }) => (
            //     <div className='upload-image-wrapper'>
            //       <Button variant="contained" onClick={onImageUpload}>Click to add images</Button>
            //       &nbsp;
            //       <Button variant='contained' onClick={onImageRemoveAll}>Remove all images</Button>
            //       <VatomList imageList={imageList} dataURLKey={"data_url"} />
            //       <Button className='submit-nav-btn' variant='contained'>Next</Button>
            //     </div>
            //   )}
            // </Imageuploading>