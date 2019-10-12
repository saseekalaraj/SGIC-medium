import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

export default class EventForm extends Component {
    state = {
        title: '',
        date:'',
        place:'',
        city:'',
        hostedBy:''
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.createEvent(this.state)
    }
    handleChange = ({target:{name,value}}) => {
        this.setState({
            [name]: value
        })
    }
    render() {
        const { cancelFormOpen } = this.props
        const { title,date,place,city,hostedBy} = this.state
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
                        <input placeholder="Enter the name of person hosting" onChange={this.handleChange} value={hostedBy} name='hostedBy'/>
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
