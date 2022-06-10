import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InfoIcon from '@mui/icons-material/Info';
import Dropdown from '../Dropdown/Dropdown';
import Box from '@mui/material/Box';
import { CardActionArea, FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import Input from '@mui/material/Input';


export default function FormDialog(props) {
  const [vatomTitleDraft, setVatomTitleDraft] = useState(props.vatomTitle);
  const [descriptionDraft, setDescriptionDraft] = useState(props.description);
    // const [open, setOpen] = useState(false);


//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
const setTempName = (e) => {
  props.image.tempName=e.target.value

  let newImages = [...props.images]
  let newImage = {
      ...props.images[props.index]
  }
  newImage.tempName = e.target.value;
  props.setImages(newImages)
}

const setTempDescription = (e) => {
  props.image.tempDescription=e.target.value
  let newDescriptions = [...props.images]
  let newDescription = {
      ...props.images[props.index]
  }
  newDescription.tempDescription = e.target.value;
  props.setImages(newDescriptions)
}
  
  
    const handleNameChange = (e) => {
        // setVatomTitleDraft(e.target.value);
      // props.image.tempName=e.target.value
      props.setTempName(e.target.value)
    }
  
  useEffect(() => {
    if (props.open) {
      props.image.tempName=props.image.name
      props.image.tempDescription=props.image.description
      // setVatomTitleDraft(props.vatomTitle)
      // setDescriptionDraft(props.description)
    }
  }, [props.open])
  
  
  const handleDescriptionChange = (e) => {
    // setDescriptionDraft(e.target.value)
    // props.image.tempDescription=e.target.value
    props.setTempDescription(e.target.value);
  }

  // const submitChanges= () => {
  //   props.setDescription(name.name)
  // }

  const cancelClick = (e) => {
    e.preventDefault();
    props.handleClose();
  }
    
  const updateClick = () => {
        props.handleClose();
      // handleNameChange();
      // handleDescriptionChange();
    props.image.name = props.image.tempName;
    props.image.description = props.image.tempDescription;
    }

  return (
    <div>
      <InfoIcon variant="outlined" onClick={props.handleClickOpen}>
        Open form dialog
      </InfoIcon>
      <Dialog open={props.open} onClose={props.handleClose}
      onSubmit={updateClick}>
        <DialogTitle>Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Change your Vatom details here
          </DialogContentText>
          <Box
            component='form'
            noValidate
            autoComplete='off'>
            <FormControl variant='standard'
            name='vatomName'>
              <InputLabel htmlFor='vatom-name'>Name</InputLabel>
              <Input id='vatom-name' value={props.image.tempName} onChange={setTempName} />
            </FormControl>
            <FormControl variant='standard'>
              <InputLabel htmlFor='vatom-description'>Description</InputLabel>
              <Input
                id="vatom-description"
                value={props.image.tempDescription}
                onChange={setTempDescription}
              aria-describedby='vatom-description-text'/>
            </FormControl>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
                      label="Name"
                      onChange={handleNameChange}
            type="name"
            fullWidth
            variant="standard"/>
                  <TextField
                      margin='dense'
                      id='description'
            label='Description'
            name="description"
                      fullWidth
                      variant='standard' /> */}
            </Box>
        </DialogContent>
              <DialogActions>
          <Button onClick={cancelClick}>Cancel</Button>
          <Button onClick={updateClick}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// return (
//   <div>
//     <InfoIcon variant="outlined" onClick={props.handleClickOpen}>
//       Open form dialog
//     </InfoIcon>
//     <Dialog open={props.open} onClose={props.handleClose}>
//       <DialogTitle>Details</DialogTitle>
//       <DialogContent>
//         <DialogContentText>
//          Change your Vatom details here
//         </DialogContentText>
//         <TextField
//           autoFocus
//           margin="dense"
//           id="name"
//           name="name"
//                     label="Name"
//                     onChange={handleNameChange}
//           type="name"
//           fullWidth
//           variant="standard"/>
//                 <TextField
//                     margin='dense'
//                     id='description'
//           label='Description'
//           name="description"
//                     fullWidth
//                     variant='standard' />
//                 <Dropdown/>
//       </DialogContent>
//             <DialogActions>
//         <Button onClick={props.handleClose}>Cancel</Button>
//         <Button onClick={updateClick}>Update</Button>
//       </DialogActions>
//     </Dialog>
//   </div>
// );
// }

