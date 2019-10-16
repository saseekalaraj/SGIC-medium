import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventFrom/EventForm'
import cuid from 'cuid'
import { connect } from 'react-redux';
import { createEvent, updateEvent, deleteEvent } from '../eventAction';

const mapStateToProps = (state) => ({
    events: state.events
})
const mapDispatchToProps = {
    createEvent,
    updateEvent,
    deleteEvent
}
class EventDashboard extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
            selectedEvent: null
        }
    }
    //create For form open
    handleCreateFormOpen = () => {
        this.setState({
            isOpen: true,
            selectedEvent: null
        })
    }
    handleFormCancel = () => {
        this.setState({
            isOpen: false
        })
    }
    handleCreateEvent = (newEvent) => {
        newEvent.id = cuid()
        newEvent.hostPhotoURL = 'https://randomuser.me/api/portraits/men/20.jpg'
        this.props.createEvent(newEvent)
        this.setState({
            isOpen: false
        })

    }
    handleSelectEvent = (evt) => {
        this.setState({
            selectedEvent: evt,
            isOpen: true
        })
    }
    handleUpdateEvent = (updatedEvent) => {
        this.props.updateEvent(updatedEvent)
        this.setState({
            isOpen: false,
            selectedEvent: null
        })
    }
    handleDeleteEvent = id => {
        this.props.deleteEvent(id)
    }
    render() {
        const { isOpen, selectedEvent } = this.state
        const { events } = this.props
        return (
            <Grid>
                <Grid.Column width={10}  >
                    <EventList events={events} selectedEvent={this.handleSelectEvent} deleteEvent={this.handleDeleteEvent} />
                </Grid.Column>
                <Grid.Column width={6}  >
                    <Button positive content='Create Event' onClick={this.handleCreateFormOpen} />
                    {isOpen && <EventForm key={selectedEvent ? selectedEvent.id : 0} selectedEvent={selectedEvent} cancelFormOpen={this.handleFormCancel} createEvent={this.handleCreateEvent} updatedEvent={this.handleUpdateEvent} />}
                </Grid.Column>
            </Grid>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard)