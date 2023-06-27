import React from "react";
// import MarketList from "./MarketList";
import Market from "./Market";

const marketSchedule = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];


class MarketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      marketVisibleOnPage: 0
    };
  }


  handleClickDecrease = () => {
    this.setState(prevState => ({
      marketVisibleOnPage: prevState.marketVisibleOnPage - 1
    }));
  }

  handleClickIncrease = () => {
    this.setState(prevState => ({
      marketVisibleOnPage: prevState.marketVisibleOnPage + 1
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let previousDayButton = null;
    let nextDayButton = null;
    const previousDay = marketSchedule[this.state.marketVisibleOnPage - 1]
    const selectedDay = marketSchedule[this.state.marketVisibleOnPage]
    const nextDay = marketSchedule[this.state.marketVisibleOnPage + 1]
    const market = <Market day={selectedDay.day}
    location={selectedDay.location}
    hours={selectedDay.hours}
    booth={selectedDay.booth} />
    if (this.state.marketVisibleOnPage < 1) {
      currentlyVisibleState = market
      nextDayButton = <button onClick={this.handleClickIncrease}>See {nextDay.day} schedule &#8594;</button>
    } else if (this.state.marketVisibleOnPage > 4) {
      currentlyVisibleState = market
      previousDayButton = <button onClick={this.handleClickDecrease}>&#8592; See {previousDay.day} schedule</button>
    } else {
      currentlyVisibleState = market
      nextDayButton = <button onClick={this.handleClickIncrease}>See {nextDay.day} schedule &#8594;</button>
      previousDayButton = <button onClick={this.handleClickDecrease}>&#8592; See {previousDay.day} schedule</button>
    }

    return (
      <>
        {currentlyVisibleState}
        {previousDayButton}
        {nextDayButton}
      </>
    );
  }
}

export default MarketControl;