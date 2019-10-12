import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

export default class EventForm extends Component {
    state = {
        title: '',
        date:'',
        place:'',
        city:'',
        hostBy:''
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        const { cancelFormOpen } = this.props
        const { title,date,place,city,hostBy} = this.state
        return (
            <Segment>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Field>
                        <label>Event Title</label>
                        <input placeholder="Event Name" onChange={this.handleChange} value={title} name='title' />
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input type="date" placeholder="Event Date" onChange={this.handleChange} value={date} name='date'/>
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input placeholder="City event is taking place" onChange={this.handleChange} value={city} name='city' />
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input placeholder="Enter the Venue of the event" onChange={this.handleChange} value={place} name='place'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input placeholder="Enter the name of person hosting" onChange={this.handleChange} value={hostBy} name='hostBy'/>
                    </Form.Field>
                    <Button positive type="submit">
                        Submit
                     </Button>
                    <Button onClick={cancelFormOpen} type="button">Cancel</Button>
                </Form>
            </Segment>
        )
    }
}
