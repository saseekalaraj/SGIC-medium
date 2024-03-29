import React from 'react'
import { Segment, Image, Header, Item, Button } from 'semantic-ui-react'
const eventImageStyle = {
    filter: 'brightness(30%)'
};

const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

const EventDetailedHeader = () => {
    return (
        <Segment.Group>
            <Segment basic attached="top" style={{ padding: '0' }}>
                <Image src="https://dl.memuplay.com/new_market/img/com.activision.callofduty.shooter.sc0.2019-03-21-12-01-31.png" fluid style={eventImageStyle} />

                <Segment basic style={eventImageTextStyle}>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size="huge"
                                    content="Event Title"
                                    style={{ color: 'white' }}
                                />
                                <p>Event Date</p>
                                <p>
                                    Hosted by <strong>Hosted by</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>

            <Segment attached="bottom">
                <Button>Cancel My Place</Button>
                <Button color="teal">JOIN THIS EVENT</Button>

                <Button color="orange" floated="right">
                    Manage Event
                </Button>
            </Segment>
        </Segment.Group>
    )
}

export default EventDetailedHeader
