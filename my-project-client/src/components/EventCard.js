import React from "react";
import { Card, Button, Grid, GridColumn } from 'semantic-ui-react';


const EventCard = props =>{

    <GridColumn>
            <Card>
                <Card.Content>
                    <Card.Header>
                        {props.event.theme}
                    </Card.Header>
                    {props.event.dressCode}
                    <Card.Description>
                        {props.event.description}

                    </Card.Description>
                </Card.Content>



            </Card>








    </GridColumn>


}

export default EventCard;