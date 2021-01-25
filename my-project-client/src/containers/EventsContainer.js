//Like productcolelction
import React, {Component} from "react"; 
import EventCard from "../components/EventCard"
import {Grid, Header, Button,Dropdown, Checkbox, Form, Segment} from "semantic-ui-react"



class EventsContainer extends Component{

state = {
    theme: "", 
    dressCode: "", 
    description: ""
}
    render(){
        return (
            <div>
                    {/* <Header as='h5' block>

                        <span>
                            Sort by Genre:{'  '}
                            <Dropdown 
                            inline
                            options={categories}
                            defaultValue={categories[0].value}
                            />
                        </span>
                        
                    </Header>  */}

                    {/* Create New Event  */}

         <Segment inverted>
             <Form inverted>

                <Form.Field>
                    <label>Theme/Cuisine/Genre: </label>
                    <input placeholder='Theme' onChange={(event) => this.setState({theme: event.target.value})}/>
                </Form.Field>

                <Form.Field>
                    <label>Dress Code: </label>
                    <input placeholder='DressCode' onChange={(event) => this.setState({dressCode: event.target.value})}/>
                </Form.Field>

                <Form.Field>
                    <label>Description: </label>
                    <input placeholder='Price' onChange={(event) => this.setState({description: event.target.value})} />
                </Form.Field>

                
                <Button type='submit' basic color='blue' onClick={() =>{
                            
                        
                    const newEvent = {
                            theme: this.state.theme ,
                            dressCode: this.state.dressCode,
                            description: this.state.description
                    }
                        
                        fetch("http://localhost:3000/events",{
                            method: "POST", 
                            headers: {"Content-Type": "application/json"}, 
                            body: JSON.stringify(newEvent)

                        }).then(r => r.json())
                        .then(event => this.props.addEvent(event))

                        }   
                    }>Submit</Button>

            
            </Form>
            </Segment>
          
            
           <Grid columns={3} divided>
                 <Grid.Row>
                 {
                    this.props.products.map(p => <EventCard product={p} addToCart={this.props.addToCart} deleteListing= {this.props.deleteListing} />)


                }

                 </Grid.Row>
               
               
           </Grid>
           </div>
        ); 
    }

}

export default ProductCollection; 