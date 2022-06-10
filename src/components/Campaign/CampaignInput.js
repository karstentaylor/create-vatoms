import React, { Component } from 'react';
import Input from '@mui/material/Input'

export default class CampaignInput extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '' };
        this.handleTitle = this.handleTitle.bind(this)
        this.handleSave = this.handleSave.bind(this);

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitle(e) {
        let title = e.target.value
        this.setState({ title: title })
    }
    handleSave() {
        const { title } = this.state
        this.props.handleInputChange(title)
    }
    render() {
        return (
            <div>
                <input type="text" name="title" onChange={this.handleTitle} />
                <button onClick={this.handleSave}>Save</button>
            </div>
        )
    }
}

//     handleChange(event) {
//         this.setState({ value: event.target.value });
//     }

//     handleSubmit(event) {
//         alert('This is the name of the campaign:' + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Campaign Name:
//                     <Input type="text" focused value={this.state.value} onChange={this.handleChange} />
//                 </label>
                
//             </form>
//         )
//     }
// }