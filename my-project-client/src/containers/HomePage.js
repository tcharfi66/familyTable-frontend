import React, {Component} from "react";

import NavBar from "./containers/NavBar"; 
import MapBox from "./components/MapBox";
import EventsContainer from "./containers/EventsContainer"; 



const allEvents ="http://localhost:3000/events"

class HomePage extends Component{

state = {
    allEvents: []
}

componentDidMount(){ 
    fetch(allEvents)
    .then(r => r.json())
    .then(events => this.setState({
        allEvents: events
    }))
}

joinEvent = (event) => {
// increment numbner of registered attendees
//do not allow to join if full (simple conditional)


}


    render(){
        return(
            <div>
                <div>
                    <NavBar/>
                </div>

                <div>
                    <MapBox/>
                </div>

                <div>
                    <EventsContainer/>
                </div>
            </div>


        );
    }

}


export default HomePage; 