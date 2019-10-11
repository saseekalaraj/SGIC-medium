import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../EventList/EventList'

export default class extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList />
                </Grid.Column>
                <Grid.Column width={6}>
                    <h2>left column</h2>
                </Grid.Column>
            </Grid>
        )
    }
}
