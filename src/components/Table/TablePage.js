import React from 'react';
import Table from '../Table/Table';
import Button from '@mui/material/Button';
import Header from '../Header/Header';
import './Table.css';
import { useNavigate } from 'react-router';

function TablePage(props) {

    const navigate = useNavigate();

  const navigateToMain = () => {
    //navigate to main
    navigate('/');
  };
    return (
        <div>
            <Header/>
        <div className='TablePage'>
            <Table />
                <div className='sub-btns-div'>
                    <Button className='back-btn' variant="contained" onClick={navigateToMain}>Back</Button>
                <Button className="sub-btns" variant="contained">Save as draft</Button>
                <Button className='sub-btns' variant="contained">Publish</Button>
            </div>
        </div>
        </div>
    )
}

export default TablePage

// import React, { Component } from 'react';

// export default class TablePage extends Component {
//     constructor(props)
//     { super(props); }
//     render() {
//         return (
//             <div>
//                 <p>{this.props.handleNewInput}</p>
//             </div>
//         )
//     }
// }