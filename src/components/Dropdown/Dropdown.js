import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [design, setDesign] = React.useState('');

  const handleChange = (event) => {
    setDesign(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 500 }}>
      <FormControl sx={{minWidth: 800}}>
        <InputLabel id="demo-simple-select-label">Design Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={design}
          label="Design"
          onChange={handleChange}
        >
          <MenuItem value={10}>Simple NFT</MenuItem>
          <MenuItem value={20}>Coupon</MenuItem>
          <MenuItem value={30}>Vending Machine</MenuItem>
          <MenuItem value={40}>Collectible</MenuItem>
          <MenuItem value={50}>Ticket</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
