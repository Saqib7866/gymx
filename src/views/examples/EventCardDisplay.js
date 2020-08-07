import React, { Component } from "react";
import Events from "./Events";
import axios from 'axios'
class EventCardDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CardInfo: [],
    };
  }

  componentDidMount=()=>{

      axios.get('http://localhost:1337/events').then(res => {
        console.log(res.data);
       this.setState({CardInfo:res.data})
        
    }).catch((res)=>{
        console.log(res)
    });
  }
  render() {
    let cardDisplay = this.state.CardInfo.map((card,id) => {
      return (
        <div className="col-sm-4">
          <Events
           eventImg={card.image}
            eventName={card.name}
            eventDescp={card.description}
            eventDate={card.date}
           
          />

          
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{cardDisplay}</div>
      </div>
    );
  }
}

export default EventCardDisplay;
