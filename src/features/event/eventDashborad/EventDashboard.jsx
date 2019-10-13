import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventFrom/EventForm'
import cuid from 'cuid'

const events = [
    {
        id: '1',
        title: 'Trip to Tower of London',
        date: '2018-03-27',
        category: 'culture',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: "Tower of London, St Katharine's & Wapping, London",
        hostedBy: 'Bob',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
        attendees: [
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            },
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            }
        ]
    },
    {
        id: '2',
        title: 'Trip to Punch and Judy Pub',
        date: '2018-03-28',
        category: 'drinks',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: 'Punch & Judy, Henrietta Street, London, UK',
        hostedBy: 'Tom',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
        attendees: [
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            },
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            }
        ]
    }
]

export default class extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
            events: events,
            selectedEvent: null
        }
    }
    // handleOpen() {
    //     this.setState((prvState) => ({
    //         isOpen: !prvState.isOpen
    //     }))
    // }
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
        this.setState(({ events }) => ({
            events: [...events, newEvent]
        }))

    }
    handleSelectEvent = (evt) => {
        this.setState({
            selectedEvent: evt,
            isOpen: true
        })
    }
    handleUpdateEvent = (updatedEvent) => {
        this.setState(({ events }) => ({
            events: events.map(event => {
                if (event.id === updatedEvent.id) {
                    return { ...updatedEvent }
                } else {
                    return event
                }
            }),
            isOpen: false,
            selectedEvent: null
        }))
    }
    handleDeleteEvent = id => {
        this.setState(({events})=>({
            events: events.filter(e => e.id !== id)
        }))
    }
    render() {
        const { isOpen, events, selectedEvent } = this.state
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList events={events} selectedEvent={this.handleSelectEvent} deleteEvent={this.handleDeleteEvent}/>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button positive content='Create Event' onClick={this.handleCreateFormOpen} />
                    {isOpen && <EventForm key={selectedEvent ? selectedEvent.id : 0} selectedEvent={selectedEvent} cancelFormOpen={this.handleFormCancel} createEvent={this.handleCreateEvent} updatedEvent={this.handleUpdateEvent} />}
                </Grid.Column>
            </Grid>
        )
    }
}
