import React, { Component } from 'react'
import './Table.css';

class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         vatoms: [
            { id: 1, image: 'image', name: 'Wasif', description: 21},
            { id: 2, image: 'image',name: 'Ali', description: 19},
            { id: 3, image: 'image',name: 'Saad', description: 16},
            { id: 4, image: 'image',name: 'Asad', description: 25}
         ]
      }
   }


   renderTableData() {
      return this.state.vatoms.map((vatom, index) => {
         const { id, image, name, description } = vatom //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{image}</td>
               <td>{name}</td>
               <td>{description}</td>
            </tr>
         )
      })
   }

   renderTableHeader() {
      let header = Object.keys(this.state.vatoms[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }


   render() {
      return (
         <div>
            <h1 id='title'>Campaign Name</h1>
            <table id='vatoms'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Table